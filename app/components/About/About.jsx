import personal from "../../../data/personal";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title reveal reveal-up">About Me</h2>
        <div className="about-content reveal reveal-up delay-1">
          <div className="about-text">
            <p>
              Hi, I'm <strong>{personal.name}</strong>, a passionate {personal.title} based in India. I specialize in building user interfaces using ReactJS, NextJS, and modern web methodologies.
            </p>
            <p>
              With a background in Computer Engineering, I focus on coding clean, semantic HTML and optimized CSS, and leveraging JavaScript libraries to make websites feel intuitive, responsive, and performance-driven.
            </p>
            <p>
              My goal is to translate design mockups into pixel-perfect code while ensuring accessibility and a seamless experience across all device formats.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
