import { useState, useEffect } from 'react';

const useMousePosition = (ref, active = true) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const el = ref?.current;
    if (!el || !active) return;

    let ticking = false;

    const update = (e) => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const rect = el.getBoundingClientRect();
          const vwX = ((e.clientX - rect.left) / window.innerWidth) * 100;
          const vwY = ((e.clientY - rect.top) / window.innerWidth) * 100;
          setPos({ x: vwX, y: vwY });
          ticking = false;
        });
        ticking = true;
      }
    };

    el.addEventListener('mousemove', update);
    return () => el.removeEventListener('mousemove', update);
  }, [ref, active]);

  return pos;
};

export default useMousePosition;
