import Image from "next/image";
import education from "../../data/education";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "./education.css";

export default function EducationPage() {
  // Find stats from data to display dynamically
  const btech = education.find((edu) => edu.degree.includes("B.Tech")) || {};
  const diploma = education.find((edu) => edu.degree.includes("Diploma")) || {};

  return (
    <>
      <Header />
      
      <div className="education-page-wrapper">
        <main className="education-main">
          {/* Header Section */}
          <section className="education-header-section fade-in-up">
            <div className="badge-wrapper">
              <span className="badge-pulse"></span>
              <span className="badge-text">My Academic Journey</span>
            </div>
            <h1 className="education-title">Education</h1>
            <p className="education-subtitle">
              A foundation in Computer Engineering that shaped my journey into frontend development.
            </p>
          </section>

          {/* Stats Cards Section */}
          <section className="education-stats-section fade-in-up delay-100">
            <div className="stat-glass-card group-card">
              <div className="stat-accent-pattern accent-primary"></div>
              <div className="stat-value">{btech.cgpa || "8.6"}</div>
              <div className="stat-label">B.Tech CGPA</div>
            </div>
            
            <div className="stat-glass-card group-card">
              <div className="stat-accent-pattern accent-secondary"></div>
              <div className="stat-value">{diploma.cgpa || "7.25"}</div>
              <div className="stat-label">Diploma CGPA</div>
            </div>
            
            <div className="stat-glass-card group-card">
              <div className="stat-accent-pattern accent-tertiary"></div>
              <div className="stat-value">{btech.year || "2023"}</div>
              <div className="stat-label">B.Tech Graduation</div>
            </div>
          </section>

          {/* Timeline Section */}
          <section className="timeline-section fade-in-up delay-200">
            {/* Center line */}
            <div className="timeline-center-line"></div>
            
            <div className="timeline-container">
              {education.map((edu, idx) => {
                const isEven = idx % 2 === 0;
                
                return (
                  <div
                    key={`${edu.degree}-${idx}`}
                    className={`timeline-milestone ${isEven ? "milestone-left" : "milestone-right"}`}
                  >
                    {/* Meta info column */}
                    <div className="milestone-meta">
                      <div className={`level-badge ${isEven ? "badge-primary" : "badge-secondary"}`}>
                        {edu.level}
                      </div>
                      <h3 className="milestone-degree">{edu.degree}</h3>
                      <p className="milestone-school">{edu.university}</p>
                      <p className="milestone-academic-detail">
                        {edu.year} &bull; CGPA: {edu.cgpa}
                      </p>
                    </div>

                    {/* Timeline Node Center Circle */}
                    <div className={`timeline-node ${isEven ? "node-primary" : "node-secondary"}`}>
                      <span className="material-symbols-outlined timeline-icon">
                        {/* {isEven ? "school" : "history_edu"} */}
                      </span>
                    </div>

                    {/* Content Detail Card Column */}
                    <div className="milestone-content">
                      <div className="glass-detail-card">
                        <div className="detail-corner-pattern"></div>
                        {edu.image && (
                          <div className="school-image-container">
                            <Image
                              src={edu.image}
                              alt={edu.university}
                              fill
                              sizes="(max-width: 768px) 100vw, 450px"
                              priority={idx === 0}
                              className="school-image"
                            />
                          </div>
                        )}
                        <p className="detail-description">{edu.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </main>
      </div>

      <Footer />
    </>
  );
}
