import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
dotenv.config();
import userRouter from "./routes/userRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import hospitalRouter from "./routes/hospitalRoutes.js";
import connectDB from "./config/db.js";

connectDB();

const app = express();
app.use(express.json()); // this allows us to parse raw json (middleware)
app.use(express.urlencoded({ extended: true })); // this allows us to send form data
app.use(cookieParser());
const port = process.env.PORT || 5000;

app.use("/api/users", userRouter);
app.use("/api", hospitalRouter);

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
