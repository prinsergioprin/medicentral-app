import React from "react";
import DashboardComponent from "../DashboardComponent/DashboardComponent";
import PatientSearch from "../PatientSearch/PatientSearch";

const PatientDatabaseLayout = () => {
  return (
    <>
      <DashboardComponent />
      <div className="right-side">
        <PatientSearch />
      </div>
    </>
  );
};

export default PatientDatabaseLayout;
