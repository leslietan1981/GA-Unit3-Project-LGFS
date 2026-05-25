import express from "express";
import {
  createRecordedActivity,
  deleteRecordedActivityById,
  getActivityTypes,
  getRecordedActivities,
  getRecordedActivityById,
  updateRecordedActivityById,
} from "../controllers/recordedActivityController.js";
import { checkCreateRecordedActivity, checkUpdateRecordedActivity } from "../validators/recordedActivityValidator.js";
import { checkErrors } from "../validators/checkErrors.js";

const router = express.Router();

router.get("/list", getActivityTypes);
router.put("/recorded", checkCreateRecordedActivity, checkErrors, createRecordedActivity);
router.get("/recorded", getRecordedActivities);
router.post("/recorded", getRecordedActivityById);
router.patch("/recorded", checkUpdateRecordedActivity, checkErrors, updateRecordedActivityById);
router.delete("/recorded", deleteRecordedActivityById);

export default router;
