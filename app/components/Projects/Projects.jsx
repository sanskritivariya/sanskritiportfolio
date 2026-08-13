import projects from "../../../data/projects";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title reveal reveal-up">Projects</h2>
        
        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div
              key={`${project.title}-${idx}`}
              className={`reveal reveal-up delay-${(idx % 3) + 1}`}
              style={{ height: "100%" }} // Make sure wrapper maintains full height
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
