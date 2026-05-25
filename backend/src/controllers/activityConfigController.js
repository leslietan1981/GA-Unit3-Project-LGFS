import express from "express";
import ActivityConfigModel from "../models/ActivityConfigModel.js";
import { getErrorObj, getResponseJSON, setErrorObj } from "../utils/appUtils.js";

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
      comments_toggle: req.body.comments_toggle,
    });

    res.json(getResponseJSON(undefined, "activity configuration created"));
  } catch (error) {
    return next(setErrorObj(error, 400, "failed to create activity configuration"));
  }
};

export const getActivityConfig = async (req, res, next) => {
  try {
    const configs = await ActivityConfigModel.find();

    res.json(getResponseJSON(configs));
  } catch (error) {
    return next(setErrorObj(error, 400, "failed to get activity configurations"));
  }
};

export const getActivityConfigById = async (req, res, next) => {
  try {
    const configFound = await ActivityConfigModel.findById(req.body.activity_config_id);
    if (!configFound) {
      return next(getErrorObj(404, "activity configuration not found"));
    }

    res.json(getResponseJSON(configFound));
  } catch (error) {
    return next(setErrorObj(error, 400, "failed to get activity configuration"));
  }
};

export const updateActivityConfigById = async (req, res, next) => {
  try {
    const configFound = await ActivityConfigModel.findOne({ type: req.body.type });
    if (configFound) {
      return next(getErrorObj(409, "activity name already exists"));
    }

    const updatedConfig = await ActivityConfigModel.findByIdAndUpdate(req.body.activity_config_id, {
      type: req.body.type,
      distance_m_toggle: req.body.distance_m_toggle,
      duration_ms_toggle: req.body.duration_ms_toggle,
      laps_toggle: req.body.laps_toggle,
      intensity_level_toggle: req.body.intensity_level_toggle,
      comments_toggle: req.body.comments_toggle,
    });
    if (!updatedConfig) {
      return next(getErrorObj(404, "activity config not found"));
    }

    res.json(getResponseJSON(undefined, "activity configuration updated"));
  } catch (error) {
    return next(setErrorObj(error, 400, "failed to update activity configuration"));
  }
};

export const deleteActivityConfigById = async (req, res, next) => {
  try {
    const deletedConfig = await ActivityConfigModel.findByIdAndDelete(req.body.activity_config_id);
    if (!deletedConfig) {
      return next(getErrorObj(404, "activity config not found"));
    }

    res.json(getResponseJSON(undefined, "activity configuration deleted"));
  } catch (error) {
    return next(setErrorObj(error, 400, "failed to delete activity configuration"));
  }
};
