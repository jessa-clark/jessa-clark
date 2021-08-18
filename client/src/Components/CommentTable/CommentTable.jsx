import React, { useEffect, useState } from 'react'
import { Link, Route, useParams } from 'react-router-dom';
import { getAllComments } from '../../Services/comments';
import { verify } from '../../Services/users';
import EditComment from '../EditComment/EditComment';

function CommentTable(props) {
const [comments, setComments] =useState([])
const { id } = useParams();
const [userExists, setUserExists] = useState(null);


  useEffect(() => {
    const fetchComments = async () => {
    const allComments = await getAllComments()
    setComments(allComments)
    };
    fetchComments();
  }, []);

  useEffect(() => {
    const checkSigned = async () => {
      const valid = await verify();
      setUserExists(valid ? true : false);
    };
    checkSigned();
  }, []);


  return (
    <div>
      <div className="comment-table-container">
      {comments.map((comment) => {
        return(
          <div key={comment.id} className="comment-table">
            <div className="comment-table-name">
          <h2>{comment.name}</h2>
          </div>
          <div className="comment-table-comment">
          <p>{comment.comment}</p>
          </div>
          {userExists ? (
            <Link to={`/projects/${id}/comments/${comment.id}`}>edit comment</Link>
        ) : null}
          </div>  
        )
      })}
      </div>
      </div>
  )
}


export default CommentTable
