import { useState, useEffect } from "react";
import { useParams, Redirect, useHistory } from "react-router-dom";
import { verify } from "../../Services/users";
import "./EditComment.css";
import { deleteComment, getOneComment, updateComment } from "../../Services/comments";

const EditComment = (props) => {
  const [comment, setComment] = useState({
    name: "",
    comment: "",
    project_id: ""
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
    fetchComment()
  }, [id, userBool]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setComment({
      ...comment,
      [name]: value,
      project_id: props.project_id
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const editComment = async () => {
      const updatedComment = await updateComment(props.project_id, id, comment);
      setUpdated({ updatedComment });
      history.push(`/projects/${props.project_id}`)
    }
    editComment();
  }


  const handleDelete = () => {
    const deleteOneComment = async () => {
      await deleteComment(props.project_id, id);
      setTimeout(() => {
        history.push(`/projects/${id}`);
      }, 500)
    }
    deleteOneComment();
  };

  // if (isUpdated) {
  //   return <Redirect to="/projects"/>;
  // }

  return !userBool && userBool !== null ?(
    <Redirect to="/" />
  ) : (
    <div>
        <section className="comment-form">
        <h3>Update/Destroy Comments</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="name"
            name="name"
            id="name"
            value={comment.name}
            onChange={handleChange}
          />
          <label htmlFor="comment">Comment</label>
          <input
            type="comment"
            name="comment"
            id="comment"
            value={comment.comment}
            onChange={handleChange}
          />
            <button type="update" className="edit-button">
              Edit
            </button>
            <button type="delete" className="delete-button" onClick={handleDelete}>
              Delete
            </button>
        </form>
      </section>
    </div>
  );
};

export default EditComment;