import React from "react";
import css from "../styles/HomePage.module.css";
import { getActivityIcon, getDurationString, getIntensityString } from "../utils/activityUtils.js";
import { formatForDateTimeLocal, getDateAndTime } from "../utils/dateUtils.js";
import { getAsset, iconEditSrc } from "../utils/assetUtils.js";

const devConfig = {
  status: "ok",
  result: {
    _id: "6a13eb63f110f038e7d40c8e",
    type: "Climbing",
    distance_m_toggle: true,
    duration_ms_toggle: true,
    laps_toggle: true,
    intensity_level_toggle: true,
    comments_toggle: true,
    created_at_toggle: "2026-05-25T06:25:39.254Z",
    __v: 0,
  },
};

const RecordedActivityCard = (props) => {
  const { type, activity_date, distance_m, duration_ms, laps, intensity_level, comments } = props.data;
  return (
    <div className={`${css["rec-activity-card-container"]}`}>
      <div className={`${css["rec-activity-card-header"]}`}>
        <div className={`${css["header-info"]}`}>
          <img
            className={`${css["rec-activity-type-icon"]}`}
            src={getActivityIcon(type)}
            alt={`icon image for ${type}`}
          />
          <div>
            <div className={`${css["header-title"]}`}>{type}</div>
            <div className={`${css["header-sub"]}`}>{getDateAndTime(formatForDateTimeLocal(activity_date))[0]}</div>
          </div>
        </div>
        <button className={`${css["action-icon-button"]}`}>
          <img className={`${css["button-icon"]}`} src={getAsset(iconEditSrc)} alt="edit icon" />
        </button>
      </div>
      <div className={`${css["comment"]}`}>{comments}</div>
      <div className={`${css["stat-list"]}`}>
        {devConfig.result.distance_m_toggle && (
          <div className={`${css["stat"]}`}>
            <div className={`${css["stat-label"]}`}>Distance</div>
            <div className={`${css["stat-value"]}`}>{distance_m}</div>
          </div>
        )}
        {devConfig.result.duration_ms_toggle && (
          <div className={`${css["stat"]}`}>
            <div className={`${css["stat-label"]}`}>Duration</div>
            <div className={`${css["stat-value"]}`}>{getDurationString(duration_ms)}</div>
          </div>
        )}
        {devConfig.result.laps_toggle && (
          <div className={`${css["stat"]}`}>
            <div className={`${css["stat-label"]}`}>Laps</div>
            <div className={`${css["stat-value"]}`}>{laps}</div>
          </div>
        )}
        {devConfig.result.intensity_level_toggle && (
          <div className={`${css["stat"]}`}>
            <div className={`${css["stat-label"]}`}>Intensity</div>
            <div className={`${css["stat-value"]}`}>{getIntensityString(intensity_level)}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecordedActivityCard;
