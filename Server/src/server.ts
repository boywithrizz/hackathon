import dotenv from "dotenv";
dotenv.config();
import express, { Request, Response } from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import studentRoutes from "./Routes/studentRoutes"; // Import student routes

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Debugging: Check if the environment variable is loaded
if (!process.env.MONGODB_URI) {
  console.error("❌ MONGODB_URI is not set. Please check your .env file.");
  process.exit(1);
}

const MONGODB_URI = process.env.MONGODB_URI;

// MongoDB Connection with Better Error Handling
mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true } as any)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((error) => {
    console.error("❌ MongoDB Connection Error:", error);
    process.exit(1);
  });

// Routes
app.use("/api/students", studentRoutes); // Use student routes

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from College Hub Backend!");
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
