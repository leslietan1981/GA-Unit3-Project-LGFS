import React from "react";
import css from "../styles/HomePage.module.css";

const StatSelect = (props) => {
  return (
    <div className={css["stat"]}>
      <div className={css["stat-label"]}>{props.title}</div>
      <div className={`${css["stat-input-base"]} ${props.size}`}>
        <select className={css["select-padding"]} value={props.value} onChange={(e) => props.setValue(e.target.value)}>
          {props.options?.map((option, idx) => (
            <option key={idx} value={option.value}>
              {option.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default StatSelect;
