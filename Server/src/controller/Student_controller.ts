import Student from "../models/Student";
import { Request, Response } from "express";

export const Register_Student = async (req:Request,res:Response)=>{
    console.log(req.body);
    try {
        const newStudent = new Student(req.body);
        const savedStudent = await newStudent.save();
        res.status(201).json(savedStudent);

      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
      }
    console.log("Register_Student");
}

