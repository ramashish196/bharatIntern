import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import express from "express";
import { dbURL, connectDB } from "./database/db.js";
import { router } from "./routes/router.js";
import bodyParser from "body-parser";
const app = express();
const port = process.env.PORT;
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use("/", router);
connectDB(dbURL);
app.listen(port, () => {
  console.log(`server is listening at http://localhost:${port}`);
});
