import Link from "next/link";
import personal from "../../data/personal";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "./about.css";

export default function AboutPage() {
  return (
    <>
      <Header />

      <div className="about-page-wrapper">
        <main className="about-main">
          {/* Header Section */}
          <section className="about-header-section fade-in-up">
            <div className="badge-wrapper">
              <span className="badge-pulse"></span>
              <span className="badge-text">Get to Know Me</span>
            </div>
            <h1 className="about-title">About Me</h1>
            <p className="about-subtitle">{personal.bio}</p>
          </section>

          {/* Highlights Metrics Grid */}
          <section className="about-metrics-section fade-in-up delay-100">
            <div className="metric-glass-card">
              <div className="metric-pattern pattern-primary"></div>
              <div className="metric-value">3+</div>
              <div className="metric-label">Years of Experience</div>
            </div>

            <div className="metric-glass-card">
              <div className="metric-pattern pattern-secondary"></div>
              <div className="metric-value">8+</div>
              <div className="metric-label">Projects Completed</div>
            </div>

            <div className="metric-glass-card">
              <div className="metric-pattern pattern-tertiary"></div>
              <div className="metric-value">100%</div>
              <div className="metric-label">Responsive & Semantic</div>
            </div>
          </section>

          {/* Biography & Philosophy Layout */}
          <section className="about-details-section fade-in-up delay-200">
            <div className="about-layout-grid">
              {/* Detailed Bio Column */}
              <div className="bio-narrative-column">
                <h2 className="about-section-heading">My Narrative</h2>
                <div className="bio-paragraphs">
                  <p>
                    I am a dedicated <strong>{personal.title}</strong> with a solid academic foundation in Computer Engineering. My work centers on building premium, interactive user interfaces using ReactJS and NextJS.
                  </p>
                  <p>
                    Throughout my professional journey working at Rydot Infotech and Scriptus Solution, I have translated complex design specifications into structured, production-ready frontend code. I believe in writing standard CSS and avoiding unnecessary dependencies to keep load times lightning-fast.
                  </p>
                  <p>
                    Whether collaborating within Agile/Scrum sprints, handling version control in GitHub/GitLab, or setting up deployment whitelists, I approach software engineering with a focus on code readability, robustness, and visual elegance.
                  </p>
                </div>
                <div className="bio-actions">
                  <Link href="/#contact" className="about-contact-btn">
                    Let's Build Together &rarr;
                  </Link>
                </div>
              </div>

              {/* Developer Pillars Column */}
              <div className="philosophy-column">
                <h2 className="about-section-heading">Core Philosophy</h2>
                <div className="philosophy-cards-stack">
                  <div className="philosophy-card">
                    <span className="material-symbols-outlined philosophy-icon icon-primary">
                      code
                    </span>
                    <div className="philosophy-text">
                      <h4>Clean Code Architecture</h4>
                      <p>
                        Writing modular, semantic HTML and human-readable layouts that are easy to understand, test, and maintain.
                      </p>
                    </div>
                  </div>

                  <div className="philosophy-card">
                    <span className="material-symbols-outlined philosophy-icon icon-secondary">
                      speed
                    </span>
                    <div className="philosophy-text">
                      <h4>Performance-First View</h4>
                      <p>
                        Optimizing assets, configuring Next.js static prerendering params, and whitelisting domains to keep apps lightweight.
                      </p>
                    </div>
                  </div>

                  <div className="philosophy-card">
                    <span className="material-symbols-outlined philosophy-icon icon-tertiary">
                      groups
                    </span>
                    <div className="philosophy-text">
                      <h4>Agile Collaboration</h4>
                      <p>
                        Communicating transparently, integrating scripts with version control, and deploying builds via continuous pipelines.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      <Footer />
    </>
  );
}
