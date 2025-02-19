import express from "express";
import Student from "../models/Student";

const router = express.Router();

// Route: Create a new student
router.post("/", async (req, res) => {
  try {
    const newStudent = new Student(req.body);
    const savedStudent = await newStudent.save();
    res.status(201).json(savedStudent);
  } catch (error) {
    console.error("❌ Error saving student:", error);
    res.status(500).json({ message: "Server Error" });
  }
});

export default router;
