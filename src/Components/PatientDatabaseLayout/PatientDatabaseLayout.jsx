import React from "react";
import DashboardComponent from "../DashboardComponent/DashboardComponent";
import PatientSearch from "../PatientSearch/PatientSearch";
import GoBackButton from "../GoBackButton/GoBackButton";

const PatientDatabaseLayout = () => {
  return (
    <>
      <DashboardComponent />
      <div className="right-side">
        <GoBackButton />
        <PatientSearch />
      </div>
    </>
  );
};

export default PatientDatabaseLayout;
