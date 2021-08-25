import React from "react";
import email from "../ContactCard/emaillogo.png";
import linkedin from "../ContactCard/linkedinlogo.png";
import github from "../ContactCard/githublogo.png";
import "./ContactCard.css";
import { Link } from "react-router-dom";

function ContactCard() {
  return (
    <div className="contact-card-container">
      <div className="contact-info-container">
        <Link className="email-link" 
        to={{
              pathname:"mailto:jessa.clark@icloud.com" }}
              target="_blank">
        <div className="email-container">
          <div className="email-icon">
            <img src={email} alt="email" />
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
        </Link>
        <Link className="linkedin-link" 
        to={{
              pathname:"https://www.linkedin.com/in/jessa-clark/" }}
              target="_blank">
        <div className="linkedin-container">
          <div className="linkedin-icon">
            <img src={linkedin} alt="linkedin" />
          </div>
          <div className="linkedin-info">
            <div className="linkedin-title">
              <h3>LinkedIn</h3>
            </div>
            <div className="linkedin-link">
              <a href="https://www.linkedin.com/in/jessa-clark/">
                linkedin.com/in/jessa-clark
              </a>
            </div>
          </div>
        </div>
        </Link>
        <Link className="github-link" 
        to={{
              pathname:"https://github.com/jessa-clark" }}
              target="_blank">
        <div className="github-container">
          <div className="github-icon">
            <img src={github} alt="github" />
          </div>
          <div className="github-info">
            <div className="github-title">
              <h3>GitHub</h3>
            </div>
            <div className="github-link">
              <a href="https://github.com/jessa-clark">
                github.com/jessa-clark
              </a>
            </div>
          </div>
        </div>
        </Link>
      </div>
      <div className="contact-card-title">
        <p>Let's Work Together!</p>
      </div>
    </div>
  );
}

export default ContactCard;
