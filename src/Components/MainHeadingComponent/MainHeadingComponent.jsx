import React from "react";
import  "../MainHeadingComponent/MainHeadingComponent.css";

const MainHeadingComponent = ({ mainHeading, secondaryHeading}) => {
    return (
        <section className="main-heading">
            <h2>{mainHeading}</h2>
            <h3>{secondaryHeading}</h3>
        </section>
    );
}

export default MainHeadingComponent;