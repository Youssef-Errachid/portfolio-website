/**
 * Experience Timeline section — three timeline items matching the original HTML.
 */
export default function Experience() {
  return (
    <section id="experience">
      <h2 className="section-heading reveal">My Journey</h2>
      <div className="timeline">

        <div className="timeline-item reveal">
          <div className="timeline-icon"><i className="fas fa-university"></i></div>
          <div className="timeline-content">
            <span className="timeline-date">2025 — 2026</span>
            <h3 className="timeline-title">Web Development Training</h3>
            <p className="timeline-org">École Numérique Ahmed Al Hansali, Beni Mellal</p>
            <p className="timeline-desc">
              Built a solid foundation in web development through structured
              training, strengthening my skills in front-end development,
              programming logic, and project-based learning.
            </p>
          </div>
        </div>

        <div className="timeline-item reveal">
          <div className="timeline-icon"><i className="fas fa-laptop-code"></i></div>
          <div className="timeline-content">
            <span className="timeline-date">2023 — 2024</span>
            <h3 className="timeline-title">Full-Stack Developer in Growth</h3>
            <p className="timeline-org">Self-taught builder of modern web and backend solutions</p>
            <p className="timeline-desc">
              I&apos;m focused on building secure, modern applications with Java,
              Spring Boot, React, and REST APIs. My work centers on turning
              real-world ideas into practical projects with strong
              architecture, clean code, and a problem-solving mindset.
            </p>
          </div>
        </div>

        <div className="timeline-item reveal">
          <div className="timeline-icon"><i className="fas fa-graduation-cap"></i></div>
          <div className="timeline-content">
            <span className="timeline-date">2020 — 2021</span>
            <h3 className="timeline-title">Baccalauréat Sciences de la Vie et de la Terre</h3>
            <p className="timeline-org">Lycée Moulay Rachid, Aguelmous</p>
            <p className="timeline-desc">
              Completed a scientific baccalaureate that sharpened my
              analytical thinking, discipline, and ability to approach
              challenges with a methodical mindset.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
