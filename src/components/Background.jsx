import { useEffect } from 'react';

/**
 * Background visual layer: mouse-following glow, gradient blobs.
 * All pointer-tracking logic from script.js ported to useEffect.
 */
export default function Background() {
  useEffect(() => {
    const mouseGlow = document.querySelector('.mouse-glow');
    const mouseRings = document.querySelectorAll('.mouse-ring');

    if (!mouseGlow) return;

    const setPointerGlow = (x, y) => {
      mouseGlow.style.left = `${x}px`;
      mouseGlow.style.top = `${y}px`;
      mouseRings.forEach((ring, index) => {
        const offsetX = (index + 1) * 24;
        const offsetY = (index + 1) * 20;
        ring.style.left = `${x + offsetX}px`;
        ring.style.top = `${y - offsetY}px`;
      });
    };

    setPointerGlow(window.innerWidth / 2, window.innerHeight / 2);

    const onMouseMove = (e) => setPointerGlow(e.clientX, e.clientY);
    const onTouchMove = (e) => {
      const touch = e.touches[0];
      if (touch) setPointerGlow(touch.clientX, touch.clientY);
    };
    const onResize = () => setPointerGlow(window.innerWidth / 2, window.innerHeight / 2);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <>
      {/* Background Elements */}
      <div className="background-layer" aria-hidden="true">
        <div className="mouse-glow"></div>
        <div className="mouse-ring ring-one"></div>
        <div className="mouse-ring ring-two"></div>
      </div>
      <div className="particles"></div>
      <div className="gradient-blob"></div>
      <div className="gradient-blob two"></div>
    </>
  );
}
