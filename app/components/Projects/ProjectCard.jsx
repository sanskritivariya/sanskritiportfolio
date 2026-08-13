import Link from "next/link";
import "./Projects.css";

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-card-header">
        <span className="project-card-date">{project.date}</span>
        <h3 className="project-card-title">
          <Link href={`/projects/${project.slug}`} className="project-title-link">
            {project.title}
          </Link>
        </h3>
        {project.subtitle && <p className="project-card-subtitle">{project.subtitle}</p>}
      </div>
      
      <div className="project-card-body">
        {project.description ? (
          <p className="project-card-description">{project.description}</p>
        ) : (
          <p className="project-card-description no-desc">
            Details for this project will be updated soon.
          </p>
        )}
      </div>

      <div className="project-card-footer">
        {project.technologies && project.technologies.length > 0 && (
          <ul className="project-card-tech">
            {project.technologies.slice(0, 3).map((tech) => (
              <li key={tech} className="tech-tag">
                {tech}
              </li>
            ))}
            {project.technologies.length > 3 && (
              <li className="tech-tag tech-more">+{project.technologies.length - 3}</li>
            )}
          </ul>
        )}
        
        <div className="project-card-actions">
          <Link href={`/projects/${project.slug}`} className="project-details-btn">
            View Details &rarr;
          </Link>
        </div>
      </div>
    </article>
  );
}
