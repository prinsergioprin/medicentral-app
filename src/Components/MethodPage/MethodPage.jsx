import React from 'react';
import './MethodPage.css';
import { Link } from 'react-router';

function MethodPage() {
  return (
    <div className="method-page-container">
       <h1 className="main-heading">Medical staff</h1>
      <p className="choose-method">Choose login method:</p>
      <div className="button-container">
        <Link to="/login" className="login-button">
        <span className="button-arrow">▶</span> BANK ID
        </Link>
        <button className="login-button">
          <span className="button-arrow">▶</span> HOSPITAL ID
        </button>
        <button className="login-button">
          <span className="button-arrow">▶</span> GOVERNMENT ID
        </button>
      </div>

      <div className="contact-text-method">
        <p>If you have any questions, please reach out to your</p> 
        <p>dedicated Medicentral representative or contact us <b>here</b>.</p>
    </div>
    </div>
  );
};

export default MethodPage;
