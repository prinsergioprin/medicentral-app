import React from "react";
import HomePageComponent from "../HomePageComponent/HomePageComponent";
import DashboardComponent from "../DashboardComponent/DashboardComponent";
import MainHeadingComponent from "../MainHeadingComponent/MainHeadingComponent";

function HomePageLayout() {
    return (
      <>
        <DashboardComponent />
        <div className="right-side">
          <MainHeadingComponent
            mainHeading="Hello, Doc"
            secondaryHeading="What are you looking for today?"
          />
          <HomePageComponent />
        </div>
      </>
    );
  }

  export default HomePageLayout;
  