import express from "express";
import { createActivityConfig, getActivityConfig } from "../controllers/activityConfigController.js";

const router = express.Router();

router.get("/admin", getActivityConfig);
router.put("/admin", createActivityConfig);

export default router;
