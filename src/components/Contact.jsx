import { useState } from 'react';

/**
 * Contact section with Netlify form.
 * Preserves data-netlify, netlify-honeypot, form-name hidden input,
 * and original form status feedback logic.
 */
export default function Contact() {
  const [status, setStatus] = useState({ msg: '', type: '' });
  const [submitting, setSubmitting] = useState(false);
  const [btnText, setBtnText] = useState(null); // null = default

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setBtnText('Sending...');

    const formData = new FormData(e.target);
    try {
      const response = await fetch(e.target.action || window.location.pathname, {
        method: 'POST',
        body: formData,
      });
      if (!response.ok) throw new Error('Form submission failed');
      setStatus({ msg: 'Thank you! Your message has been sent successfully.', type: 'success' });
      e.target.reset();
    } catch {
      setStatus({
        msg: 'Oops! Something went wrong. Please try again or email me directly.',
        type: 'error',
      });
    } finally {
      setSubmitting(false);
      setBtnText(null);
      setTimeout(() => {
        setStatus({ msg: '', type: '' });
      }, 5000);
    }
  };

  return (
    <section id="contact">
      <p
        style={{
          color: 'var(--accent)',
          fontFamily: 'var(--font-mono)',
          marginBottom: '10px',
        }}
        className="reveal"
      >
        05. What&apos;s Next?
      </p>
      <h2 className="contact-title reveal">Get In Touch</h2>
      <p className="contact-desc reveal">
        Although I&apos;m not currently looking for any new opportunities, my inbox
        is always open. Whether you have a question or just want to say hi,
        I&apos;ll try my best to get back to you!
      </p>

      <div className="contact-form-wrapper reveal">
        <form
          id="contact-form"
          className="contact-form"
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          action="/thank-you.html"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Don&apos;t fill this out:
              <input name="bot-field" />
            </label>
          </p>

          <div className="form-row">
            <div className="form-group">
              <input type="text" id="name" name="name" required placeholder=" " />
              <label htmlFor="name">Name</label>
              <span className="input-bar"></span>
            </div>
            <div className="form-group">
              <input type="email" id="email" name="email" required placeholder=" " />
              <label htmlFor="email">Email</label>
              <span className="input-bar"></span>
            </div>
          </div>

          <div className="form-group">
            <input type="text" id="subject" name="subject" required placeholder=" " />
            <label htmlFor="subject">Subject</label>
            <span className="input-bar"></span>
          </div>

          <div className="form-group">
            <textarea id="message" name="message" rows="4" required placeholder=" "></textarea>
            <label htmlFor="message">Message</label>
            <span className="input-bar"></span>
          </div>

          <div className="form-footer">
            <button type="submit" className="btn btn-fill submit-btn" disabled={submitting}>
              {btnText || (
                <>
                  Send Message
                  <i className="fas fa-paper-plane" style={{ marginLeft: '10px' }}></i>
                </>
              )}
            </button>
            <div className="email-fallback">
              or email directly at{' '}
              <a href="mailto:yousseferrachid91@gmail.com" className="email-link">
                yousseferrachid91@gmail.com
              </a>
            </div>
          </div>
        </form>

        {status.msg && (
          <div className={`form-status ${status.type}`} id="form-status">
            {status.msg}
          </div>
        )}
      </div>
    </section>
  );
}
