import React from "react";
import "../HomePageComponent/HomePageComponent.css";
import HomeCardComponent from "../HomeCardComponent/HomeCardComponent";
import patientIcon from "../../Assets/patient-icon.png";
import scheduleIcon from "../../Assets/schedule-icon.png";
import inboxIcon from "../../Assets/inbox-icon.png";
import activityIcon from "../../Assets/activity-icon.png";
const dotIcon = String.fromCodePoint(0x2022);

// EVERY CARD IS A LINK TOO, ADD PATHS!
const HomePageComponent = () => {
  return (
    <section className="homepage-container">
        <HomeCardComponent
          title="Patient database"
          tag={0}
          linkTo="/patient-database"
          icon={patientIcon}
          paragraph1="Access a patient's medical history, make updates, add visit info, among other tasks."
        />
      <HomeCardComponent
        title="Your schedule"
        icon={scheduleIcon}
        tag="9:00"
        paragraph1="Book appointment with the 
new patient"
        paragraph2="Contact technician regarding
faulty equipment"
      />
      <HomeCardComponent
        title="Inbox"
        count={<span className="count-icon">2</span>}
        icon={inboxIcon}
        tag={<span className="dot-icon">{dotIcon}</span>}
        paragraph1="Dr. Ali Wong. 
        Referral received 19/02"
        paragraph2="Dr. Cynthia Erivo.
        Blood test results"
      />
      <HomeCardComponent
        title="Activity log"
        icon={activityIcon}
        tag={<span className="dot-icon">{dotIcon}</span>}
        paragraph1="Administered flu vaccine"
        paragraph2="Reviewed medical history and symptoms"
      />
    </section>
  );
};

export default HomePageComponent;
