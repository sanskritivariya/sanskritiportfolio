import Link from "next/link";
import Image from "next/image";
import projects from "../../../data/projects";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./ProjectsDetail.css";

// Enable static pre-rendering of projects
export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <>
        <Header />
        <main className="project-detail-main error-page">
          <div className="container">
            <h1>Project Not Found</h1>
            <p>The project you are looking for does not exist.</p>
            <Link href="/" className="back-home-btn">
              &larr; Back to Portfolio
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const hasLinks = project.links && (project.links.demo || project.links.github);

  return (
    <>
      <Header />
      <main className="project-detail-main">
        <div className="container">
          <div className="project-detail-navigation">
            <Link href="/" className="back-link">
              &larr; Back to Home
            </Link>
          </div>

          <div className="project-detail-layout">
            {/* Project Summary Column */}
            <div className="project-detail-sidebar">
              <span className="detail-date">{project.date}</span>
              <h1 className="detail-title">{project.title}</h1>
              {project.subtitle && <p className="detail-subtitle">{project.subtitle}</p>}
              
              <div className="detail-section">
                <h3 className="detail-section-title">Technologies</h3>
                <ul className="detail-tech-list">
                  {project.technologies.map((tech) => (
                    <li key={tech} className="detail-tech-tag">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              {hasLinks && (
                <div className="detail-actions">
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="detail-btn btn-primary"
                    >
                      Visit Live Site
                    </a>
                  )}
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="detail-btn btn-secondary"
                    >
                      View Source
                    </a>
                  )}
                </div>
              )}
            </div>

            {/* Project Content Column */}
            <div className="project-detail-content">
              {/* Project Mockup Visual */}
              <div className="detail-visual-container">
                <div className="detail-visual-overlay"></div>
                <Image
                  src={`/images/${project.mockup}`}
                  alt={`${project.title} Interface Visual`}
                  width={800}
                  height={500}
                  priority
                  className="detail-visual-image"
                />
              </div>

              <div className="detail-body-text">
                <h2 className="detail-body-title">Project Overview</h2>
                <p className="detail-description">{project.description}</p>

                {project.features && project.features.length > 0 && (
                  <div className="detail-accomplishments">
                    <h2 className="detail-body-title">Key Features & Contributions</h2>
                    <ul className="detail-features-list">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="detail-feature-item">
                          <span className="feature-bullet">&bull;</span>
                          <span className="feature-text">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
