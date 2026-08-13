import experience from "../../../data/experience";
import "./Experience.css";

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <h2 className="section-title reveal reveal-up">Work Experience</h2>
        
        <div className="experience-timeline">
          {experience.map((job, idx) => (
            <div
              key={`${job.company}-${idx}`}
              className={`experience-item reveal reveal-up delay-${idx + 1}`}
            >
              <div className="experience-meta">
                <span className="experience-duration">
                  {job.startDate} &ndash; {job.endDate}
                </span>
                <span className="experience-company">{job.company}</span>
              </div>
              
              <div className="experience-details">
                <h3 className="experience-role">{job.role}</h3>
                
                {job.responsibilities && job.responsibilities.length > 0 && (
                  <ul className="experience-responsibilities">
                    {job.responsibilities.map((resp, respIdx) => (
                      <li key={respIdx}>{resp}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
