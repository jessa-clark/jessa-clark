import { useState, useEffect } from "react";
import { useParams, Redirect, useHistory } from "react-router-dom";
import { verify } from "../../Services/users";
import "./EditComment.css";
import {
  deleteComment,
  getOneComment,
  updateComment,
} from "../../Services/comments";
import Layout from "../Layout/Layout";
import { getOneProject } from "../../Services/projects";

const EditComment = (props) => {

  const [project, setProject] = useState({});
  const { project_id, id } = useParams();

  useEffect(() => {
    const fetchProject = async () => {
      const oneProject = await getOneProject(project_id);

      setProject(oneProject);
    };
    fetchProject();
  }, []);

  const [comment, setComment] = useState({
    name: "",
    comment: "",
    project_id: project_id,
  });
console.log(project_id)

  useEffect(() => {
    const fetchComment = async () => {
      const oneComment = await getOneComment(project_id, id);
      setComment(oneComment);
      
    };

    fetchComment();

  }, []);

  console.log(id)



  const [isUpdated, setUpdated] = useState(false);

 
  const history = useHistory();




  const handleChange = (e) => {
    const { name, value } = e.target;
    setComment({
      ...comment,
      [name]: value,
      project_id: project.id,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const editComment = async () => {
      const updatedComment = await updateComment(project.id, id, comment);
      setUpdated({ updatedComment });
      history.push(`/projects/${project.id}`);
    };
    editComment();
  };

  const handleDelete = () => {
    const deleteOneComment = async () => {
      await deleteComment(project.id, id);
      setTimeout(() => {
        history.push(`/projects/${project.id}`);
      }, 500);
    };
    deleteOneComment();
  };


  return  (
    <Layout>
      <div className="comment-screen-container">
        <section className="comment-form-text">
          <h3>Update/Destroy Comments</h3>
        </section>
        <section className="edit-comment-form">
          <form onSubmit={handleSubmit}>
            <div className="name-comment">
              <label className="name-public" htmlFor="name">
                Name
              </label>
              <input
                className="input-name"
                type="name"
                name="name"
                id="name"
                value={comment.name}
                onChange={handleChange}
              />
              <label className="comment" htmlFor="comment">
                Comment
              </label>
              <textarea
                className="input-comment"
                type="comment"
                name="comment"
                id="comment"
                value={comment.comment}
                onChange={handleChange}
              />
            </div>
          </form>
          <div className="button-div">
            <button
              type="update"
              className="edit-button"
              onClick={handleSubmit}
            >
              Edit
            </button>
            <button
              type="delete"
              className="delete-button"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default EditComment;