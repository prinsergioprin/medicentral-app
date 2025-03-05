import React from "react";
import "./NewVisitInfo.css";

const NewVisitInfo = () => {
  return (
    <div>
      <h2 className="new-visit-heading">Add new visit information</h2>
      <form id="new-visit-form">
        <div className="form-container">
          <div className="form-left-side">
            <label htmlFor="date">Date:</label>
            <input
              className="new-visit-input"
              type="text"
              placeholder="Ex. 2025 02 16"
            ></input>
            <label htmlFor="description">Description:</label>
            <input
              className="new-visit-input"
              type="text"
              placeholder="Ex. What is the problem?"
            ></input>
            <label htmlFor="prescriptions">Prescriptions:</label>
            <input
              className="new-visit-input"
              type="text"
              placeholder="Ex. What medication is needed?"
            ></input>
          </div>
          <div className="form-right-side">
            <label htmlFor="purpose">Purpose:</label>
            <input
              className="new-visit-input"
              type="text"
              placeholder="Ex. Neck pain"
            ></input>
            <label htmlFor="treatment">Treatment:</label>
            <input
              className="new-visit-input"
              type="text"
              placeholder="Ex. What treatment do you suggest?"
            ></input>
          </div>
        </div>
      </form>
      <button className="confirm-btn">CONFIRM</button>
    </div>
  );
};

export default NewVisitInfo;
