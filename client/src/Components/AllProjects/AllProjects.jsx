// import { useEffect, useState } from "react";
// import { getAllProjects } from "../../services/projects";
// import ProjectCard from "../../components/ProjectCard/ProjectCard";
// import "./AllProjects.css";


// const AllProjects = () => {
//   const [projects, setProjects] = useState([]);
//   const [projectList, setProjectList] = useState([]);
  
//   useEffect(() => {
//     const getResults = async () => {
//       const results = await getAllProjects();
//       setProjects(results);
//     };
//     getResults();
//   }, []);

//   return (      
//       <div className="all-wines">
//         {projectList.length ? (
//           projectList.map((project) => <ProjectCard key={project.id} project={project} />)
//         ) : (
//           <h2>Loading...</h2>
//         )}
//       </div>
//   );
// };

// export default AllProjects;