import React, { useState } from "react";
import css from "../styles/HomePage.module.css";
import { getDateLocal } from "../utils/dateUtils.js";
import { getAsset, iconCloseSrc } from "../utils/assetUtils.js";

const AddRecordedActivityDialog = (props) => {
  const [type, setType] = useState("");
  const [date, setDate] = useState(getDateLocal(new Date()));
  const [distance, setDistance] = useState(0);
  const [durationH, setDurationH] = useState(0);
  const [durationM, setDurationM] = useState(0);
  const [durationS, setDurationS] = useState(0);
  const [laps, setLaps] = useState(0);
  const [intensity, setIntensity] = useState(1);
  const [comments, setComments] = useState("");

  return (
    <dialog className={css["dialog-box"]} ref={props.ref}>
      <div className={`${css["panel-header-wrapper"]} ${css["flex-between"]}`}>
        <div className={`${css["panel-header"]}`}>Add Activity</div>
        <button
          className={`${css["action-icon-button"]} ${css["button-border"]}`}
          onClick={() => props.ref.current?.close()}
        >
          <img className={`${css["button-icon"]}`} src={getAsset(iconCloseSrc)} alt={`close icon`} />
        </button>
      </div>
      <div className={css["dialog-card"]}>
        <div className={css["dialog-row"]}>
          <div className={`${css["stat"]}`}>
            <div className={`${css["stat-label"]}`}>Activity</div>
            <div className={`${css["stat-input-base"]} ${css["stat-input-md"]}`}>
              <select className={`${css["select-padding"]}`} value={type} onChange={(e) => setType(e.target.value)}>
                <option value={"Running"}>Running</option>
                <option value={"Climbing"}>Climbing</option>
                <option value={"Swimming"}>Swimming</option>
              </select>
            </div>
          </div>
          <div className={`${css["stat"]}`}>
            <div className={`${css["stat-label"]}`}>Date</div>
            <div className={`${css["stat-input-base"]} ${css["stat-input-sm"]}`}>
              <input
                className={`${css["input-padding"]}`}
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className={css["dialog-row"]}>
          <div className={`${css["stat"]}`}>
            <div className={`${css["stat-label"]} ${css["stat-input-md"]}`}>Distance</div>
            <div className={`${css["stat-input-base"]} ${css["stat-input-sm"]}`}>
              <div className={css["stat-units-wrapper"]}>
                <input
                  className={`${css["input-padding"]}`}
                  type="text"
                  value={distance}
                  onChange={(e) => setDistance(e.target.value)}
                />
                <div className={css["stat-unit"]}>meters</div>
              </div>
            </div>
          </div>
          <div className={`${css["stat"]}`}>
            <div className={`${css["stat-label"]}`}>Duration</div>
            <div className={`${css["stat-input-base"]} ${css["stat-input-md"]}`}>
              <div className={`${css["stat-row"]}`}>
                <div className={css["stat-units-wrapper"]}>
                  <input
                    className={`${css["input-padding"]}`}
                    type="text"
                    value={durationH}
                    onChange={(e) => setDurationH(e.target.value)}
                  />
                  <div className={css["stat-unit"]}>hr</div>
                </div>
                <div className={`${css["stat-units-wrapper"]} ${css["stat-divider"]}`}>
                  <input
                    className={`${css["input-padding"]}`}
                    type="text"
                    value={durationM}
                    onChange={(e) => setDurationM(e.target.value)}
                  />
                  <div className={css["stat-unit"]}>min</div>
                </div>
                <div className={`${css["stat-units-wrapper"]} ${css["stat-divider"]}`}>
                  <input
                    className={`${css["input-padding"]}`}
                    type="text"
                    value={durationS}
                    onChange={(e) => setDurationS(e.target.value)}
                  />
                  <div className={css["stat-unit"]}>sec</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={css["dialog-row"]}>
          <div className={`${css["stat"]}`}>
            <div className={`${css["stat-label"]}  ${css["stat-input-md"]}`}>Laps</div>
            <div className={`${css["stat-input-base"]} ${css["stat-input-sm"]}`}>
              <div className={css["stat-units-wrapper"]}>
                <input
                  className={`${css["input-padding"]}`}
                  type="text"
                  value={laps}
                  onChange={(e) => setLaps(e.target.value)}
                />
                <div className={css["stat-unit"]}>laps</div>
              </div>
            </div>
          </div>
          <div className={`${css["stat"]}`}>
            <div className={`${css["stat-label"]}`}>Intensity</div>
            <div className={`${css["stat-input-base"]} ${css["stat-input-sm"]}`}>
              <select
                className={`${css["select-padding"]}`}
                value={intensity}
                onChange={(e) => setIntensity(e.target.value)}
              >
                <option value={"1"}>Low</option>
                <option value={"2"}>Medium</option>
                <option value={"3"}>High</option>
              </select>
            </div>
          </div>
        </div>
        <div className={`${css["stat"]}`}>
          <div className={`${css["stat-label"]}`}>Comment</div>
          <div className={`${css["stat-input-base"]} ${css["stat-textarea"]} ${css["stat-input-lg"]}`}>
            <textarea value={comments} onChange={(e) => setComments(e.target.value)} />
          </div>
        </div>
        <div>
          <button className={css["text-button"]}>Add</button>
          <button className={css["text-button-cancel"]}>Cancel</button>
        </div>
      </div>
    </dialog>
  );
};

export default AddRecordedActivityDialog;
