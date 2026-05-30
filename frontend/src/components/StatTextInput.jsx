import React from "react";
import css from "../styles/HomePage.module.css";

const StatTextInput = (props) => {
  return (
    <div className={css["stat"]}>
      <div className={css["stat-label"]}>{props.title}</div>
      <div className={`${css["stat-input-base"]} ${props.size}`}>
        <div className={css["stat-units-wrapper"]}>
          <input
            className={css["input-padding"]}
            type="text"
            name={props.title}
            value={props.value}
            onChange={(e) => props.setValue(e.target.value)}
          />
          <div className={css["stat-unit"]}>{props.unit}</div>
        </div>
      </div>
    </div>
  );
};

export default StatTextInput;
