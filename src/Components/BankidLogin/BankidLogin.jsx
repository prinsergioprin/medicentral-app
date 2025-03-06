import React from 'react';
import { Link } from 'react-router';
import './BankidLogin.css';

function BankidLogin() {
  return (
    <div className="bankid-login-container">
      <h1 className="log-in">Log in</h1>
      <div className="method-select"> Method:
      <button className="bank-id-button">
        <span className="arrow">▼</span>BANK ID
      </button>
      </div>
      <div className="national-id-input">Your national identity number:
        <input
          type="text"
          id="nationalId"
          placeholder="Ex. 0123456789"
        />
      </div>
      <Link to="/homepage" className="medical-staff-button">
              <span className="arrow">▼</span>LOG IN
            </Link>
    </div>
  );
}

export default BankidLogin;
