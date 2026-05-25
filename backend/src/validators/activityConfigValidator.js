import { body } from "express-validator";

const type_notEmpty = body("type", "type cannot be empty").trim().notEmpty();
const distance_m_toggle_isBoolean = body("distance_m_toggle", "distance_m_toggle must be a boolean").isBoolean();
const duration_ms_toggle_isBoolean = body("duration_ms_toggle", "duration_ms_toggle must be a boolean").isBoolean();
const laps_toggle_isBoolean = body("laps_toggle", "laps_toggle must be a boolean").isBoolean();

const intensity_level_toggle_isBoolean = body(
  "intensity_level_toggle",
  "intensity_level_toggle must be a boolean",
).isBoolean();

const comments_toggle_isBoolean = body("comments_toggle", "comments_toggle must be a boolean").isBoolean();

export const activity_config_id_isMongoId = body(
  "activity_config_id",
  "activity_config_id must be a MongoId",
).isMongoId();

export const checkActivityConfig = [
  type_notEmpty,
  distance_m_toggle_isBoolean,
  duration_ms_toggle_isBoolean,
  laps_toggle_isBoolean,
  intensity_level_toggle_isBoolean,
  comments_toggle_isBoolean,
];
