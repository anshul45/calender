import dotenv from "dotenv";
import express from "express";
import calenderRouter from "./routes/calenderRoutes.js";
import userRouter from "./routes/userRoutes.js";

dotenv.config();
const app = express();

app.use("/api/auth", userRouter);
app.use("api/calender", calenderRouter);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log("App is running on port " + port);
});
