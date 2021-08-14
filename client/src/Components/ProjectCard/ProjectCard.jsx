import { Link } from "react-router-dom";
import "./ProjectCard.css";

const ProjectCard = (props) => {
  const { id, title, image_url } = props.project;
  return (
    <Link className="project" to={`/projects/${id}`}>
      <article>
        <div className="project-header">
          <h3>{title}</h3>
        </div>
        <div className="project-body-image">
          <img src={image_url} alt={title} />
        </div>
      </article>
    </Link>
  );
};

export default ProjectCard;
