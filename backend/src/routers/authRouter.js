import { Router } from "express";
import { register, login, logout } from "../controllers/authController.js";
import {
  validateRegister,
  validateLogin,
} from "../validators/authValidator.js";
import { checkErrors } from "../validators/checkErrors.js";

const router = Router();

//change made 26 May 2026: changed register route to follow HTTP methods based on what was taught.
router.put("/accounts/register", validateRegister, checkErrors, register);
router.post("/accounts/login", validateLogin, checkErrors, login);
router.post("/accounts/logout", logout);

export default router;
