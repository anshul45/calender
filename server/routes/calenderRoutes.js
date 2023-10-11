import express from "express";
import { getEvents } from "../controller/calenderController.js";

const calenderRouter = express.Router();

calenderRouter.post("/", getEvents);
export default calenderRouter;
