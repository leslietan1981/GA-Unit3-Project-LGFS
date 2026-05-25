import express from "express";
import ActivityConfigModel from "../models/ActivityConfigModel.js";
import { setErrorObj } from "../utils/appUtils.js";

export const getActivityConfig = async (req, res, next) => {
  try {
    const configs = await ActivityConfigModel.find();

    res.json(configs);
  } catch (error) {
    return next(setErrorObj(error, 400, "failed to get activity configurations"));
  }
};
