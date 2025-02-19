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

const Student = mongoose.model<IStudent>("Student", StudentSchema);  //The first argument is the name of the collection in the database, and the second argument is the schema that defines the structure of the documents in the collection. The model function returns a model object that we can use to interact with the collection. The model object has methods like find, findOne, save, and delete that we can use to interact with the collection.

export default Student;
