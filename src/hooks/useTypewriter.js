import { useState, useEffect, useRef } from 'react';

const PHRASES = [
  'Building Digital Solutions.',
  'Crafting Robust Applications.',
  'Evolving Full-Stack Dev.',
  'Passionate Problem Solver.',
];

/**
 * Typewriter effect that cycles through PHRASES.
 * Returns the current displayed text string.
 * Mirrors the original typewriter loop from script.js.
 */
export function useTypewriter() {
  const [displayText, setDisplayText] = useState('');
  const stateRef = useRef({
    i: 0,
    j: 0,
    currentPhrase: [],
    isDeleting: false,
    isEnd: false,
  });

  useEffect(() => {
    let timeoutId;

    function loop() {
      const s = stateRef.current;
      s.isEnd = false;

      setDisplayText(s.currentPhrase.join(''));

      if (s.i < PHRASES.length) {
        if (!s.isDeleting && s.j <= PHRASES[s.i].length) {
          s.currentPhrase.push(PHRASES[s.i][s.j]);
          s.j++;
        }
        if (s.isDeleting && s.j <= PHRASES[s.i].length) {
          s.currentPhrase.pop();
          s.j--;
        }
        if (s.j === PHRASES[s.i].length) {
          s.isEnd = true;
          s.isDeleting = true;
        }
        if (s.isDeleting && s.j === 0) {
          s.currentPhrase = [];
          s.isDeleting = false;
          s.i++;
          if (s.i === PHRASES.length) s.i = 0;
        }
      }

      const spedUp = Math.random() * (80 - 50) + 50;
      const normalSpeed = Math.random() * (200 - 100) + 100;
      const time = s.isEnd ? 2000 : s.isDeleting ? spedUp : normalSpeed;
      timeoutId = setTimeout(loop, time);
    }

    loop();
    return () => clearTimeout(timeoutId);
  }, []);

  return displayText;
}
