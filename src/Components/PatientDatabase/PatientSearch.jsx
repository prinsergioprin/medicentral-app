import React from "react";
import "./PatientSearch.css";
import searchIcon from "../../Assets/search.png";

function PatientSearch() {
  return (
    <div id="patientsearch-container">
      <h1 id="patientdatabase-header">Patient database</h1>
      <div id="patientsearch-heading">Search for a patient:</div>
      <div id="patientsearch-input-wrapper">
        <input
          id="patientsearch-input-value"
          type="text"
          placeholder="John"
        ></input>
        <img src={searchIcon} alt="search icon" id="searchIcon" />
      </div>
      <div id="patientsearch-output-title-box">
        <div id="patientsearch-output-title">Name:</div>
        <div id="patientsearch-output-title">National identity number:</div>
      </div>
      <div id="patientsearch-output-container">
        <div id="patientsearch-output-container-left">
          <div id="patientsearch-output-name">
            <p id="output-name">John Doe</p>
          </div>
          <div id="patientsearch-output-name">
            <p id="output-name">John Echo</p>
          </div>
          <div id="patientsearch-output-name">
            <p id="output-name">John Fraud Cooper</p>
          </div>
          <div id="patientsearch-output-name">
            <p id="output-name">John Eel</p>
          </div>
        </div>

        <div id="patientsearch-output-container-right">
          <div id="patientsearch-output-nr">
            <p id="output-nr">19760418-0990</p>
          </div>
          <div id="patientsearch-output-nr">
            <p id="output-nr">19760418-0912</p>
          </div>
          <div id="patientsearch-output-nr">
            <p id="output-nr">19760418-1234</p>
          </div>
          <div id="patientsearch-output-nr">
            <p id="output-nr">19760418-6789</p>
          </div>
        </div>

        <div id="view-patient-buttons-container">
          <button id="view-patient-button">VIEW PATIENT</button>
          <button id="view-patient-button">VIEW PATIENT</button>
          <button id="view-patient-button">VIEW PATIENT</button>
          <button id="view-patient-button">VIEW PATIENT</button>
        </div>
      </div>
    </div>
  );
}

export default PatientSearch;
