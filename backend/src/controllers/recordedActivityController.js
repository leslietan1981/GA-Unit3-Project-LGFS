import express from "express";
import RecordedActivityModel from "../models/RecordedActivityModel.js";
import { getErrorObj, setErrorObj } from "../utils/appUtils.js";

const devActivityTypes = [
  {
    type: "Running",
  },
  {
    type: "Swimming",
  },
  {
    type: "Climbing",
  },
  {
    type: "Cycling",
  },
];

export const getActivityTypes = async (req, res, next) => {
  try {
    res.json(devActivityTypes);
  } catch (error) {
    return next(setErrorObj(error, 400, "failed to get activity types"));
  }
};

export const createRecordedActivity = async (req, res, next) => {
  try {
    // user_id is currently dev test data, to be replaced with id from decoded jwt token when auth is ready
    const user_id = "6a10079fd954accc43a64c42";

    await RecordedActivityModel.create({
      user_id,
      type: req.body.type,
      activity_date: req.body.activity_date,
      distance_m: req.body.distance_m,
      duration_ms: req.body.duration_ms,
      laps: req.body.laps,
      intensity_level: req.body.intensity_level,
      comments: req.body.comments,
    });

    res.json("recorded-activity created");
  } catch (error) {
    return next(setErrorObj(error, 400, "failed to create recorded-activity"));
  }
};

export const getRecordedActivities = async (req, res, next) => {
  try {
    const activities = await RecordedActivityModel.find();
    res.json(activities);
  } catch (error) {
    return next(setErrorObj(error, 400, "failed to get recorded-activities"));
  }
};

export const getRecordedActivityById = async (req, res, next) => {
  try {
    // user_id is currently dev test data, to be replaced with id from decoded jwt token when auth is ready
    const user_id = "6a10079fd954accc43a64c42";

    const activityFound = await RecordedActivityModel.findById(req.body.recorded_activity_id);
    if (!activityFound) {
      return next(getErrorObj(404, "recorded-activity not found"));
    } else if (!activityFound.user_id.equals(user_id)) {
      return next(
        getErrorObj(403, "not authorized", "not authorized to view: recorded-activity does not belong to the user"),
      );
    }

    res.json(activityFound);
  } catch (error) {
    return next(setErrorObj(error, 400, "failed to get recorded-activity"));
  }
};

export const updateRecordedActivityById = async (req, res, next) => {
  try {
    // user_id is currently dev test data, to be replaced with id from decoded jwt token when auth is ready
    const user_id = "6a10079fd954accc43a64c42";

    const activityFound = await RecordedActivityModel.findById(req.body.recorded_activity_id);
    if (!activityFound) {
      return next(getErrorObj(404, "recorded-activity not found"));
    } else if (!activityFound.user_id.equals(user_id)) {
      return next(
        getErrorObj(403, "not authorized", "not authorized to patch: recorded-activity does not belong to the user"),
      );
    }

    if (req.body.type) activityFound.type = req.body.type;
    if (req.body.activity_date) activityFound.activity_date = req.body.activity_date;
    if (req.body.distance_m) activityFound.distance_m = req.body.distance_m;
    if (req.body.duration_ms) activityFound.duration_ms = req.body.duration_ms;
    if (req.body.laps) activityFound.laps = req.body.laps;
    if (req.body.intensity_level) activityFound.intensity_level = req.body.intensity_level;
    if (req.body.comments) activityFound.comments = req.body.comments;

    await activityFound.save();

    res.json("recorded-activity updated");
  } catch (error) {
    return next(setErrorObj(error, 400, "failed to get recorded-activity"));
  }
};
