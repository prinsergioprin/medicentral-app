import React from "react";
import "../PatientWidgetCard/PatientWidgetCard.css";

function PatientWidgetCard({ title, icon, headLine, line1, line2 }) {
  return (
    <div className="patientwidget-card">
      <div className="patientwidget-title">
        <h3>{title}</h3>
        <img src={icon} alt="widget icon" />
      </div>
      <div className="patientwidget-details">
        <div className="patientwidget-details-line1">
          <p className="headLine">{headLine}</p>
          <p>{line1}</p>
          <p>{line2}</p>
        </div>
        <div className="patientwidget-details-line2">
          <p className="headLine">{headLine}</p>
          <p>{line1}</p>
          <p>{line2}</p>
        </div>
        <button className="read-more-button">READ MORE</button>
      </div>
    </div>
  );
}

export default PatientWidgetCard;
