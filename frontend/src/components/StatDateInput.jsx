import React from "react";
import css from "../styles/HomePage.module.css";

const StatDateInput = (props) => {
  return (
    <div className={css["stat"]}>
      <div className={css["stat-label"]}>{props.title}</div>
      <div className={`${css["stat-input-base"]} ${props.size}`}>
        <input
          className={css["input-padding"]}
          type="date"
          value={props.value}
          onChange={(e) => props.setValue(e.target.value)}
        />
      </div>
    </div>
  );
};

export default StatDateInput;
