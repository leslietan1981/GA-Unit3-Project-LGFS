import express from "express";
import {
  createRecordedActivity,
  getActivityTypes,
  getRecordedActivities,
  getRecordedActivityById,
} from "../controllers/recordedActivityController.js";

const router = express.Router();

router.get("/list", getActivityTypes);
router.put("/recorded", createRecordedActivity);
router.get("/recorded", getRecordedActivities);
router.post("/recorded", getRecordedActivityById);

export default router;
