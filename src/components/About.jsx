/**
 * About section — preserves all original HTML structure, inline styles, and classes.
 */
export default function About() {
  return (
    <section id="about" className="section-container">
      <h2 className="section-heading reveal">About Me</h2>
      <div className="about-inner">
        <div className="about-text reveal">
          <p>
            Hello! My name is Youssef and I enjoy creating things that live on
            the internet. My interest in software development started back
            when I began dissecting complex problems and realized the power of
            architecting elegant solutions.
          </p>
          <p>
            At 25, my journey is driven by an unwavering passion for
            technology and a proactive, self-taught approach. Fast-forward to
            today, I dedicate my time to personal projects, mastering robust
            backend logic, and crafting intuitive user interfaces.
          </p>
          <p>Here are a few principles that drive my work:</p>
          <ul
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '10px',
              margin: '20px 0',
              fontFamily: 'var(--font-mono)',
              fontSize: '13px',
            }}
          >
            <li>
              <i className="fas fa-caret-right" style={{ color: 'var(--accent)', marginRight: '5px' }}></i>
              Algorithmic Prowess
            </li>
            <li>
              <i className="fas fa-caret-right" style={{ color: 'var(--accent)', marginRight: '5px' }}></i>
              Project-Centric Dev
            </li>
            <li>
              <i className="fas fa-caret-right" style={{ color: 'var(--accent)', marginRight: '5px' }}></i>
              Full-Stack Aspiration
            </li>
            <li>
              <i className="fas fa-caret-right" style={{ color: 'var(--accent)', marginRight: '5px' }}></i>
              Perpetual Growth
            </li>
          </ul>

          <div className="about-stats">
            <div className="stat-item">
              <div className="stat-num">2+</div>
              <div className="stat-text">Years of Coding Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">10+</div>
              <div className="stat-text">Completed Projects</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
