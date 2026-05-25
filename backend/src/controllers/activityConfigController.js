import express from "express";
import ActivityConfigModel from "../models/ActivityConfigModel.js";
import { getErrorObj, setErrorObj } from "../utils/appUtils.js";

export const getActivityConfig = async (req, res, next) => {
  try {
    const configs = await ActivityConfigModel.find();

    res.json(configs);
  } catch (error) {
    return next(setErrorObj(error, 400, "failed to get activity configurations"));
  }
};

export const createActivityConfig = async (req, res, next) => {
  try {
    const activityFound = await ActivityConfigModel.findOne({ type: req.body.type });
    if (activityFound) {
      return next(getErrorObj(409, "activity name already exists"));
    }

    await ActivityConfigModel.create({
      type: req.body.type,
      distance_m_toggle: req.body.distance_m_toggle,
      duration_ms_toggle: req.body.duration_ms_toggle,
      laps_toggle: req.body.laps_toggle,
      intensity_level_toggle: req.body.intensity_level_toggle,
    });

    res.json("activity configuration created");
  } catch (error) {
    return next(setErrorObj(error, 400, "failed to create activity configuration"));
  }
};
