import { body } from "express-validator";

const type_notEmpty = body("type", "type cannot be empty").trim().notEmpty();
const activity_date_isISO8601 = body("activity_date", "activity_date must be in ISO 8601 format").isISO8601();

const distance_m_isInt = body("distance_m", "distance_m must be an integer and not smaller than zero")
  .optional()
  .isInt({
    min: 0,
  });

const duration_ms_isInt = body("duration_ms", "duration_ms must be an integer and not smaller than zero")
  .optional()
  .isInt({
    min: 0,
  });

const laps_isInt = body("laps", "laps must be an integer and not smaller than zero").optional().isInt({ min: 0 });

const intensity_level_isInt = body(
  "intensity_level",
  "intensity_level must be an integer and between 0 and 3 (inclusive)",
)
  .optional()
  .isInt({ min: 0, max: 3 });

const recorded_activity_id_isMongoId = body(
  "recorded_activity_id",
  "recorded_activity_id must be a MongoId",
).isMongoId();

export const checkCreateRecordedActivity = [
  type_notEmpty,
  activity_date_isISO8601,
  distance_m_isInt,
  duration_ms_isInt,
  laps_isInt,
  intensity_level_isInt,
];

export const checkUpdateRecordedActivity = [
  recorded_activity_id_isMongoId,
  type_notEmpty,
  activity_date_isISO8601,
  distance_m_isInt,
  duration_ms_isInt,
  laps_isInt,
  intensity_level_isInt,
];
