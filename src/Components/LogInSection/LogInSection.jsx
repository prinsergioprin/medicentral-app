import React from "react";
import { Link } from "react-router";
import "./LogInSection.css";
import MedicentralLogo from "../../Assets/MedicentralLogo.svg";

function LogInSection() {
  return (
    <section className="login-section">
      <div className="login-container">
        <h2 className="login-welcome">Welcome!</h2>
        <p className="login-access">Access medical data all in one place.</p>
        <p className="choose-user">Choose user:</p>
        <Link to="/login-method" className="medical-staff-button">
          <span className="arrow">▼</span> MEDICAL STAFF 
        </Link>
        <button className="patient-button">
          <span className="arrow">▶</span> PATIENT
        </button>
      </div>
      <div className="contact-text">
       <p className="contact-text">If you have any questions, please reach out to your</p> 
       <p>dedicated Medicentral representative or contact us <b>here</b>.</p>
      </div>
     <div className="logo-container">
       <img src={MedicentralLogo} alt="Medicentral Logo" className="logo-image" />
   </div>
   </section>
  );
}

export default LogInSection;
