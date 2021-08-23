import { useEffect, useState } from "react";
import { getAllProjects } from "../../Services/projects";
import "./AllProjects.css";
import Layout from "../../Components/Layout/Layout";
import { Link } from "react-router-dom";
import ContactCard from "../../Components/ContactCard/ContactCard";

const AllProjects = (props) => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const fetchProjects = async () => {
      const allProjects = await getAllProjects();
      setProjects(allProjects);
    };
    fetchProjects();
  }, []);
  return (
    <Layout>
      <div className="project-section-all">
      <div className="display-all-title">
        <p>All Projects</p>
      </div>
        {projects.map((project) => {
          return (
              <Link className="project-all" to={`/projects/${project.id}`}>
            <div className="render">
                <div className="project-title-all"><p>{project.title}</p></div>
              <div className="project-image">
                <img src={project.image_url} alt={project.title} />
              </div>
              <button className="details-button">Learn More!</button>
              <div className="project-content">{project.content}</div>
            </div>
              </Link>
          );
        })}
        <ContactCard />
      </div>
    </Layout>
  );
};

export default AllProjects;