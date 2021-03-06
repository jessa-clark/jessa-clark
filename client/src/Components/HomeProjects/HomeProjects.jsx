import { useEffect, useState } from "react";
import { getAllProjects } from "../../Services/projects";
import ProjectCard from "../ProjectCard/ProjectCard"
import "./HomeProjects.css";


const HomeProjects = (props) => {
  const [projects, setProjects] = useState([]);
  
  
  useEffect(() => {
    const fetchProjects = async () => {
      const allProjects = await getAllProjects();
      setProjects(allProjects);
    };
    fetchProjects();
  }, []);

  return (
    <div className="home-project-container">
      <div className="notable-projects-text">Notable Projects</div>
    <div className="all-projects">
      {projects.map((project) => {
        return(
          <ProjectCard key={project.id} project={project} />
        )
      })}
    </div>
    </div>
  )
};

export default HomeProjects;