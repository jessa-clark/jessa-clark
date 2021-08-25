import React from "react";
import "./Landing.css";
import landing2 from "../Landing/landing2.png";

function MyLandingPage() {
  return (
    <div className="landing-container">
      <div className="title-container">
          <p className="landing-name-1">Jessa Clark</p>
          <p className="landing-developer">Software Engineer</p>
      </div>
      <div className="landing-image-container">
        <div className="landing-image">
          <img src={landing2} alt="popart woman computer" />
        </div>
      </div>
    </div>
  );
}
export default MyLandingPage;
