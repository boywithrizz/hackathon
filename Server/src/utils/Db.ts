import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

const Connect_To_DB = ()=>{mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Error connecting to MongoDB:", error));}

  export default Connect_To_DB;