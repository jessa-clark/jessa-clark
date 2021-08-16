import React from 'react';
import hero from "../../AStyles/images/hero1.png"

function MyLandingPage() {
    return (
        <div className="landing-image-container">

        <img className="landing-image" src={hero} />

        </div>
    );
}
export default MyLandingPage