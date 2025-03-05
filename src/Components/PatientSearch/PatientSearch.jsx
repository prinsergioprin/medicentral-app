import React from "react";
import "./PatientSearch.css";
import searchIcon from "../../Assets/search.png";
import GoBackButton from "../GoBackButton/GoBackButton";

function PatientSearch() {
  return (
    <div className="patientsearch-container">
      <GoBackButton />
      <h1 className="patientdatabase-header">Patient database</h1>
      <div className="patientsearch-heading">Search for a patient:</div>
      <div className="patientsearch-input-wrapper">
        <input
          className="patientsearch-input-value"
          type="text"
          placeholder="John"
        ></input>
        <img src={searchIcon} alt="search icon" className="searchIcon" />
      </div>
      <div className="patientsearch-output-title-box">
        <div className="patientsearch-output-title">Name:</div>
        <div className="patientsearch-output-title">
          National identity number:
        </div>
      </div>
      <div className="patientsearch-output-container">
        <div className="patientsearch-output-container-left">
          <div className="patientsearch-output-name">
            <p className="output-name">John Doe</p>
          </div>
          <div className="patientsearch-output-name">
            <p className="output-name">John Echo</p>
          </div>
          <div className="patientsearch-output-name">
            <p className="output-name">John Fraud Cooper</p>
          </div>
          <div className="patientsearch-output-name">
            <p className="output-name">John Eel</p>
          </div>
        </div>

        <div className="patientsearch-output-container-right">
          <div className="patientsearch-output-nr">
            <p className="output-nr">19760418-0990</p>
          </div>
          <div className="patientsearch-output-nr">
            <p className="output-nr">19760418-0912</p>
          </div>
          <div className="patientsearch-output-nr">
            <p className="output-nr">19760418-1234</p>
          </div>
          <div className="patientsearch-output-nr">
            <p className="output-nr">19760418-6789</p>
          </div>
        </div>

        <div className="view-patient-buttons-container">
          <button className="view-patient-button">VIEW PATIENT</button>
          <button className="view-patient-button">VIEW PATIENT</button>
          <button className="view-patient-button">VIEW PATIENT</button>
          <button className="view-patient-button">VIEW PATIENT</button>
        </div>
      </div>
    </div>
  );
}

export default PatientSearch;
