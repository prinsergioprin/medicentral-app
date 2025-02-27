import React from "react";
import { NavLink} from "react-router";
import crossIcon from "../../assets/cross-icon.svg";
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
}

// ADD PATHS TO LIST ITEMS BELOW!
const DashboardComponent = () => {
  return (
    <aside className="dashboard">
      <h3>Dashboard</h3>
      <hr />
      <ul>
        <ListItem text="Home"/>
        <ListItem text="Patient database"/>
        <ListItem text="Schedule"/>
        <ListItem text="Inbox"/>
        <ListItem text="Activity log"/>
      </ul>
    </aside>
  );
};

export default DashboardComponent;
