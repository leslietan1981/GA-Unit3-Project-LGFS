import { Router } from "express";
import {
  getAllUsers,
  updateUser,
  deleteUser,
  deleteMe,
  getMe,
  updateMe,
  changePassword,
} from "../controllers/userController.js";
import verifyToken from "../middleware/verifyToken.js";
import isAdmin from "../middleware/isAdmin.js";

const router = Router();

// Own profile routes — verifyToken only
router.post("/accounts/details", verifyToken, getMe);
router.patch("/accounts/details", verifyToken, updateMe);
router.delete("/accounts/delete", verifyToken, deleteMe);
router.patch("/accounts/password", verifyToken, changePassword);

// Admin routes — verifyToken + isAdmin
router.get("/admin/accounts", verifyToken, isAdmin, getAllUsers);
router.patch("/admin/accounts/access", verifyToken, isAdmin, updateUser);

router.delete("/admin/accounts", verifyToken, isAdmin, deleteUser);

export default router;
