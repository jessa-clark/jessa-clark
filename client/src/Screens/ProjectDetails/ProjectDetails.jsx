import React, { useEffect, useState } from 'react'
import { Link, NavLink, useHistory, useParams } from 'react-router-dom'
import Layout from '../../Components/Layout/Layout';
import { getAllProjects, getOneProject } from '../../Services/projects';
import { verify } from '../../Services/users';


function ProjectDetails(props) {
  // const { id, title, image_url, github_url, deployed_url, specs, content } = props;
  const [project, setProject] = useState({});
  const [userExists, setUserExists] = useState(null);
  const [projects, setProjects] = useState([])
  const { id } = useParams()
  const history = useHistory();



useEffect(() => {
  const fetchProject = async () => {
  const project = await getOneProject(id)
  setProject(project)
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

// useEffect(() => {
//   const fetchProjects = async () => {
//     const results = await getAllProjects();
//     setProjects(results);
//   };
//   fetchProjects();
// }, []);


  return (
    <Layout>
      <section className ="detail-section">
        <div className="project-detail-image">
          <img src={project.image_url} alt={project.title}/>
        </div>
        <div className="project-detail-text">
          <div className="project-detail-title">{project.title}
          </div>
          </div>
          <div className="project-detail-gitHub">
            <a href={project.github_url} rel="noreferrer">{project.github_url}</a>
          </div>
          <div className="project-detail-deployed">
            <a href={project.deployed_url} rel="noreferrer">{project.deployed_url}</a>
          </div>
          <div>
            {project.specs}
          </div>
          <div>
            {project.content}
          </div>
          {userExists ? (
    <Link to={`/projects/edit/${id}`}>edit project</Link>
          ) : (
            null
          )}
    </section>
  </Layout>
  )
}

export default ProjectDetails
