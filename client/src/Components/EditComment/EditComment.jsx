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

const EditComment = (props) => {
  console.log(props.project_id)
  const [comment, setComment] = useState({
    name: "",
    comment: "",
    project_id: props.project_id,
  });

  const [isUpdated, setUpdated] = useState(false);
  const [userBool, setUserBool] = useState(null);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    const fetchComment = async () => {
      const comment = await getOneComment(props.project_id, id);
      setComment(comment);
    };
    const checkUser = async () => {
      const userExists = await verify();
      setUserBool(userExists ? true : false);
    };
    checkUser();
    fetchComment();
  }, [id, userBool]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setComment({
      ...comment,
      [name]: value,
      project_id: props.project_id,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const editComment = async () => {
      const updatedComment = await updateComment(props.project_id, id, comment);
      setUpdated({ updatedComment });
      history.push("/projects");
    };
    editComment();
  };

  const handleDelete = () => {
    const deleteOneComment = async () => {
      await deleteComment(props.project_id, id);
      setTimeout(() => {
        history.push("/projects");
      }, 500);
    };
    deleteOneComment();
  };

  // if (isUpdated) {
  //   return <Redirect to="/projects"/>;
  // }

  return !userBool && userBool !== null ? (
    <Redirect to="/" />
  ) : (
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