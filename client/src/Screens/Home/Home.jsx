
import { useState } from "react";
import HomeProjects from "../../Components/HomeProjects/HomeProjects";
import MyLandingPage from "../../Components/Landing/Landing";
import Layout from "../../Components/Layout/Layout";
import ContactCard from "../../Components/ContactCard/ContactCard";
import Experience from "../../Components/Experience/Experience";


function Home() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  };
  // const [width, setWidth] = useState(window.innerWidth);
  // const mediumScreen = 1800;
  // const smallScreen = 1640;
  // const ipad = 1025;
  // useEffect(() => {
  //   const handleWindowResize = () => setWidth(window.innerWidth);
  //   window.addEventListener("resize", () => setWidth(window.innerWidth));
  //   return () => window.removeEventListener("resize", handleWindowResize);
  // }, []);


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
