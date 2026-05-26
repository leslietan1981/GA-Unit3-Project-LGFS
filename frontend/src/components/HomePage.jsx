import React from "react";
import css from "../styles/HomePage.module.css";
import UserNavBar from "./UserNavBar.jsx";

const HomePage = () => {
  return (
    <div className={`${css["app-wrapper"]}`}>
      <div></div>
      <div className={`${css["app-container"]}`}>
        <UserNavBar />
        <div className={`${css["user-dashboard"]}`}>
          <div>LEFT</div>
          <div>CENTER</div>
          <div>RIGHT</div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default HomePage;
