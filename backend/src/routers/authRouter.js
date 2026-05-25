import { Router } from "express";
import { register, login, refresh, logout } from "../controllers/authController.js";
import { validateRegister, validateLogin } from "../validators/authValidator.js";
import checkErrors from "../middleware/checkErrors.js";

const router = Router();

router.post("/auth/register", validateRegister, checkErrors, register);
router.post("/auth/login", validateLogin, checkErrors, login);
router.post("/auth/refresh", refresh);
router.post("/auth/logout", logout);

export default router;
