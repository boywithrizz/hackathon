import dotenv from "dotenv";
dotenv.config();
import express, { Request, Response, Application } from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import studentRoutes from "./Routes/studentRoutes"; // Import student routes
import multer from "multer";
import { GridFSBucket } from "mongodb";
import fs from "fs";
import Student from "./models/Student";

const app: Application = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Debugging: Check if the environment variable is loaded
if (!process.env.MONGODB_URI) {
  console.error("❌ MONGODB_URI is not set. Please check your .env file.");
  process.exit(1);
}

const MONGODB_URI: string = process.env.MONGODB_URI;

// MongoDB Connection
mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true } as any)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((error) => {
    console.error("❌ MongoDB Connection Error:", error);
    process.exit(1);
  });

const conn = mongoose.connection;
let bucket: GridFSBucket;

conn.once("open", () => {
  if (conn.db) {
    bucket = new mongoose.mongo.GridFSBucket(conn.db, { bucketName: "uploads" });
    console.log("✅ GridFSBucket initialized");
  } else {
    console.error("❌ Failed to initialize GridFSBucket: conn.db is undefined");
  }
});

// Routes
app.use("/api/students", studentRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from College Hub Backend!");
});

// Multer Storage Setup (Store files in `uploads/` temporarily)
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

// 📌 Upload File Route
app.post("/upload", upload.single("file"), async (req: Request, res: Response): Promise<void> => {
  if (!req.file) {
    res.status(400).json({ message: "No file uploaded" });
    return;
  }

  try {
    const fileStream = fs.createReadStream(req.file.path);
    const uploadStream = bucket.openUploadStream(req.file.filename);

    fileStream.pipe(uploadStream);

    uploadStream.on("finish", () => {
      fs.unlinkSync(req.file!.path); // Delete local file
      res.status(201).json({ message: "File uploaded successfully", filename: req.file!.filename });
    });

    uploadStream.on("error", (error) => {
      console.error("Upload Error:", error);
      res.status(500).json({ message: "Upload failed" });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error uploading file" });
  }
});


// 📌 Get File Metadata
app.get("/files/:filename", async (req: Request, res: Response): Promise<void> => {
  try {
    if (!conn.db) {
      res.status(500).json({ message: "Database connection is not established" });
      return;
    }

    const file = await conn.db.collection("uploads.files").findOne({ filename: req.params.filename });

    if (!file) {
      res.status(404).json({ message: "File not found" });
      return;
    }

    res.json(file);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving file" });
  }
});


// 📌 Download File
app.get("/download/:filename", async (req: Request, res: Response): Promise<void> => {
  try {
    if (!conn.db) {
      res.status(500).json({ message: "Database connection is not established" });
      return;
    }

    const file = await conn.db.collection("uploads.files").findOne({ filename: req.params.filename });

    if (!file) {
      res.status(404).json({ message: "File not found" });
      return;
    }

    const downloadStream = bucket.openDownloadStreamByName(req.params.filename);
    res.setHeader("Content-Disposition", `attachment; filename=${req.params.filename}`);
    downloadStream.pipe(res);
  } catch (error) {
    res.status(500).json({ message: "Error downloading file" });
  }
});


// 📌 Delete File
app.get("/download/:filename", async (req: Request, res: Response): Promise<void> => {
  try {
    if (!conn.db) {
      res.status(500).json({ message: "Database connection is not established" });
      return;
    }

    const file = await conn.db.collection("uploads.files").findOne({ filename: req.params.filename });

    if (!file) {
      res.status(404).json({ message: "File not found" });
      return;
    }

    const downloadStream = bucket.openDownloadStreamByName(req.params.filename);
    res.setHeader("Content-Disposition", `attachment; filename=${req.params.filename}`);
    downloadStream.pipe(res);
  } catch (error) {
    res.status(500).json({ message: "Error downloading file" });
  }
});

// 📌 Student API Endpoint
app.post("/api/students", async (req: Request, res: Response) => {
  try {
    const newStudent = new Student(req.body);
    const savedStudent = await newStudent.save();
    res.status(201).json(savedStudent);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
