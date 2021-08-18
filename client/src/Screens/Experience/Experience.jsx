import React from 'react'
import { useHistory } from 'react-router-dom'
import './Experience.css'
function Experience() {
  const history = useHistory();
  return (
    <div className="experience-container">
      <div className="experience-section-home">
      <div className="experience-title">
        <h3>Skills and Abilities</h3>
      </div>
      <button className="skills-button" onClick={() => history.push('../Skills')}>
      More
      </button>
      </div>
    </div>
  )
}

export default Experience
