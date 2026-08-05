import { useState, useEffect, useRef } from 'react';

const FINAL_NAME = 'Youssef Errachid';
const CHARS = '!<>-_\\/[]{}—=+*^?#';

/**
 * Navbar component with:
 * - GSAP logo scramble animation (using window.gsap loaded via CDN)
 * - Hamburger mobile menu
 * - Scroll shrink effect
 * - Active link tracking
 */
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const logoTextRef = useRef(null);
  const logoBracketRef = useRef(null);
  const logoSlashRef = useRef(null);
  const scrambleRef = useRef(null);

  const scrambleText = (element, targetText, duration = 1000) => {
    let startTime = Date.now();
    clearInterval(scrambleRef.current);
    scrambleRef.current = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      element.innerText = targetText
        .split('')
        .map((letter, index) => {
          if (letter === ' ') return ' ';
          if (index < targetText.length * progress) return letter;
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        })
        .join('');
      if (progress >= 1) {
        clearInterval(scrambleRef.current);
        element.innerText = targetText;
      }
    }, 30);
  };

  // GSAP logo intro animation
  useEffect(() => {
    const gsap = window.gsap;
    if (!gsap || !logoTextRef.current) return;

    const logoText = logoTextRef.current;
    const logoBracket = logoBracketRef.current;
    const logoSlash = logoSlashRef.current;

    logoText.style.width = 'auto';
    logoText.style.opacity = '1';
    logoText.textContent = '\u00A0'.repeat(FINAL_NAME.length);

    const centerOffset = logoText.offsetWidth / 2;
    gsap.set(logoBracket, { x: centerOffset, opacity: 0 });
    gsap.set(logoSlash, { x: -centerOffset, opacity: 0 });

    const tl = gsap.timeline({ delay: 0.2 });
    tl.to([logoBracket, logoSlash], { x: 0, opacity: 1, duration: 1, ease: 'expo.out' });

    setTimeout(() => scrambleText(logoText, FINAL_NAME, 1200), 300);

    return () => {
      clearInterval(scrambleRef.current);
      tl.kill();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Scroll effect: navbar shrink + active links
  useEffect(() => {
    const navbar = document.getElementById('navbar');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    const onScroll = () => {
      if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 10px 30px -10px rgba(2, 12, 27, 0.7)';
        navbar.style.height = '70px';
      } else {
        navbar.style.boxShadow = 'none';
        navbar.style.height = '80px';
      }
      let current = '';
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 200) {
          current = section.getAttribute('id');
        }
      });
      navLinks.forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Logo hover: scramble + GSAP bracket wiggle
  const handleLogoEnter = () => {
    const gsap = window.gsap;
    if (!gsap) return;
    gsap.to(logoBracketRef.current, { color: 'var(--text-light)', scale: 1.1, x: -4, duration: 0.3 });
    gsap.to(logoSlashRef.current, { color: 'var(--text-light)', scale: 1.1, x: 4, duration: 0.3 });
    gsap.to(logoTextRef.current, { color: 'var(--accent)', duration: 0.3 });
    scrambleText(logoTextRef.current, FINAL_NAME, 500);
  };

  const handleLogoLeave = () => {
    const gsap = window.gsap;
    if (!gsap) return;
    gsap.to(logoBracketRef.current, { color: 'var(--accent)', scale: 1, x: 0, duration: 0.3 });
    gsap.to(logoSlashRef.current, { color: 'var(--accent)', scale: 1, x: 0, duration: 0.3 });
    gsap.to(logoTextRef.current, { color: 'var(--text-light)', duration: 0.3 });
    clearInterval(scrambleRef.current);
    logoTextRef.current.innerText = FINAL_NAME;
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav id="navbar">
      <div className="nav-container">
        <a
          href="#"
          className="logo"
          id="main-logo"
          onMouseEnter={handleLogoEnter}
          onMouseLeave={handleLogoLeave}
        >
          <span className="logo-bracket" ref={logoBracketRef}>&lt;</span>
          <span className="logo-text" ref={logoTextRef}>Youssef Errachid</span>
          <span className="logo-slash" ref={logoSlashRef}>/&gt;</span>
        </a>

        <ul className={`nav-links${menuOpen ? ' nav-active' : ''}`} id="nav-links">
          <li><a href="#about" onClick={closeMenu}><span>01.</span> About</a></li>
          <li><a href="#experience" onClick={closeMenu}><span>02.</span> Experience</a></li>
          <li><a href="#skills" onClick={closeMenu}><span>03.</span> Skills</a></li>
          <li><a href="#projects" onClick={closeMenu}><span>04.</span> Work</a></li>
          <li><a href="#contact" onClick={closeMenu}><span>05.</span> Contact</a></li>
          <li>
            <a
              href="/files/Youssef-Errachid-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-fill"
              style={{ marginLeft: '15px', padding: '0.75rem 1rem', color: 'var(--bg-primary)' }}
              onClick={closeMenu}
            >
              Resume
            </a>
          </li>
        </ul>

        <button
          className="hamburger"
          id="hamburger"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          <i className={menuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </button>
      </div>
    </nav>
  );
}
