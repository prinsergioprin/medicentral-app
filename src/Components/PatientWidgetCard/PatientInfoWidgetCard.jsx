import React from "react";
import "../PatientWidgetCard/PatientInfoWidgetCard.css";

function PatientInfoWidgetCard({ title, icon, name, age, gender, address }) {
  return (
    <div className="patientinfowidget-card">
      <div className="patientinfowidget-title">
        <h3>{title}</h3>
        <img src={icon} alt="widget icon" />
      </div>
      <div className="patientinfowidget-details">
        <div className="patientinfowidget-details-line1">
          <p>{name}</p>
        </div>
        <div className="patientinfowidget-details-line2">
          <p>{age}</p>
          <p>{gender}</p>
          <p>{address}</p>
        </div>
        <button className="read-more-button2">READ MORE</button>
      </div>
    </div>
  );
}

export default PatientInfoWidgetCard;
