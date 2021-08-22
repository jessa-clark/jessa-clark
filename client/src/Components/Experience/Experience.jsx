import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel'
import "./Experience.css";
import resume from "../../Components/Experience/resume.png"
import react from "../../Components/Experience/react.png";
import ruby from "../../Components/Experience/ruby.png";
import postgres from "../../Components/Experience/postgres.png";
import mongo from "../../Components/Experience/mongo.png"
import css from "../../Components/Experience/css.png";
import heroku from "../../Components/Experience/heroku.png";
import postman from "../../Components/Experience/postman.png";
import node from "../../Components/Experience/node.png";
import vscode from "../../Components/Experience/vscode.png";
import netlify from "../../Components/Experience/netlify.png";



function Experience() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  };
  const history = useHistory();

  return (
    <div className="experience-container">
      <div className="carousel-container">
        <Carousel className="skills-carousel" activeIndex={index} onSelect={handleSelect} interval={3000} pause={false}
        ><Carousel.Item>
                <img
                  className="d-block w-100"
                  src={react}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={ruby}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={postgres}
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={mongo}
                  alt="Fourth slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={css}
                  alt="Fifth slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={heroku}
                  alt="Sixth slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={postman}
                  alt="Seventh slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={node}
                  alt="Eighth slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={vscode}
                  alt="Ninth slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={netlify}
                  alt="Tenth slide"
                />
              </Carousel.Item>
        </Carousel>
      </div>
      <div className="experience-container">
      <div className="experience-title">
        <p>Skills and Resume</p>
      </div>
      </div>
      <div className="resume-post">
          <Link
            to={{
              pathname:
                "https://docs.google.com/document/d/14lYO-JF1AI_lZObza8wX7bG_EUkWsqGkldVCfP7N_SI/edit?usp=sharing",
            }}
            target="_blank"
          >
            <img src={resume} alt="resume"></img>
          </Link>
          </div>
    </div>
  );
}

export default Experience;
