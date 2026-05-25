import mongoose from "mongoose";

const ActivityConfigSchema = new mongoose.Schema(
  {
    type: { type: String, required: true },
    distance_m: { type: Boolean, default: true },
    duration_ms: { type: Boolean, default: true },
    laps: { type: Boolean, default: true },
    intensity_level: { type: Boolean, default: true },
    comments: { type: Boolean, default: true },
    created_at: { type: Date, default: Date.now },
  },
  { collection: "activityConfig" },
);

export default mongoose.model("ActivityConfig", ActivityConfigSchema);
