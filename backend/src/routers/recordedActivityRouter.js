import express from "express";
import { getActivityTypes, getRecordedActivities } from "../controllers/recordedActivityController.js";

const router = express.Router();

router.get("/list", getActivityTypes);
router.get("/recorded", getRecordedActivities);

export default router;
