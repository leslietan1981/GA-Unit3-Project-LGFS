import React from "react";
import css from "../styles/HomePage.module.css";

const StatMultiTextInput = (props) => {
  return (
    <div className={css["stat"]}>
      <div className={css["stat-label"]}>{props.title}</div>
      <div className={`${css["stat-input-base"]} ${props.size}`}>
        <div className={css["stat-row"]}>
          {props.items?.map((item, idx) => (
            <div key={idx} className={`${css["stat-units-wrapper"]} ${idx > 0 && css["stat-divider"]}`}>
              <input
                className={`${css["input-padding"]}`}
                type="text"
                value={item.value}
                onChange={(e) => item.setValue(e.target.value)}
              />
              <div className={css["stat-unit"]}>{item.unit}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatMultiTextInput;
