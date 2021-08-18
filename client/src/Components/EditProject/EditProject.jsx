import { useState, useEffect } from "react";
import { useParams, Redirect, useHistory } from "react-router-dom";
import { verify } from "../../Services/users";
import { deleteProject, getOneProject, updateProject } from "../../Services/projects";
import Layout from "../Layout/Layout"
import "./EditProject.css";

const EditProject = (props) => {
  const [project, setProject] = useState({
    title: "",
    image_url: "",
    deployed_url: "",
    github_url: "",
    specs: "",
    content: "",
  });

  const [isUpdated, setUpdated] = useState(false);
  const [userBool, setUserBool] = useState(null);
  let { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    const fetchProject = async () => {
      const project = await getOneProject(id);
      setProject(project);
    };
    const checkUser = async () => {
      const userExists = await verify();
      setUserBool(userExists ? true : false);
    };
    checkUser();
    fetchProject();
  }, [id, userBool]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProject({
      ...project,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const editProject = async () => {
      const updated = await updateProject(id, project);
      setUpdated({ updated });
    }
    editProject();
  }


  const handleDelete = () => {
    const deleteOneProject = async () => {
      await deleteProject(id);
        history.push("/projects");
    };
    deleteOneProject();
  };

  if (isUpdated) {
    return <Redirect to={`/projects/${id}`} />;
  }

  return !userBool && userBool !== null ?(
    <Redirect to="/" />
  ) : (
    <Layout>
    <div className="create-project-container">
      <div className="heading-wine-add">
        <h3>Changes are Good!🌀</h3>
      </div>
      <div className="add-form-container">
        {/* <div className="add-image-container">
      <p className="image-preview">image preview</p>
        <img className="wine-image" src={wine.imgURL} alt={wine.name} />
      </div> */}
        <form className="add-form" onSubmit={handleSubmit}>
          <label className="title-label">Title</label>
          <input
            className="input-title"
            value={project.title}
            name="title"
            required
            autoFocus
            onChange={handleChange}
          />
          <label className="image-link-label">Image URL</label>
          <input
            className="input-image-link"
            value={project.image_url}
            name="image_url"
            required
            autoFocus
            onChange={handleChange}
          />
          <label className="deployed-link-label">Deployed URL</label>
          <input
            className="input-deployed-link"
            value={project.deployed_url}
            name="deployed_url"
            required
            autoFocus
            onChange={handleChange}
          />
          <label className="github-link-label">GitHub URL</label>
          <input
            className="input-github-link"
            value={project.github_url}
            name="git_url"
            required
            autoFocus
            onChange={handleChange}
          />
          <label className="specs-label">Specs</label>
          <input
            className="input-specs"
            value={project.specs}
            name="specs"
            required
            autoFocus
            onChange={handleChange}
          />
          <div
            className="project-description-container"
            onSubmit={handleSubmit}
          >
            <label className="project-description-label">
              Project Description
            </label>
            <textarea
              className="textarea-description"
              value={project.content}
              name="content"
              required
              autoFocus
              onChange={handleChange}
            />
            <button type="update" className="add-button">
              Submit
            </button>
            <button type="delete" className="delete-button-project" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </form>
      </div>
    </div>
    </Layout>
  );
};

export default EditProject;