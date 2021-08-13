import { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { verify } from "../../Services/users";
import { createProject } from "../../Services/projects";
import "./CreateProject.css";

const CreateProject = (props) => {
  const [project, setProject] = useState({

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
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const addProject = async () => {
      const created = await createProject(project);
      setCreated({ created });
    }
    addProject();
  };

  // if(isCreated) {
  //   return <Redirect to={`/projects`} />;
  // }

  // return !userBool && userBool !== null ?(
  //   <Redirect to="/login" />
  // ) : (
    return (
    <div>
    <div className="heading-wine-add">
      <h3>Get it 💅</h3>
    </div>
    <div className="add-form-container">
      {/* <div className="add-image-container">
      <p className="image-preview">image preview</p>
        <img className="wine-image" src={wine.imgURL} alt={wine.name} />
      </div> */}
      <form className="project-description-container" onSubmit={handleSubmit}>
        <label className="project-description-label">Project Description</label>
        <textarea
          className="textarea-description"
          value={project.content}
          name="description"
          required
          autoFocus
          onChange={handleChange}
        />
        <button type="submit" className="add-button">
          <h3>Submit</h3>
        </button>
      </form>
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
      </form>
    </div>
  </div>
  )
}

export default CreateProject
