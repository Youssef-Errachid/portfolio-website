import { useEffect } from 'react';

/**
 * Adds/removes the "active" class on .reveal elements as they scroll into view.
 * Mirrors the original scroll-reveal logic from script.js.
 */
export function useReveal() {
  useEffect(() => {
    function reveal() {
      const reveals = document.querySelectorAll('.reveal');
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 100;
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add('active');
        }
      }
    }
    window.addEventListener('scroll', reveal);
    reveal(); // run on mount
    return () => window.removeEventListener('scroll', reveal);
  }, []);
}
