import express from "express";
import Student from "../models/Student";

import {Register_Student} from "../controller/Student_controller";

const router = express.Router();

router.post("/register",Register_Student);

export default router;

