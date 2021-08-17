import React from 'react'
import email from '../ContactCard/emaillogo.png'
import linkedin from '../ContactCard/linkedinlogo.png'
import github from '../ContactCard/githublogo.png'
import "./ContactCard.css"


function ContactCard() {
  return (
    <div className="contact-card-container">
      <div className="contact-card-title">
        <h2>Let's Work Together</h2>
      </div>
    <div className="email-container">
      <div className="email-icon">
        <img src={email} />
      </div>
      <div className="email-info">
      <div className="email-title">
        <h3>Email</h3>
      </div>
      <div className="email-link">
        <a href="mailto:jessa.clark@icloud.com">jessa.clark@icloud.com</a>
      </div>
      </div>
    </div>

    <div className="linkedin-container">
      <div className="linkedin-icon">
      <img src={linkedin}/>
      </div>
      <div className="linkedin-info">
      <div className="linkedin-title">
        <h3>LinkedIn</h3>
      </div>
      <div className="linkedin-link">
        <a href="https://www.linkedin.com/in/jessa-clark/">linkedin.com/in/jessa-clark</a>
      </div>
      </div>
    </div>
    <div className="github-container">
      <div className="github-icon">
        <img src={github} />
      </div>
      <div className="github-info">
      <div className="github-title">
        <h3>GitHub</h3>
      </div>
      <div className="github-link">
        <a href="https://github.com/jessa-clark">github.com/jessa-clark</a>
      </div>
      </div>
    </div>

  </div>
  )
}

export default ContactCard
