import express, { Request, Response } from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import path from "path";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

const MONGODB_URI = "mongodb://localhost:27017/collegehub"; // Replace with your MongoDB URI

mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Error connecting to MongoDB:", error));

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from College Hub Backend!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

import Student from "./models/Student";

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
