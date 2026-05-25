import express from "express";
import {
  createActivityConfig,
  deleteActivityConfigById,
  getActivityConfig,
  getActivityConfigById,
  updateActivityConfigById,
} from "../controllers/activityConfigController.js";
import { activity_config_id_isMongoId, checkActivityConfig } from "../validators/activityConfigValidator.js";
import { checkErrors } from "../validators/checkErrors.js";

const router = express.Router();

router.put("/admin", checkActivityConfig, checkErrors, createActivityConfig);
router.get("/admin", getActivityConfig);
router.post("/admin", activity_config_id_isMongoId, checkErrors, getActivityConfigById);
router.patch("/admin", activity_config_id_isMongoId, checkActivityConfig, checkErrors, updateActivityConfigById);
router.delete("/admin", activity_config_id_isMongoId, checkErrors, deleteActivityConfigById);

export default router;
