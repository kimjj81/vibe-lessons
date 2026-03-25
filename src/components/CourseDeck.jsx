import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import NavDots from './NavDots';
import { CourseDeckProvider } from '../courses/CourseDeckContext';
import LocaleToggle from './LocaleToggle';
import { useLocale } from '../i18n/LocaleContext';
import { pickLocalized } from '../i18n/localize';

function CourseContact({ course }) {
  const { locale } = useLocale();

  return (
    <div className="course-contact">
      <Link className="contact-link muted-link" to="/">
        {locale === 'ko' ? '전체 강의' : 'All lectures'}
      </Link>
      <span className="contact-divider" />
      <span className="contact-course">{pickLocalized(course.title, locale)}</span>
      <span className="contact-divider" />
      <a className="contact-link" href="mailto:jin@studiojin.dev">
        jin@studiojin.dev
      </a>
      <span className="contact-divider" />
      <a
        className="contact-link accent-link"
        href="https://x.com/studiojin_dev"
        rel="noopener noreferrer"
        target="_blank"
      >
        @studiojin_dev
      </a>
    </div>
  );
}

function DeckChrome({ course, current, onGoto }) {
  const { locale } = useLocale();

  return (
    <>
      <div className="deck-header">
        <div className="deck-header-main">
          <Link className="deck-back-link" to="/">
            {locale === 'ko' ? '강의 목록' : 'Lecture index'}
          </Link>
          <div className="deck-header-copy">
            <span className="deck-kicker">{pickLocalized(course.statusLabel, locale)}</span>
            <span className="deck-subtitle">{pickLocalized(course.subtitle, locale)}</span>
          </div>
        </div>
        <LocaleToggle />
      </div>
      <NavDots current={current} total={course.slides.length} onGoto={onGoto} />
      <CourseContact course={course} />
    </>
  );
}

export default function CourseDeck({ course }) {
  const { locale } = useLocale();
  const [current, setCurrent] = useState(0);
  const lastWheelTime = useRef(0);
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const mouseStartX = useRef(0);
  const isDragging = useRef(false);

  useEffect(() => {
    setCurrent(0);
  }, [course.slug]);

  const totalSlides = course.slides.length;

  const goTo = useCallback((idx) => {
    setCurrent(Math.max(0, Math.min(totalSlides - 1, idx)));
  }, [totalSlides]);

  const next = useCallback(() => {
    goTo(current + 1);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo(current - 1);
  }, [current, goTo]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next();
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') prev();
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [next, prev]);

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
        return;
      }

      if (dy < -50) next();
      else if (dy > 50) prev();
    };

    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [next, prev]);

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
    <CourseDeckProvider value={{ course, totalSlides, locale }}>
      <div className="deck-shell" style={course.theme}>
        <div className="deck-track" style={{ width: `calc(100vw * ${totalSlides})`, transform: `translateX(calc(-100vw * ${current}))` }}>
          {course.slides.map((SlideComponent, index) => (
            <div key={`${course.slug}-${index}`} className="deck-slide">
              <SlideComponent />
            </div>
          ))}
        </div>
        <DeckChrome course={course} current={current} onGoto={goTo} />
      </div>
    </CourseDeckProvider>
  );
}
