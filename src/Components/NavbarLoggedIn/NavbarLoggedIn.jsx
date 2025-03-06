import React from 'react';
import './NavbarLoggedIn.css';
import MedicentralLogoNav from "../../Assets/MedicentralLogoNav.svg";

function NavbarLoggedIn () {
  return (
    <nav className="navbar2">
      <div className="navbar2-container">
        <img src={MedicentralLogoNav} alt="Medicentral Logo" className="navbar2-logo" /> 
      </div>
      <div className="navbar2-links">
          <a href="#" className="navbar2-link">HOME</a>
          <a href="#" className="navbar2-link">PROFILE</a>
          <button className="navbar2-logout">LOG OUT</button>
        </div>
    </nav>
  );
}

export default NavbarLoggedIn;
