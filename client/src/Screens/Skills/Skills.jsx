import "./Skills.css";
import Layout from "../../Components/Layout/Layout"

import { Link } from "react-router-dom";

function Skills() {
  return (
    <Layout>
    <div className="skills-container">
      <div className="skills-section-skills">
        <div className="skills-page-title">
          <h2>Skills and Abilities</h2>
        </div>
      </div>
      <div className="resume-experience-section">
        <div className="resume-experience-title">
          <h2> Resume and Experience </h2>
        </div>
        {/* <div className="resume-post">
          <Link
            to={{
              pathname:
                "https://docs.google.com/document/d/14lYO-JF1AI_lZObza8wX7bG_EUkWsqGkldVCfP7N_SI/edit?usp=sharing",
            }}
            target="_blank"
          >
            <img src={resume} alt="resume"></img>
          </Link>
        </div> */}
      </div>
    </div>
    </Layout>
  );
}

export default Skills;
