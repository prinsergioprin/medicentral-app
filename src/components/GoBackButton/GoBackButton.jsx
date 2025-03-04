import React from "react";
// import { useNavigate } from "react-router-dom";
import BackArrow from "../../Assets/back-arrow.png";
import "./GoBackButton.css";

const GoBackButton = ({ to, children }) => {
  //   const navigate = useNavigate();

  //   const handleClick = () => {
  //     navigate(to);
  //   };

  return (
    <button
      className="go-back-button" // onClick={handleClick}
    >
      <img src={BackArrow} alt="Go to previous page" className="back-arrow" />
      GO BACK
      {/* {children || "Go back"} */}
    </button>
  );
};

export default GoBackButton;
