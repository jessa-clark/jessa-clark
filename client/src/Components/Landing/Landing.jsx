import React from "react";
import "./Landing.css";
import landing2 from "../Landing/landing2.png";

function MyLandingPage() {
  return (
    <div className="landing-container">
      <div className="title-container">
      <div className="landing-title">
        <p className="landing-name-1">Jessa Clark</p>
      </div>
      <div className="dev-title-container">
        <p className="landing-developer">Software Engineer</p>
      </div>
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
