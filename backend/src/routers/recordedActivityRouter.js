import express from "express";
import {
  createRecordedActivity,
  deleteRecordedActivityById,
  getActivityTypes,
  getRecordedActivities,
  getRecordedActivityById,
  updateRecordedActivityById,
} from "../controllers/recordedActivityController.js";
import { checkRecordedActivity, recorded_activity_id_isMongoId } from "../validators/recordedActivityValidator.js";
import { checkErrors } from "../validators/checkErrors.js";
import verifyToken from "../middleware/verifyToken.js";

const router = express.Router();

router.get("/list", getActivityTypes);
router.put("/recorded", verifyToken, checkRecordedActivity, checkErrors, createRecordedActivity);
router.get("/recorded", verifyToken, getRecordedActivities);
router.post("/recorded", verifyToken, recorded_activity_id_isMongoId, checkErrors, getRecordedActivityById);
router.patch(
  "/recorded",
  verifyToken,
  recorded_activity_id_isMongoId,
  checkRecordedActivity,
  checkErrors,
  updateRecordedActivityById,
);
router.delete("/recorded", verifyToken, recorded_activity_id_isMongoId, checkErrors, deleteRecordedActivityById);

export default router;
