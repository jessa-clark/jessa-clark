import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CommentForm from "../../Components/CommentForm/CommentForm";
import CommentTable from "../../Components/CommentTable/CommentTable";
import EditComment from "../../Components/EditComment/EditComment";
import Layout from "../../Components/Layout/Layout";
import { getOneProject } from "../../Services/projects";
import { verify } from "../../Services/users";
import './ProjectDetails.css'

function ProjectDetails() {
  const [project, setProject] = useState({});
  const [userExists, setUserExists] = useState(null);
  // const [projects, setProjects] = useState([])
  const { id } = useParams();

  useEffect(() => {
    const fetchProject = async () => {
      const project = await getOneProject(id);
      setProject(project);
    };
    fetchProject();
  }, []);

  useEffect(() => {
    const checkSigned = async () => {
      const valid = await verify();
      setUserExists(valid ? true : false);
    };
    checkSigned();
  }, []);

  return (
    <Layout>
      <div className="details-container">
        <div className="project-detail-header">
          <h2>Project Detail</h2>
        </div>
        <section className="project-details-container">
        <div className="project-detail-image">
          <img src={project.image_url} alt={project.title} />
        </div>
      <section className="detail-section">
        <div className="project-detail-text">
          <div className="project-detail-title">{project.title}</div>
        </div>
        <div className="project-detail-gitHub">
          <a href={project.github_url} rel="noreferrer">
            {project.github_url}
          </a>
        </div>
        <div className="project-detail-deployed">
          <a href={project.deployed_url} rel="noreferrer">
            {project.deployed_url}
          </a>
        </div>
        <div className="project-detail-specs">{project.specs}</div>
        <div className="project-detail-content">{project.content}</div>
        {userExists ? (
            <Link to={`/projects/edit/${id}`}>edit project</Link>
        ) : null}
      </section>
      </section>
        <section className="commentform-project-section">
        <CommentForm project_id={project.id} /></section>
        <section className="commenttable-project-section">
        <CommentTable project_id={project.id} /></section>
      </div>
    </Layout>
  );
}

export default ProjectDetails;
