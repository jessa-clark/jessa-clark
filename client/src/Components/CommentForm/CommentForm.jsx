import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { createComment } from "../../Services/comments";
import { verify } from "../../Services/users";
import "./CommentForm.css";

export default function CommentForm(props) {
  const [comment, setComment] = useState({
    name: "",
    comment: "",
    project_id: props.project.id,
  });

  const [userExists, setUserExists] = useState(null);
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setComment({ ...comment, [name]: value, project_id: props.project.id });
  };

  const handleComment = (e) => {
    e.preventDefault();
    const addComment = async () => {
      const addedComment = await createComment(props.project.id, comment);
      setComment({ addedComment });
    };
    history.push("/projects");
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
          <p>Questions? Comments?</p>
        </div>
        <form
          className="comment-form"
          onSubmit={handleComment}
          autocomplete="off"
        >
          <input
          type="text"
          placeholder="Name"
            className="input-comment-name"
            name="name"
            id="name"
            value={comment.name}
            onChange={handleChange}
          />

            <textarea
            resize="none"
            placeholder="Comment"
            className="input-comment-comment"
            type="text"
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
