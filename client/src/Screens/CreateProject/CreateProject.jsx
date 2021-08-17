import { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { verify } from "../../Services/users";
import { createProject } from "../../Services/projects";
import "./CreateProject.css";

const CreateProject = (props) => {
  const [project, setProject] = useState({
    title: "",
    image_url: "",
    deployed_url: "",
    github_url: "",
    specs: "",
    content: "",
    user_id: props.user.id,
  });

  const [isCreated, setCreated] = useState(false);
  const [userBool, setUserBool] = useState(null);

  useEffect(() => {
    const checkUser = async () => {
      const userExists = await verify();
      setUserBool(userExists ? true : false);
    };
    checkUser();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProject({
      ...project,
      [name]: value,
      user_id: props.user.id,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const addProject = async () => {
      const created = await createProject(project);
      setCreated({ created });
    };
    addProject();
  };

  if (isCreated) {
    return <Redirect to="/projects" />;
  }

  return !userBool && userBool !== null ? (
    <Redirect to="/login" />
  ) : (
    <div className="create-project-container">
      <div className="heading-project-add">
        <h2>Project Add</h2>
      </div>
      <div className="add-form-container">
        <form className="add-form" onSubmit={handleSubmit}>
          <label className="title-label">Title:</label>
          <input
            className="input-title"
            value={project.title}
            name="title"
            required
            autoFocus
            onChange={handleChange}
          />
          <label className="image-link-label">Image URL:</label>
          <input
            className="input-image-link"
            value={project.image_url}
            name="image_url"
            required
            autoFocus
            onChange={handleChange}
          />
          <label className="deployed-link-label">Deployed URL:</label>
          <input
            className="input-deployed-link"
            value={project.deployed_url}
            name="deployed_url"
            required
            autoFocus
            onChange={handleChange}
          />
          <label className="github-link-label">GitHub URL:</label>
          <input
            className="input-github-link"
            value={project.github_url}
            name="github_url"
            required
            autoFocus
            onChange={handleChange}
          />
          <label className="specs-label">Stack:</label>
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
            <label className="project-description-label">Description:</label>
            <input
              className="textarea-description"
              value={project.content}
              name="content"
              required
              autoFocus
              onChange={handleChange}
            />
            <button type="submit" className="add-button">
              <h3>Get it 💅</h3>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProject;
