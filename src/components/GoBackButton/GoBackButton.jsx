import React from "react";
import BackArrow from "../../Assets/back-arrow.png";
import "./GoBackButton.css";
import { Link } from "react-router";

const GoBackButton = () => {
  return (
    <Link to="/homepage">
      <button className="go-back-button">
        <img src={BackArrow} alt="Go to previous page" className="back-arrow" />
        GO BACK
      </button>
    </Link>
  );
};

export default GoBackButton;
