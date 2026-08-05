import { useTypewriter } from '../hooks/useTypewriter';

/**
 * Hero section with typewriter effect, profile image, and CTA buttons.
 * Preserves all original markup and classes from the HTML.
 */
export default function Hero() {
  const typewriterText = useTypewriter();

  return (
    <>
      {/* Social Sidebar - Left (Desktop) */}
      <div className="social-left reveal delay-4 active">
        <ul>
          <li>
            <a href="https://github.com/Youssef-Errachid" target="_blank" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li>
            <a href="http://linkedin.com/in/youssef-errachid" target="_blank" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </li>
          <li>
            <a href="#" target="_blank" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
        </ul>
      </div>

      {/* Email Sidebar - Right (Desktop) */}
      <div className="email-right reveal delay-4 active">
        <a href="mailto:yousseferrachid91@gmail.com">yousseferrachid91@gmail.com</a>
      </div>

      {/* Hero Section */}
      <section id="hero">
        <div className="hero-content">
          <div className="badge reveal active">
            <div className="badge-dot"></div>
            Open to Opportunities
          </div>
          <p className="hero-top reveal delay-1 active">Hi, my name is</p>
          <h1 className="hero-title reveal delay-2 active">Youssef Errachid.</h1>
          <h2 className="hero-subtitle reveal delay-3 active">
            <span id="typewriter">{typewriterText}</span>
            <span style={{ color: 'var(--accent)' }}>|</span>
          </h2>
          <p className="hero-desc reveal delay-4 active">
            I&apos;m a self-driven Full-Stack Developer specializing in building (and
            occasionally designing) exceptional digital experiences. Currently,
            I&apos;m focused on building accessible, human-centered products and
            expanding my technological horizons.
          </p>
          <div className="hero-cta reveal delay-4 active">
            <a href="#projects" className="btn">Check out my work!</a>
            <a href="#contact" className="btn btn-fill">
              Get in Touch
              <i className="fas fa-arrow-right" style={{ marginLeft: '8px' }}></i>
            </a>
          </div>
        </div>

        <div className="hero-right reveal delay-4 active">
          <div className="hero-image-simple">
            <img
              src="/images/profile.png"
              alt="Youssef Errachid"
              className="hero-img-clean"
              onError={(e) => {
                e.target.src =
                  'https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80';
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
