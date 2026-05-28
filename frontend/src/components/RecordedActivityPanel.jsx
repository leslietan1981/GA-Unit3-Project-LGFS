import React from "react";
import RecordedActivityCard from "./RecordedActivityCard.jsx";
import css from "../styles/HomePage.module.css";

const devData = [
  {
    _id: "6a13f57e32d8f7698992c04e",
    user_id: "6a10079fd954accc43a64c42",
    type: "Running",
    activity_date: "2026-05-25T07:08:46.209Z",
    distance_m: 1000,
    duration_ms: 3600000,
    laps: 1,
    intensity_level: 1,
    comments: "This is the comments 1",
    created_at: "2026-05-25T07:08:46.230Z",
    __v: 0,
  },
  {
    _id: "6a13f8abea0b146847f5f9e7",
    user_id: "6a10079fd954accc43a64c42",
    type: "Running",
    activity_date: "2026-05-25T07:22:19.623Z",
    distance_m: 1000,
    duration_ms: 3600000,
    laps: 1,
    intensity_level: 2,
    comments: "This is the comments 2",
    created_at: "2026-05-25T07:22:19.644Z",
    __v: 0,
  },
  {
    _id: "6a13f9a8f343c94a4397da17",
    user_id: "6a10079fd954accc43a64c42",
    type: "Climbing",
    activity_date: "2026-05-25T07:26:32.739Z",
    distance_m: 1000,
    duration_ms: 3600000,
    laps: 1,
    intensity_level: 3,
    comments: "This is the comments 3",
    created_at: "2026-05-25T07:26:32.745Z",
    __v: 0,
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
