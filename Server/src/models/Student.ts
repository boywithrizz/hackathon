import mongoose, { Schema, Document } from "mongoose";

interface IStudent extends Document {
  name: string;
  age: number;
  major: string;
}

const StudentSchema: Schema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  major: { type: String, required: true },
});

const Student = mongoose.model<IStudent>("Student", StudentSchema);

export default Student;
