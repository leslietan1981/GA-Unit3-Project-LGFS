import React from "react";
import css from "../styles/HomePage.module.css";

const StatTextarea = (props) => {
  return (
    <div className={css["stat"]}>
      <div className={css["stat-label"]}>{props.title}</div>
      <div className={`${css["stat-input-base"]} ${css["stat-textarea"]} ${props.size}`}>
        <textarea value={props.value} onChange={(e) => props.setValue(e.target.value)} />
      </div>
    </div>
  );
};

export default StatTextarea;
