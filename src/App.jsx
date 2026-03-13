import { useState, useEffect, useRef, useCallback } from 'react';
import NavDots from './components/NavDots';
import Slide01_Title from './slides/Slide01_Title';
import Slide02_Philosophy from './slides/Slide02_Philosophy';
import Slide03_Roadmap from './slides/Slide03_Roadmap';
import Slide04_VibeCodingLoop from './slides/Slide04_VibeCodingLoop';
import Slide05_DevEnv from './slides/Slide05_DevEnv';
import Slide06_Context from './slides/Slide06_Context';
import Slide07_SkillsMCP from './slides/Slide07_SkillsMCP';
import Slide08_TechTree from './slides/Slide08_TechTree';
import Slide09_CloudCost from './slides/Slide09_CloudCost';
import Slide10_Architecture from './slides/Slide10_Architecture';
import Slide11_Security from './slides/Slide11_Security';
import { TOTAL_SLIDES } from './slides/data';
import './styles/globals.css';
import './styles/theme.css';

const slides = [
  Slide01_Title,
  Slide02_Philosophy,
  Slide03_Roadmap,
  Slide04_VibeCodingLoop,
  Slide05_DevEnv,
  Slide06_Context,
  Slide07_SkillsMCP,
  Slide08_TechTree,
  Slide09_CloudCost,
  Slide10_Architecture,
  Slide11_Security,
];

export default function App() {
  const [current, setCurrent] = useState(0);
  const lastWheelTime = useRef(0);
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const mouseStartX = useRef(0);
  const isDragging = useRef(false);

  const goTo = useCallback((idx) => {
    setCurrent(Math.max(0, Math.min(TOTAL_SLIDES - 1, idx)));
  }, []);

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  // Keyboard
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next();
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') prev();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [next, prev]);

  // Wheel
  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();
      const now = Date.now();
      if (now - lastWheelTime.current < 300) return;
      lastWheelTime.current = now;
      if (e.deltaY > 0) next();
      else prev();
    };
    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [next, prev]);

  // Touch
  useEffect(() => {
    const handleTouchStart = (e) => {
      touchStartX.current = e.touches[0].clientX;
      touchStartY.current = e.touches[0].clientY;
    };
    const handleTouchEnd = (e) => {
      const dx = e.changedTouches[0].clientX - touchStartX.current;
      const dy = e.changedTouches[0].clientY - touchStartY.current;
      if (Math.abs(dx) > Math.abs(dy)) {
        if (dx < -50) next();
        else if (dx > 50) prev();
      } else {
        if (dy < -50) next();
        else if (dy > 50) prev();
      }
    };
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);
    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [next, prev]);

  // Mouse drag
  useEffect(() => {
    const handleMouseDown = (e) => {
      mouseStartX.current = e.clientX;
      isDragging.current = true;
    };
    const handleMouseUp = (e) => {
      if (!isDragging.current) return;
      isDragging.current = false;
      const dx = e.clientX - mouseStartX.current;
      if (dx < -50) next();
      else if (dx > 50) prev();
    };
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [next, prev]);

  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden', background: '#0a0a1a', userSelect: 'none' }}>
      {/* Slide track */}
      <div style={{
        display: 'flex',
        width: `calc(100vw * ${TOTAL_SLIDES})`,
        height: '100vh',
        transform: `translateX(calc(-100vw * ${current}))`,
        transition: 'transform 0.6s cubic-bezier(0.77, 0, 0.175, 1)',
      }}>
        {slides.map((SlideComponent, i) => (
          <div key={i} style={{ width: '100vw', height: '100vh', flexShrink: 0 }}>
            <SlideComponent />
          </div>
        ))}
      </div>

      <NavDots current={current} total={TOTAL_SLIDES} onGoto={goTo} />
    </div>
  );
}
