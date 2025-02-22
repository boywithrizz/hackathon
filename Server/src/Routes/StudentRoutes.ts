import express from "express";
import RegisterStudent from "../controller/StudentController";

const router = express.Router();

// Route: Create a new student
router.post("/register", RegisterStudent);

export default router;
