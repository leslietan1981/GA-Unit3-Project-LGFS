import React from "react";
import { NavLink } from "react-router";
import css from "../styles/HomePage.module.css";

import logoImage from "../assets/images/nav-logo.png";
import profileImage from "../assets/images/default-profile-portrait.png";

const UserNavBar = () => {
  return (
    <nav className={`${css["nav-container"]}`}>
      <img className={`${css["nav-logo"]}`} src={logoImage} />
      <div className={`${css["nav-links"]}`}>
        <div className={`${css["nav-primary"]}`}>
          <NavLink data-text="Dashboard">Dashboard</NavLink>
        </div>
        <div className={`${css["nav-secondary"]}`}>
          <div className={`${css["profile-link"]}`}>
            <img className={`${css["profile-img"]}`} src={profileImage} />
            <NavLink data-text="User">Leslie</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default UserNavBar;
