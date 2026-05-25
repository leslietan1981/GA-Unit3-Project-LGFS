import express from "express";
import { getActivityConfig } from "../controllers/activityConfigController.js";

const router = express.Router();

router.get("/admin", getActivityConfig);

export default router;
