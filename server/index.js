import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoute from "./routes/user.route.js";
import clipDropRoute from "./routes/clipDrop.route.js";
import cors from "cors";
import bodyParser from "body-parser";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));
const port = process.env.PORT || 3001;
const URI = process.env.MONGODB_URI;

//connect to mongodb
const mongooseConnect = async () => {
  try {
    await mongoose.connect(`${URI}DesignGenie`);
    console.log("Connected: " + mongoose.connection.host);
  } catch (e) {
    console.log("Error connecting to MongoDB");
    console.error(e);
  }
};
mongooseConnect();

//defining routes

app.use("/user", userRoute);
app.use("/api", clipDropRoute);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
