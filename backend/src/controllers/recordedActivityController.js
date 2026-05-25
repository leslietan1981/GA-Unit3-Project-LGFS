import express from "express";
import RecordedActivityModel from "../models/RecordedActivityModel.js";
import { setErrorObj } from "../utils/appUtils.js";

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

export const getRecordedActivities = async (req, res, next) => {
  try {
    const activities = await RecordedActivityModel.find();
    res.json(activities);
  } catch (error) {
    return next(setErrorObj(error, 400, "failed to get activities"));
  }
};
