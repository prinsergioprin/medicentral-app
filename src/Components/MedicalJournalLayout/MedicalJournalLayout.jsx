import React from "react";
import DashboardComponent from "../DashboardComponent/DashboardComponent";
import GoBackButton from "../GoBackButton/GoBackButton";
import MedicalJournalBox from "../MedicalJournalBox/MedicalJournalBox";
import PatientHeader from "../PatientHeader/PatientHeader";
import NewVisitInfo from "../NewVisitInfo/NewVisitInfo";

function MedicalJournalLayout() {
  return (
    <>
      <DashboardComponent />
      <div className="right-side">
        <PatientHeader />
        <GoBackButton />
        <MedicalJournalBox />
        <NewVisitInfo />
      </div>
    </>
  );
}

export default MedicalJournalLayout;
