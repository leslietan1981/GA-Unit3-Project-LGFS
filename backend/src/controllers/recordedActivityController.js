import express from "express";
import { getErrorObj, getResponseJSON, setErrorObj } from "../utils/appUtils.js";
import ActivityConfigModel from "../models/ActivityConfigModel.js";
import UserModel from "../models/auth.js";

export const getActivityTypes = async (req, res, next) => {
  try {
    const activityTypes = await ActivityConfigModel.find().select({ _id: 0, type: 1 });
    res.json(getResponseJSON(activityTypes));
  } catch (error) {
    return next(setErrorObj(error, 400, "failed to get activity types"));
  }
};

export const createRecordedActivity = async (req, res, next) => {
  try {
    const activityTypeFound = await ActivityConfigModel.findOne({ type: req.body.type });
    if (!activityTypeFound) {
      return next(getErrorObj(400, "invalid activity type"));
    }

    const userFound = await UserModel.findById(req.user.id);
    if (!userFound) {
      return next(getErrorObj(400, "user not found"));
    }

    const newRecord = {
      type: req.body.type,
      activity_date: req.body.activity_date,
      distance_m: req.body.distance_m,
      duration_ms: req.body.duration_ms,
      laps: req.body.laps,
      intensity_level: req.body.intensity_level,
      comments: req.body.comments,
    };

    userFound.recorded_activities.push(newRecord);
    await userFound.save();

    res.json(getResponseJSON(undefined, "recorded-activity created"));
  } catch (error) {
    return next(setErrorObj(error, 400, "failed to create recorded-activity"));
  }
};

export const getRecordedActivities = async (req, res, next) => {
  try {
    const userFound = await UserModel.findById(req.user.id);
    if (!userFound) {
      return next(getErrorObj(400, "user not found"));
    }

    res.json(getResponseJSON(userFound.recorded_activities));
  } catch (error) {
    return next(setErrorObj(error, 400, "failed to get recorded-activities"));
  }
};

export const getRecordedActivityById = async (req, res, next) => {
  try {
    const userFound = await UserModel.findById(req.user.id);
    if (!userFound) {
      return next(getErrorObj(400, "user not found"));
    }

    const activityFound = userFound.recorded_activities.id(req.body.recorded_activity_id);
    if (!activityFound) {
      return next(getErrorObj(404, "recorded-activity not found"));
    }

    res.json(getResponseJSON(activityFound));
  } catch (error) {
    return next(setErrorObj(error, 400, "failed to get recorded-activity"));
  }
};

export const updateRecordedActivityById = async (req, res, next) => {
  try {
    const userFound = await UserModel.findById(req.user.id);
    if (!userFound) {
      return next(getErrorObj(400, "user not found"));
    }

    const activityFound = userFound.recorded_activities.id(req.body.recorded_activity_id);
    if (!activityFound) {
      return next(getErrorObj(404, "recorded-activity not found"));
    }

    if ("type" in req.body) {
      const activityTypeFound = await ActivityConfigModel.findOne({ type: req.body.type });
      if (!activityTypeFound) {
        return next(getErrorObj(400, "invalid activity type"));
      }
      activityFound.type = req.body.type;
    }
    if ("activity_date" in req.body) activityFound.activity_date = req.body.activity_date;
    if ("distance_m" in req.body) activityFound.distance_m = req.body.distance_m;
    if ("duration_ms" in req.body) activityFound.duration_ms = req.body.duration_ms;
    if ("laps" in req.body) activityFound.laps = req.body.laps;
    if ("intensity_level" in req.body) activityFound.intensity_level = req.body.intensity_level;
    if ("comments" in req.body) activityFound.comments = req.body.comments;

    await userFound.save();

    res.json(getResponseJSON(undefined, "recorded-activity updated"));
  } catch (error) {
    return next(setErrorObj(error, 400, "failed to update recorded-activity"));
  }
};

export const deleteRecordedActivityById = async (req, res, next) => {
  try {
    const userFound = await UserModel.findById(req.user.id);
    if (!userFound) {
      return next(getErrorObj(400, "user not found"));
    }

    const activityFound = userFound.recorded_activities.id(req.body.recorded_activity_id);
    if (!activityFound) {
      return next(getErrorObj(404, "recorded-activity not found"));
    }

    userFound.recorded_activities.pull(req.body.recorded_activity_id);
    userFound.save();

    res.json(getResponseJSON(undefined, "recorded-activity deleted"));
  } catch (error) {
    return next(setErrorObj(error, 400, "failed to delete recorded-activity"));
  }
};
