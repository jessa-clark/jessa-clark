import ContactCard from "../../Components/ContactCard/ContactCard";
import Layout from "../../Components/Layout/Layout";
import "./About.css";

const About = (props) => {
  return (
    <Layout>
      <div className="about-container">
        <div className="about-section">
          <div className="name-pic-title">
            <div className="dev-name-name">
              <p>Jessa Clark</p>
            </div>
            <img className="dev-pic" src="https://i.imgur.com/325kwbG.jpg" />
            <div className="dev-title">
              <p>Full-Stack Developer</p>
            </div>
          </div>
          <div className="desc-boxes-container">
            <div className="desc-box-1">
              <div className="desc-box-1-title">Years of Experience</div>
              <p>
                With over 20+ years in customer service and office
                administration, I aim for satisfaction using logic and
                compassion. I strive to make each client feel valued and
                supported. My problem solving skills and ability to work well
                under pressure ensures top-notch quality for my clients
              </p>
            </div>
            
            <div className="desc-box-2">
              <div className="desc-box-2-title">Background</div>
              <p>
                My background is predominately in client services, business
                administration and management. With an eye for design, I am a
                creative full-stack developer who shines with front end
                development. I am a graduate of General Assembly's Software
                Engineering Immersive where I invested over 600+ hours attending
                lectures, studying, completing homework and building projects. I
                am a fast learner and have the drive to complete every task
                assigned to me with precision.{" "}
              </p>
            </div>
            <div className="desc-box-3">
              <div className="desc-box-3-title">Hobbies</div>
              <p>
              In my free time I love to hike, camp and travel. I am an avid gardener, forager and herbalist. I enjoy learning, reading and writing poetry and metaphysical studies. 
              </p>
            </div>
          </div>
        </div>
        <div className="hobbies-section"></div>
      </div>
      <ContactCard />
    </Layout>
  );
};

export default About;
