import React, { useContext, useEffect, useState } from "react";
import RecordedActivityCard from "./RecordedActivityCard.jsx";
import css from "../styles/HomePage.module.css";
import { getBearerHeader, sharedFetch, userEndpoints } from "../utils/fetchingUtils.js";
import UserContext from "../context/UserContext.js";
import { getAsset, iconAddSrc } from "../utils/assetUtils.js";

const RecordedActivityPanel = (props) => {
  const userCtx = useContext(UserContext);
  const fetchData = sharedFetch();

  const [activities, setActivities] = useState([]);

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

  return (
    <div className={`${css["rec-activity-panel"]}`}>
      <div>
        <div className={`${css["panel-header"]}`}>Activity Feeds</div>
        <button className={`${css["action-icon-button"]}`}>
          <img className={`${css["button-icon"]}`} src={getAsset(iconAddSrc)} alt={`add activitiy icon`} />
        </button>
      </div>
      {activities.map((item) => (
        <RecordedActivityCard key={item._id} data={item} />
      ))}
    </div>
  );
};

export default RecordedActivityPanel;
