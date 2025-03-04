import React from "react";
import "./HowToLogIn.css";

const HowToLogIn = () => {
  return (
    <div className="how-to-login">
      <h3 className="login-heading">How to log in</h3>
      <br />
      <p className="login-text">
        For security reasons, you have 5 minutes to scan the QR code.
        <br />
        <br /> Be prepared to point your mobile camera at the QR code when you
        log in with BankID on another device.
        <br />
        <br /> It is important that you log out and close your browser when you
        are finished in logged in mode.
      </p>
    </div>
  );
};

export default HowToLogIn;
