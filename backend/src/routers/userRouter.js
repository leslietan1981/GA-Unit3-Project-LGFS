import { Router } from "express";
import {
  getAllUsers,
  promoteUser,
  revokeUser,
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
router.patch(
  "/admin/accounts/access/promote",
  verifyToken,
  isAdmin,
  promoteUser,
);
router.patch(
  "/admin/accounts/access/:id/revoke",
  verifyToken,
  isAdmin,
  revokeUser,
);
router.delete("/admin/accounts/:id", verifyToken, isAdmin, deleteUser);
router.delete("/accounts/delete", verifyToken, deleteMe);

export default router;
