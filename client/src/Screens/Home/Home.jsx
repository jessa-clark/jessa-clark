
import { useState } from "react";
import HomeProjects from "../../Components/HomeProjects/HomeProjects";
import MyLandingPage from "../../Components/Landing/Landing";
import Layout from "../../Components/Layout/Layout";
import ContactCard from "../../Components/ContactCard/ContactCard";
import Experience from "../../Components/Experience/Experience";


function Home() {
  return (
    <Layout>
      <div className="landing-section">
        <MyLandingPage />
      </div>
    <div className="experience-section-container">
    <Experience/>
    </div>
        <div className="home-projects-render">
          <HomeProjects />
        </div>
    <div className="contact-section-container">
      <ContactCard />
      </div>
    </Layout>
  );
}

export default Home;
