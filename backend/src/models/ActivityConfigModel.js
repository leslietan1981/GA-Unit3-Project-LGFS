import mongoose from "mongoose";

const ActivityConfigSchema = new mongoose.Schema(
  {
    type: { type: String, required: true },
    distance_m_toggle: { type: Boolean, default: true },
    duration_ms_toggle: { type: Boolean, default: true },
    laps_toggle: { type: Boolean, default: true },
    intensity_level_toggle: { type: Boolean, default: true },
    comments_toggle: { type: Boolean, default: true },
    created_at_toggle: { type: Date, default: Date.now },
  },
  { collection: "activityConfig" },
);

export default mongoose.model("ActivityConfig", ActivityConfigSchema);
