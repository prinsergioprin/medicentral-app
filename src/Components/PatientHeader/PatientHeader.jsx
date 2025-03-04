import React from "react";
import "./PatientHeader.css";
import patientIcon from "../../Assets/patient-icon.png";
import arrowIcon from "../../Assets/go-to-arrow-right.png";

function PatientHeader() {
  return (
    <div className="patientheader-box">
      <img src={patientIcon} alt="patient icon" className="patientIcon" />
      <p className="patientheader-name">JOHN ECHO, 19760418-0912.</p>
      <p className="patientheader-m-journal">MEDICAL JOURNAL</p>
      <img src={arrowIcon} alt="arrow icon" className="arrowIcon" />
    </div>
  );
}

export default PatientHeader;
