// import { useEffect, useState } from "react";
// import { Redirect, useHistory, useParams } from "react-router-dom";
// import { createComment } from "../../Services/comments";
// import { getOneProject } from "../../Services/projects";
// import { verify } from "../../Services/users";
// import "./CommentForm.css";

// export default function CommentForm(props) {
//   const [project, setProject] = useState({});

//   useEffect(() => {
//     const fetchProject = async (id) => {
//       const project = await getOneProject(id);
//       setProject(project);
//     };
//     fetchProject();
//   }, []);

//   const [comment, setComment] = useState({
//     name: "",
//     comment: "",
//     project_id: project.id,
//   });

//   const [userExists, setUserExists] = useState(null);
//   const history = useHistory();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setComment({ ...comment, [name]: value, project_id: project.id });
//   };

//   const handleComment = (e) => {
//     e.preventDefault();
//     const addComment = async () => {
//       const addedComment = await createComment(project.id, comment);
//       setComment({ addedComment });
//     };
//     addComment();
//     history.push(`/projects/${project.id}`);
//   };

//   useEffect(() => {
//     const checkSigned = async () => {
//       const valid = await verify();
//       setUserExists(valid ? true : false);
//     };
//     checkSigned();
//   }, []);


//   return (
//     <div>
//       <div className="comment-form-container">
//         <div className="question">
//           <p>Questions? Comments?</p>
//         </div>
//         <form
//           className="comment-form"
//           onSubmit={handleComment}
//           autocomplete="off"
//         >
//           <input
//           type="text"
//           placeholder="Name"
//             className="input-comment-name"
//             name="name"
//             id="name"
//             value={comment.name}
//             onChange={handleChange}
//           />

//             <textarea
//             resize="none"
//             placeholder="Comment"
//             className="input-comment-comment"
//             type="text"
//               name="comment"
//               id="comment"
//               value={comment.comment}
//               onChange={handleChange}
//             />
//           <button className="comment-submit-button">
//             <h3>Submit</h3>
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }
