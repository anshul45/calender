import express from "express";
import { signInController } from "../controller/userController.js";

const userRouter = express.Router();

userRouter.post("/", signInController);

export default userRouter;
