import React from "react";
import css from "../styles/HomePage.module.css";
import UserNavBar from "./UserNavBar.jsx";
import RecordedActivityCard from "./RecordedActivityCard.jsx";
import RecordedActivityPanel from "./RecordedActivityPanel.jsx";

const HomePage = () => {
  return (
    <div className={`${css["app-wrapper"]}`}>
      <div></div>
      <div className={`${css["app-container"]}`}>
        <UserNavBar />
        <div className={`${css["user-dashboard"]}`}>
          <div>LEFT</div>
          <RecordedActivityPanel />
          <div>RIGHT</div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default HomePage;
