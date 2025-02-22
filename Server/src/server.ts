import dotenv from "dotenv";
dotenv.config();

import express, { Request, Response,Application } from "express";
import Connect_To_DB from "./utils/Db";
import bodyParser from "body-parser";
import cors from "cors";
import StudentsRoute from "./Routes/StudentRoutes"; // Import the router
import DocumentsRoute from "./Routes/DocumentsRoutes";


const app: Application = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(require("express-status-monitor")()); //// just for monitoring the server status

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from College Hub Backend!");
  console.log("Hello from College Hub Backend!");
});


Connect_To_DB();


app.use("/api/students", StudentsRoute); // Use the router
app.use("/api/documents", DocumentsRoute); // Use the router

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

