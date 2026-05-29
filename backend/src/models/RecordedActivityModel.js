import mongoose from "mongoose";

export const RecordedActivitySchema = new mongoose.Schema(
  {
    type: { type: String, required: true },
    activity_date: { type: Date, required: true },
    distance_m: { type: Number },
    duration_ms: { type: Number },
    laps: { type: Number },
    intensity_level: { type: Number },
    comments: { type: String },
    created_at: { type: Date, default: Date.now },
  },
  { collection: "recordedActivities" },
);
