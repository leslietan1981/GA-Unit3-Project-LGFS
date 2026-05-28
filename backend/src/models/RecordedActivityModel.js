import mongoose from "mongoose";

export const RecordedActivitySchema = new mongoose.Schema(
  // your old code, i run my code with this line. hence, i edit. Please remove my new code if you want to run your old code.
  // const RecordedActivitySchema = new mongoose.Schema(
  {
    // user_id: { type: mongoose.Schema.Types.ObjectId, required: true },
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

export default mongoose.model("RecordedActivity", RecordedActivitySchema);
