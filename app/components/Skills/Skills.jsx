import skills from "../../../data/skills";
import "./Skills.css";

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2 className="section-title reveal reveal-up">Skills & Technologies</h2>
        
        <div className="skills-grid">
          {/* Tech Stack */}
          <div className="skills-category reveal reveal-left delay-1">
            <h3 className="category-title">Core Development</h3>
            <ul className="skills-list">
              {skills.technical.map((skill) => (
                <li key={skill} className="skill-item">
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Tools */}
          <div className="skills-category reveal reveal-up delay-2">
            <h3 className="category-title">Tools & Platforms</h3>
            <ul className="skills-list">
              {skills.tools.map((tool) => (
                <li key={tool} className="skill-item">
                  {tool}
                </li>
              ))}
            </ul>
          </div>

          {/* Methodologies */}
          <div className="skills-category reveal reveal-right delay-3">
            <h3 className="category-title">Methodologies</h3>
            <ul className="skills-list">
              {skills.methodologies.map((methodology) => (
                <li key={methodology} className="skill-item">
                  {methodology}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
