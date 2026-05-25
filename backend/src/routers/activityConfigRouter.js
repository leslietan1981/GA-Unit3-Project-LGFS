import express from "express";
import {
  createActivityConfig,
  getActivityConfig,
  getActivityConfigById,
  updateActivityConfigById,
} from "../controllers/activityConfigController.js";

const router = express.Router();

router.put("/admin", createActivityConfig);
router.get("/admin", getActivityConfig);
router.post("/admin", getActivityConfigById);
router.patch("/admin", updateActivityConfigById);

export default router;
