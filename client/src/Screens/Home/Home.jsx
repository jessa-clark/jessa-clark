import React, { useEffect, useState } from "react";
import HomeProjects from "../../Components/HomeProjects/HomeProjects";
import MyLandingPage from "../../Components/Landing/Landing";
import Layout from "../../Components/Layout/Layout";
import hero1900 from "../Home/hero1900.png";
import heromedia from "../Home/heromedia.png";
import projects from "../Home/projects.png";
import ContactCard from "../../Components/ContactCard/ContactCard";
import Experience from "../Experience/Experience";


function Home() {
  const [width, setWidth] = useState(window.innerWidth);
  const mediumScreen = 1800;
  const smallScreen = 1640;
  const ipad = 1025;
  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <Layout>
      <div className="landing-section">
        <div className="landing-container">
          <img src={hero1900} />
          {/* // )} */}
        </div>
      </div>
    <div className="experienc-section-container">

    <Experience/>
    </div>

      <div
      style={{ backgroundImage : `url('${projects}')`, width: "100vw"}} className="projects-section">
        <div className="notable-projects-text">
          <h2>Notable Projects</h2>
        </div>
        <div className="home-projects-render">
          <HomeProjects />
        </div>
      </div>
    <div className="contact-section-container">
      <ContactCard />
      </div>
    </Layout>
  );
}

export default Home;
