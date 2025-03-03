import React from "react";
import "./PatientSearch.css";

function PatientSearch() {
  return (
    <div id="patientsearch-container">
      <h1 id="patientdatabase-header">Patient database</h1>
      <div id="patientsearch-heading">Search for a patient:</div>
      <input
        id="patientsearch-input-value"
        type="text"
        placeholder="john"
      ></input>
      <div id="patientsearch-output-title">Name: Personal number:</div>
      <div id="patientsearch-output-container">
        <div id="patientsearch-output-container-left">
          <div id="patientsearch-output-name">John Doe</div>
          <div id="patientsearch-output-name">John Echo</div>
          <div id="patientsearch-output-name">John Fraud Cooper</div>
          <div id="patientsearch-output-name">John Eel</div>
        </div>

        <div id="patientsearch-output-container-right">
          <div id="patientsearch-output-nr">19760418-0990</div>
          <div id="patientsearch-output-nr">19760418-0912</div>
          <div id="patientsearch-output-nr">19760418-1234</div>
          <div id="patientsearch-output-nr">19760418-6789</div>
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
