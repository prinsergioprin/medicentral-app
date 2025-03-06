import React from 'react';
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
      <button className="login-button">LOG IN</button>
    </div>
  );
}

export default BankidLogin;
