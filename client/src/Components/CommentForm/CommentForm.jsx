import { useState } from "react";
import { Redirect, useParams } from "react-router-dom";
import { createComment } from "../../Services/comments";
import "./CommentForm.css";

export default function CommentForm(props) {
  const [comment, setComment] = useState({
    name: "",
    comment: ""
  });

  const { id } = useParams()

  const [isCreated, setCreated] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setComment({ ...comment, [name]: value });
  };

  const handleComment = (e) => {
    e.preventDefault();
    const addComment = async () => {
      const addedComment = await createComment(comment);
      setCreated( {addedComment} );
    };
    addComment()
  }

  if(isCreated) {
    return <Redirect to={`/projects/${id}`} />;
  }

  return (
    <div>
      <section className="comment-form">
        <h3>Questions? Comments?</h3>
        <form onSubmit={handleComment}>
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
          <button type="submit">
            <h3>Submit</h3>
          </button>
        </form>
      </section>
    </div>
  );
}

