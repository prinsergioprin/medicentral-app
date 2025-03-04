import React from "react";
// import { NavLink} from "react-router";
import crossIcon from "../../Assets/cross-icon.svg";
import "./DashboardComponent.css";

const ListItem = ({ text, path }) => {
  return (
    <li className="dashboard-list-item">
      {/* <NavLink to={path}> */}
      <img src={crossIcon} alt="Cross icon" />
      <span className="text">{text}</span>
      {/* </NavLink> */}
    </li>
  );
};

// ADD PATHS TO LIST ITEMS BELOW!
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
          <button className="dashboard-close-btn"
          // onClick={onClose}
          >
            &times;
          </button>
        </div>
        <hr />
        <div className="dashboard-content">
          <ul>
            <ListItem text="Home" />
            <ListItem text="Patient database" />
            <ListItem text="Schedule" />
            <ListItem text="Inbox" />
            <ListItem text="Activity log" />
          </ul>
          <button className="log-out-btn">LOG OUT</button>
        </div>
      </aside>
      // </div>
    );
  };

export default DashboardComponent;
