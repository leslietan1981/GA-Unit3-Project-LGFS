import React from "react";
import css from "../styles/HomePage.module.css";
import { getProfileIcon } from "../utils/profileUtils.js";

const ProfilePanel = () => {
  return (
    <div className={css["profile-panel"]}>
      <div className={`${css["panel-header"]} ${css["panel-header-profile"]}`}>&nbsp;</div>
      <div className={css["profile-panel-card"]}>
        <img className={css["profile-panel-icon"]} src={getProfileIcon(0)} alt="profile icon" />
        <div className={css["greeting"]}>Hello Leslie!</div>
        <div className={`${css["stat-list"]}`}>
          <div className={`${css["stat"]} ${css["stat-list-profile"]}`}>
            <div className={`${css["stat-label"]}`}>Activities</div>
            <div className={`${css["stat-value"]}`}>100</div>
          </div>
          <div className={`${css["stat"]} ${css["stat-list-profile"]}`}>
            <div className={`${css["stat-label"]}`}>Duration</div>
            <div className={`${css["stat-value"]}`}>100 hours</div>
          </div>
        </div>
      </div>
      <div className={css["profile-panel-card"]}>
        <div className={`${css["stat-list"]}`}>
          <div className={`${css["stat"]} ${css["stat-list-profile"]}`}>
            <div className={`${css["stat-label"]}`}>Latest activity</div>
            <div className={`${css["stat-value"]}`}>
              Running - <span>2026-05-28</span>
            </div>
          </div>
        </div>
      </div>
      <div className={css["profile-panel-card"]}>
        <div>STREAK COMPONENT</div>
      </div>
    </div>
  );
};

export default ProfilePanel;
