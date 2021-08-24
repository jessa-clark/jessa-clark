import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CommentForm from "../../Components/CommentForm/CommentForm";
import CommentTable from "../../Components/CommentTable/CommentTable";
import ContactCard from "../../Components/ContactCard/ContactCard";
import Layout from "../../Components/Layout/Layout";
import { getOneProject } from "../../Services/projects";
import { verify } from "../../Services/users";
import "./ProjectDetails.css";

function ProjectDetails(props) {
  const [project, setProject] = useState({});
  const [userExists, setUserExists] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchProject = async () => {
      const project = await getOneProject(id);
      setProject(project);
    };
    fetchProject();
  }, [id]);

  useEffect(() => {
    const checkSigned = async () => {
      const valid = await verify();
      setUserExists(valid ? true : false);
    };
    checkSigned();
  }, []);

  return (
    <Layout>
      <div className="project-details-container">
        <div className="project-details-header-title">Project Detail</div>
        <div className="image-details-container">
          <div className="details-container">
            <div className="project-detail-title">{project.title}</div>

            <div className="project-detail-specs">{project.specs}</div>
            <div className="project-detail-content">{project.content}</div>
            <div className="project-detail-gitHub">
              <a href={project.github_url} rel="noreferrer">
                GitHub
              </a>
            </div>
            <div className="project-detail-deployed">
              <a href={project.deployed_url} rel="noreferrer">
                View App
              </a>
            </div>
          </div>
          <img
            className="project-details-image"
            src={project.image_url}
            alt={project.title}
          />
        </div>
      {/* <div className="commentform-container">
        <div className="commenttable-project-section">
          <CommentTable project={project} setProject={setProject} />
        </div>
        <div className="commentform-project-section">
          <CommentForm project={project} />
        </div>
      </div> */}
      </div>
      <ContactCard />
    </Layout>
  );
}

export default ProjectDetails;
