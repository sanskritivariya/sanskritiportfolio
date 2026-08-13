import education from "../../../data/education";
import "./Education.css";

export default function Education() {
  return (
    <section id="education" className="section education">
      <div className="container">
        <h2 className="section-title reveal reveal-up">Education</h2>
        
        <div className="education-grid">
          {education.map((edu, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <div
                key={`${edu.degree}-${idx}`}
                className={`education-card reveal ${isLeft ? "reveal-left" : "reveal-right"} delay-1`}
              >
                <div className="education-header">
                  <span className="education-year">{edu.year}</span>
                  <h3 className="education-degree">{edu.degree}</h3>
                </div>
                <div className="education-body">
                  <p className="education-university">{edu.university}</p>
                  {edu.cgpa && (
                    <p className="education-cgpa">
                      <strong>CGPA:</strong> {edu.cgpa}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
