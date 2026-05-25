import { Router } from "express";
import { getAllUsers, promoteUser, revokeUser, deleteUser, getMe, updateMe, changePassword } from "../controllers/userController.js";
import verifyToken from "../middleware/verifyToken.js";
import isAdmin from "../middleware/isAdmin.js";

const router = Router();

// Own profile routes — verifyToken only
router.get("/users/me", verifyToken, getMe);
router.patch("/users/me", verifyToken, updateMe);
router.patch("/users/me/password", verifyToken, changePassword);

// Admin routes — verifyToken + isAdmin
router.get("/users", verifyToken, isAdmin, getAllUsers);
router.patch("/users/:id/promote", verifyToken, isAdmin, promoteUser);
router.patch("/users/:id/revoke", verifyToken, isAdmin, revokeUser);
router.delete("/users/:id", verifyToken, isAdmin, deleteUser);

export default router;
