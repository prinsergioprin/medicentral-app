import React from "react";
import { NavLink } from "react-router";
import crossIcon from "../../Assets/cross-icon.svg";
import "./DashboardComponent.css";

const ListItem = ({ text, path }) => {
  // if list item doesn't have a path, it's rendered as a regular a tag
  const LinkComponent = path ? NavLink : "a";
  return (
    <li className="dashboard-list-item">
      <LinkComponent
        to={path}
        className={({ isActive }) =>
          path && isActive
            ? "dashboard-list-item active"
            : "dashboard-list-item"
        }
      >
        <img src={crossIcon} alt="Cross icon" />
        <span className="text">{text}</span>
      </LinkComponent>
    </li>
  );
};

// ADD CONNECTION TO BURGER MENU!
const DashboardComponent = () =>
  // check state to display
  // {isOpen}, {onClose}
  {
    // if (!isOpen) return null;
    return (
      // <div className={`dashboard ${isOpen ? 'open' : ''}`}>
      <aside className="dashboard">
        <div className="dashboard-top">
          <h3>Dashboard</h3>
          <button
            className="dashboard-close-btn"
            // onClick={onClose}
          >
            &times;
          </button>
        </div>
        <hr />
        <div className="dashboard-content">
          <ul>
            <ListItem text="Home" path="/homepage" />
            <ListItem text="Patient database" path="/patient-database" />
            <ListItem text="Schedule" path="" />
            <ListItem text="Inbox" path="" />
            <ListItem text="Past activities" path="/past-activities" />
          </ul>
          <button className="log-out-btn">LOG OUT</button>
        </div>
      </aside>
      // </div>
    );
  };

export default DashboardComponent;
