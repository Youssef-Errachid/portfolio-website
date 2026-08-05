/**
 * Skills section with four skill cards: Frontend, Backend, Databases, Tools.
 * Preserves all original classes and skill tags.
 */
export default function Skills() {
  return (
    <section id="skills">
      <h2 className="section-heading reveal">Technical Arsenal</h2>
      <div className="skills-grid">

        {/* Frontend */}
        <div className="skill-card reveal">
          <i className="fas fa-code skill-icon"></i>
          <h3>Frontend</h3>
          <div className="skill-list">
            {['HTML5','CSS3','JavaScript','React.js','Tailwind CSS','Bootstrap','Material UI','Lucide React','React Icons','Axios'].map(s => (
              <span key={s} className="skill-tag">{s}</span>
            ))}
          </div>
        </div>

        {/* Backend */}
        <div className="skill-card reveal delay-1">
          <i className="fas fa-layer-group skill-icon"></i>
          <h3>Backend</h3>
          <div className="skill-list">
            {['C++','Java','Spring Framework','Spring Boot','Spring Security','Spring Data JPA','REST APIs','JWT','JUnit'].map(s => (
              <span key={s} className="skill-tag">{s}</span>
            ))}
          </div>
        </div>

        {/* Databases */}
        <div className="skill-card reveal delay-2">
          <i className="fas fa-database skill-icon"></i>
          <h3>Databases</h3>
          <div className="skill-list">
            {['MySQL','SQL'].map(s => (
              <span key={s} className="skill-tag">{s}</span>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div className="skill-card reveal delay-3">
          <i className="fas fa-tools skill-icon"></i>
          <h3>Tools &amp; Workflow</h3>
          <div className="skill-list">
            {['Git','GitHub','Docker','Swagger','Maven','IntelliJ IDEA','VS Code','Postman','Agile / Scrum','Vercel','Netlify','Render'].map(s => (
              <span key={s} className="skill-tag">{s}</span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
