import React, { useContext, useEffect, useRef, useState } from "react";
import RecordedActivityCard from "./RecordedActivityCard.jsx";
import css from "../styles/HomePage.module.css";
import { getBearerHeader, sharedFetch, userEndpoints } from "../utils/fetchingUtils.js";
import UserContext from "../context/UserContext.js";
import { getAsset, iconAddSrc } from "../utils/assetUtils.js";
import AddRecordedActivityDialog from "./AddRecordedActivityDialog.jsx";

const RecordedActivityPanel = (props) => {
  const userCtx = useContext(UserContext);
  const fetchData = sharedFetch();

  const [activities, setActivities] = useState([]);
  const dialogRef = useRef(null);

  const getActivities = async () => {
    const res = await fetchData(userEndpoints.getRecordedActivities, "GET", {
      auth: getBearerHeader(userCtx.accessToken),
    });

    if (!res.ok && res.status === 401) {
      console.log(res.status, res.message);
      if (props.handleNotAuth) props.handleNotAuth();
      return;
    }

    const sorted = res.data?.result.toSorted((a, b) => new Date(b.activity_date) - new Date(a.activity_date));
    setActivities(sorted);
  };

  useEffect(() => {
    getActivities();
  }, []);

  const handleAddActivity = () => {
    dialogRef.current.showModal();
  };

  return (
    <>
      <AddRecordedActivityDialog ref={dialogRef} />
      <div className={`${css["rec-activity-panel"]}`}>
        <div className={`${css["panel-header-wrapper"]}`}>
          <div className={`${css["panel-header"]}`}>Activity Feeds</div>
          <button className={`${css["action-icon-button"]} ${css["button-border"]}`} onClick={handleAddActivity}>
            <img className={`${css["button-icon"]}`} src={getAsset(iconAddSrc)} alt={`add activitiy icon`} />
          </button>
        </div>
        {activities.map((item) => (
          <RecordedActivityCard key={item._id} data={item} />
        ))}
      </div>
    </>
  );
};

export default RecordedActivityPanel;
