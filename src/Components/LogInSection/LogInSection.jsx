import React from 'react';
import './LogInSection.css';
import MedicentralLogo from "../../Assets/MedicentralLogo.svg";

function LogInSection() {
  return (
    <section className="login-section">
      <div className="login-container">
        <h1>Welcome!</h1>
        <p>Access medical data all in one place.</p>
        <p className="choose-user">Choose user:</p>
        <button className="medical-staff-button">
          <span className="arrow">▼</span> MEDICAL STAFF
        </button>
        <button className="patient-button">
          <span className="arrow">▶</span> PATIENT
        </button>
        <img src={MedicentralLogo} alt="Medicentral Logo" className="medicentral-logo" />
        <p className="contact-text">If you have any questions, please reach out to your dedicated Medicentral representative or contact us <b>here</b>.</p>
      </div>
    </section>
  );
}

export default LogInSection;
