import React from 'react';
import './MedicentralLogoLargeComponent.css'; 
import MedicentralLogoImage from '../../Assets/MedicentralLogoLarge.svg'; 

const MedicentralLogoLargeComponent = () => { 
  return (
    <div className="logo-container">
      <div className="logo-wrapper"> 
        <img src={MedicentralLogoImage} alt="Medicentral Logo" className="logo-image" />
      </div>
    </div>
  );
};

export default MedicentralLogoLargeComponent;
