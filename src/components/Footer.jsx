/**
 * Footer with social links and dynamic year.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-socials">
        <a href="https://github.com/Youssef-Errachid" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="http://linkedin.com/in/youssef-errachid" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
      <p>Designed &amp; Built with passion by Youssef Errachid.</p>
      <p style={{ marginTop: '5px', opacity: 0.6 }}>
        &copy; <span id="year">{year}</span> All rights reserved.
      </p>
    </footer>
  );
}
