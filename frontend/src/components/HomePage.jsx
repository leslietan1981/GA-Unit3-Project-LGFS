import React, { useState } from "react";
import css from "../styles/HomePage.module.css";
import UserNavBar from "./UserNavBar.jsx";
import RecordedActivityCard from "./RecordedActivityCard.jsx";
import RecordedActivityPanel from "./RecordedActivityPanel.jsx";
import ProfilePanel from "./ProfilePanel.jsx";
import RightPanel from "./RightPanel.jsx";

const HomePage = () => {
  const [reload, setReload] = useState(0);

  return (
    <div className={`${css["app-wrapper"]}`}>
      <div></div>
      <div className={`${css["app-container"]}`}>
        <UserNavBar />
        <div className={`${css["user-dashboard"]}`}>
          <ProfilePanel reload={reload} />
          <RecordedActivityPanel reload={reload} setReload={setReload} />
          <RightPanel />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default HomePage;
