import React, { useEffect, useState } from 'react'
import HomeProjects from '../../Components/HomeProjects/HomeProjects'
import MyLandingPage from '../../Components/Landing/Landing'
import Layout from '../../Components/Layout/Layout'
import hero1900 from '../Home/hero1900.png'
import heromedia from '../Home/heromedia.png'
import skills from '../Home/skills.png'
import projects from '../Home/projects.png'



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
    <section className="landing-section">
      {/* {width < ipad ? ( */}
        <div className="landing-container">
          {/* <img src={heromedia} />
        </div>
      // ) : ( */}
      <img src={hero1900} />
      {/* // )} */}
      </div>
    </section>
    <section className="skills-section">
      <div className="skills-container">
        <img src={skills} />
      </div>
    </section>
    <section style={{ backgroundImage : `url('${projects}')`}}className="projects-section">
    <div>
      <div className="notable-projects-text">
      <h2>Notable Projects</h2>
      </div>

    <HomeProjects />
    </div>

    </section>

    </Layout>
  )
}

export default Home
