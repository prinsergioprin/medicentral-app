import React from "react";
import "./PatientWidgets.css";
import PatientHeader from "../PatientHeader/PatientHeader";
import PatientWidgetCard from "../PatientWidgetCard/PatientWidgetCard";
import PatientInfoWidgetCard from "../PatientWidgetCard/PatientInfoWidgetCard";
import GoBackButton from "../GoBackButton/GoBackButton";
import medicalJournalIcon from "../../Assets/medicalJournal.png";
import labIcon from "../../Assets/Lab.png";
import prescriptionIcon from "../../Assets/prescriptions.png";
import patientIcon from "../../Assets/patient-icon.png";
import recentVisitsIcon from "../../Assets/recentVisits.png";
import vaccineIcon from "../../Assets/vaccinations.png";

function PatientWidgets() {
  return (
    <>
      <PatientHeader />
      <GoBackButton />
      <div className="patientwidgets-container">
        <PatientWidgetCard
          title="Medical journal"
          icon={medicalJournalIcon}
          headLine="Something happened"
          line1="Responsible doctor"
          line2="Date, time"
        />
        <PatientWidgetCard
          title="Lab"
          icon={labIcon}
          headLine="Something happened"
          line1="Responsible doctor"
          line2="Date, time"
        />
        <PatientWidgetCard
          title="Prescriptions"
          icon={prescriptionIcon}
          headLine="Magnesium glyciante"
          line1="375mg / day"
          headLine="Vitamin D3"
          line1="3,000 IU / day"
        />
        <PatientInfoWidgetCard
          title="Patient info"
          icon={patientIcon}
          name="John Echo"
          age="Age: 49"
          gender="Gender: Male"
          address="Address: 123 Riverside Drive, Kansas City"
        />
        <PatientWidgetCard
          title="Recent visits"
          icon={recentVisitsIcon}
          headLine="Capio S:t Görans Sjukhus"
          line1="02-14-25 | Insomnia treatment"
          headLine="Capio S:t Görans Sjukhus"
          line1="02-14-25 | Insomnia treatment"
        />
        <PatientWidgetCard
          title="Vaccinations"
          icon={vaccineIcon}
          headLine="Something happened"
          line1="Responsible doctor"
          line2="Date, time"
          headLine="Something happened"
          line1="Responsible doctor"
          line2="Date, time"
        />
      </div>
    </>
  );
}

export default PatientWidgets;
