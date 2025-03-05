import React from "react";
import DashboardComponent from "../DashboardComponent/DashboardComponent";
import GoBackButton from "../GoBackButton/GoBackButton";
import PastActivitiesBox from "../PastActivitiesBox/PastActivitiesBox";

function PastActivitiesLayout() {
  return (
    <>
      <DashboardComponent />
      <div className="right-side">
        <GoBackButton />
        <PastActivitiesBox />
      </div>
    </>
  );
}

export default PastActivitiesLayout;
