import React from 'react';
import './Navbar.css';
import MedicentralLogoNav from "../../Assets/MedicentralLogoNav.svg";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <img src={MedicentralLogoNav} alt="Medicentral Logo" className="navbar-logo" /> 
      </div>
    </nav>
  );
}

export default Navbar;
