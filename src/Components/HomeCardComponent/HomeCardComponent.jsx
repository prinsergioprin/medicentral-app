import React from "react";
import "../HomeCardComponent/HomeCardComponent.css";
// import { NavLink } from "react-router";

// EVERY CARD IS A LINK TOO, ADD PATHS!
const HomeCardComponent = ({ title, count, icon, tag, paragraph1, paragraph2 }) => {
  return (
    // <NavLink to={path}>
    <div className="homepage-card">
      <div className="title-row">
        <h3>{title}{count}</h3>
        <img src={icon} alt="Cross icon" />
      </div>
      <div className="details-row">
        <div className="line1">
          {tag !== 0 && <span className="tag">{tag}</span>}
          <p>{paragraph1}</p>
        </div>
        <div className="line2">
          {tag !== 0 && <span className="tag">{tag}</span>}
          <p>{paragraph2}</p>
        </div>
      </div>
    </div>
    /* </NavLink> */
  );
};

export default HomeCardComponent;
