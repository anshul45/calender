import dotenv from "dotenv";
import cors from "cors";
import express from "express";
import calenderRouter from "./routes/calenderRoutes.js";
import userRouter from "./routes/userRoutes.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/auth", userRouter);
app.use("/api/calender", calenderRouter);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log("Api is running on port " + port);
});
