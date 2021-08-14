import { useEffect, useState } from "react";
import { getAllProjects } from "../../Services/projects";
import "./AllProjects.css";
import Layout from "../../Components/Layout/Layout";
import CommentForm from "../../Components/CommentForm/CommentForm";

const AllProjects = (props) => {
  const [projects, setProjects] = useState([]);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setProjects({
  //     ...projects,
  //     [name]: value,
  //   });
  // };

  useEffect(() => {
    const fetchProjects = async () => {
      const allProjects = await getAllProjects();
      setProjects(allProjects);
    };
    fetchProjects();
  }, []);

  return (
    <Layout>
      <div className="project-section">
        {projects.map((project) => {
          return (
            <div className="render">
            <div className="project-image">
              <img src={project.image_url} alt={project.title} />
            </div>
            <div className="project-title">{projects.title}
            </div>
          <div className="project-gitHub">
          <a href={projects.github_url} rel="noreferrer" />
          </div>
          <div className="project-deployed">
          <a href={projects.deployed_url} rel="noreferrer" />
          </div>
          <div className="project-specs">
          {project.specs}
          </div>
          <div className="project-content">{project.content}
          </div>
          </div>)})}
    </div>
      <CommentForm project={props.project} setProject={props.setProject} />
    </Layout>
  );
};

export default AllProjects;
