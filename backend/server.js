import express from "express";
import dotenv from "dotenv";
import userRouter from "./routes/userRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import hospitalRouter from "./routes/hospitalRoutes.js";

dotenv.config();

const app = express();
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
