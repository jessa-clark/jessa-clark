import { useEffect, useState } from "react";
import { Redirect, useParams, useHistory } from "react-router-dom";
import { createComment } from "../../Services/comments";
import { verify } from "../../Services/users";
import "./CommentForm.css";

export default function CommentForm(props) {
  const [comment, setComment] = useState({
    name: "",
    comment: "",
    project_id: props.project.id,
  });
  const [isCreated, setCreated] = useState(false);
  const [userExists, setUserExists] = useState(null);
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setComment({ ...comment, [name]: value, project_id: props.project.id });
  };



  const handleComment = (e) => {
    e.preventDefault();
    const addComment = async () => {
      const addedComment = await createComment(props.project.id,comment) ;
      setComment({ addedComment });
    };
    history.push("/projects")
    addComment();
  }; 

  useEffect(() => {
    const checkSigned = async () => {
      const valid = await verify();
      setUserExists(valid ? true : false);
    };
    checkSigned();
  }, []);

  // if(isCreated) {
  //   return <Redirect to={`/projects/${props.project.id}`} />;
  // }

  return (
    <div>
      <div className="comment-form-container">
        <div className="question">
        <h3>Questions? Comments?</h3>
        </div>
        <form className="comment-form" onSubmit={handleComment}>
          <label>Name</label>
          <div className="comment-name">
            <input
              name="name"
              id="name"
              value={comment.name}
              onChange={handleChange}
            />
          </div>
          <label>Comment</label>
          <input
            className="comment-comment"
            name="comment"
            id="comment"
            value={comment.comment}
            onChange={handleChange}
          />
          <button className="comment-submit-button">
            <h3>Submit</h3>
          </button>
        </form>
      </div>
    </div>
  );
}
