import dotenv from "dotenv";
dotenv.config();
import express, { Request, Response } from "express";
import Connect_To_DB from "./utils/Db";
import bodyParser from "body-parser";
import cors from "cors";
import studentsRoute from "./routes/students_route"; // Import the router

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());


app.get("/", (req: Request, res: Response) => {
  res.send("Hello from College Hub Backend!");
  console.log("Hello from College Hub Backend!");
});

Connect_To_DB();


app.use("/api/students", studentsRoute); // Use the router

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



// import Student from "./models/Student";

// app.post("/api/students", async (req: Request, res: Response) => {
//   try {
//     const newStudent = new Student(req.body);
//     const savedStudent = await newStudent.save();
//     res.status(201).json(savedStudent);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server Error" });
//   }
// });
