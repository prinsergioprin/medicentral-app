import React from 'react';
import './LogInSection.css';
import MedicentralLogoImage from '../../Assets/MedicentralLogoLarge.svg';

function LogInSection() {
  return (
    <section className="login-section">
      <div className="login-container">
        <h1 className="login-welcome">Welcome!</h1>
        <div className="login-access">Access medical data all in one place.</div>
        <div className="choose-user">Choose user:</div>
        <button className="medical-staff-button">
          <span className="arrow">▼</span> MEDICAL STAFF
        </button>
        <button className="patient-button">
          <span className="arrow">▶</span> PATIENT
        </button>
      </div>
      <div className="contact-text">
       <p className="contact-text">If you have any questions, please reach out to your</p> 
       <p>dedicated Medicentral representative or contact us <b>here</b>.</p>
      </div>
    
     <div className="logo-container">
       <img src={MedicentralLogoImage} alt="Medicentral Logo" className="logo-image" />
   </div>
   </section>
  );
}

export default LogInSection;
