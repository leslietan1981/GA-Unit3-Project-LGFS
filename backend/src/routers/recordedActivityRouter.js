import express from "express";
import {
  createRecordedActivity,
  deleteRecordedActivityById,
  getActivityTypes,
  getRecordedActivities,
  getRecordedActivityById,
  updateRecordedActivityById,
} from "../controllers/recordedActivityController.js";

const router = express.Router();

router.get("/list", getActivityTypes);
router.put("/recorded", createRecordedActivity);
router.get("/recorded", getRecordedActivities);
router.post("/recorded", getRecordedActivityById);
router.patch("/recorded", updateRecordedActivityById);
router.delete("/recorded", deleteRecordedActivityById);

export default router;
