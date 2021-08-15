import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { getAllComments } from '../../Services/comments';
import { verify } from '../../Services/users';

function CommentTable(props) {
const [comments, setComments] =useState([])
const { id } = useParams();
const [userExists, setUserExists] = useState(null);

  useEffect(() => {
    const fetchComments = async () => {
    const allComments = await getAllComments(props.project_id)
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
      <div>
      {comments.map((comment) => {
        return(
          <div>
          <h2>{comment.name}</h2>
          <p>{comment.comment}</p>
          {userExists ? (
            <Link to={`/projects/${props.project_id}/comments/${comment.id}`}>edit comment</Link>
        ) : null}
          </div>  
        )
      })}
      </div>
      </div>
  )
}


export default CommentTable
