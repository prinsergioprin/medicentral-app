import React from "react";
import DashboardComponent from "../DashboardComponent/DashboardComponent";
import GoBackButton from "../GoBackButton/GoBackButton";
import PatientHeader from "../PatientHeader/PatientHeader";
import PastActivitiesBox from "../PastActivitiesBox/PastActivitiesBox";


function PastActivitiesLayout() {
    return (
      <>
        <DashboardComponent />
        <div className="right-side">
          <GoBackButton/>
          <PatientHeader/>
          <PastActivitiesBox />
        </div>
      </>
    );
  }

  export default PastActivitiesLayout;