import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
const dbURL = process.env.dbURL;
const connectDB = async (uri) => {
  try {
    const option = {
      dbName: "userinfo",
    };
    await mongoose.connect(uri, option);
    console.log("db connect successfully");
  } catch (error) {
    console.log("error while connecting database", error);
  }
};
export { dbURL, connectDB };
