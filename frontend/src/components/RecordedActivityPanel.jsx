import React from "react";
import RecordedActivityCard from "./RecordedActivityCard.jsx";
import css from "../styles/HomePage.module.css";

const devData = [
  {
    type: "Running",
    activity_date: "2026-05-28T04:57:37.109Z",
    distance_m: 1000,
    duration_ms: 3600000,
    laps: 1,
    intensity_level: 1,
    comments: "This is the comments",
    _id: "6a17cb41ba9f304d4665c6ac",
    created_at: "2026-05-28T04:57:37.118Z",
  },
  {
    type: "Climbing",
    activity_date: "2026-05-28T04:57:53.836Z",
    distance_m: 1000,
    duration_ms: 3600000,
    laps: 1,
    intensity_level: 1,
    comments: "This is the comments",
    _id: "6a17cb51ba9f304d4665c6af",
    created_at: "2026-05-28T04:57:53.842Z",
  },
  {
    type: "Swimming",
    activity_date: "2026-05-28T04:57:58.961Z",
    distance_m: 1000,
    duration_ms: 3600000,
    laps: 1,
    intensity_level: 1,
    comments: "This is the comments",
    _id: "6a17cb56ba9f304d4665c6b2",
    created_at: "2026-05-28T04:57:58.966Z",
  },
  {
    type: "Flying",
    activity_date: "2026-05-28T04:58:03.306Z",
    distance_m: 1000,
    duration_ms: 3600000,
    laps: 1,
    intensity_level: 1,
    comments: "This is the comments",
    _id: "6a17cb5bba9f304d4665c6b6",
    created_at: "2026-05-28T04:58:03.312Z",
  },
];

const RecordedActivityPanel = () => {
  return (
    <div className={`${css["rec-activity-panel"]}`}>
      <div className={`${css["panel-header"]}`}>Activity Feeds</div>
      {devData.map((item) => (
        <RecordedActivityCard key={item._id} data={item} />
      ))}
    </div>
  );
};

export default RecordedActivityPanel;
