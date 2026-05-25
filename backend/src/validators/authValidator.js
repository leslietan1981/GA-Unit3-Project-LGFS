import { body } from "express-validator";

export const validateRegister = [
  body("username")
    .trim()
    .notEmpty()
    .withMessage("Username cannot be empty")
    .isLength({ min: 5, max: 30 })
    .withMessage("Username must be between 5 and 30 characters")
    .isAlphanumeric()
    .withMessage("Username must only contain letters and numbers, no spaces"),

  body("password")
    .notEmpty()
    .withMessage("Password cannot be empty")
    .isLength({ min: 8, max: 32 })
    .withMessage("Password must be between 8 and 32 characters")
    .matches(/^\S+$/)
    .withMessage("Password cannot contain whitespace"),
];

export const validateLogin = [
  body("username").trim().notEmpty().withMessage("Username cannot be empty"),

  body("password").notEmpty().withMessage("Password cannot be empty"),
];
