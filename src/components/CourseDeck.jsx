import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import NavDots from './NavDots';
import { CourseDeckProvider } from '../courses/CourseDeckContext';
import LocaleToggle from './LocaleToggle';
import { useLocale } from '../i18n/LocaleContext';
import { pickLocalized } from '../i18n/localize';

const SCROLL_REGION_SELECTOR = '[data-slide-scroll-region="true"]';

function isModalOpen() {
  return Boolean(document.querySelector('[data-ui-modal="open"]'));
}

function isScrollable(element) {
  return Boolean(element) && element.scrollHeight > element.clientHeight + 1;
}

function canScroll(element, direction) {
  if (!isScrollable(element)) return false;
  if (direction > 0) {
    return element.scrollTop + element.clientHeight < element.scrollHeight - 1;
  }
  return element.scrollTop > 1;
}

function findNearestScrollableAncestor(target, boundaryElement) {
  let current = target instanceof Element ? target : null;

  while (current && boundaryElement?.contains(current)) {
    if (isScrollable(current)) return current;
    current = current.parentElement;
  }

  return null;
}

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
  const deckRef = useRef(null);
  const lastWheelTime = useRef(0);
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const touchScrollRegion = useRef(null);
  const touchBlockNavigation = useRef(false);
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

  const getActiveSlideElement = useCallback(() => {
    return deckRef.current?.querySelectorAll('.deck-slide')[current] ?? null;
  }, [current]);

  const getActiveScrollRegion = useCallback((target) => {
    const activeSlide = getActiveSlideElement();
    const markedRegion = activeSlide?.querySelector(SCROLL_REGION_SELECTOR) ?? null;
    return findNearestScrollableAncestor(target, activeSlide) ?? markedRegion;
  }, [getActiveSlideElement]);

  useEffect(() => {
    const handleKey = (e) => {
      if (isModalOpen()) return;
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next();
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') prev();
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [next, prev]);

  useEffect(() => {
    const handleWheel = (e) => {
      if (isModalOpen()) {
        e.preventDefault();
        return;
      }

      if (Math.abs(e.deltaY) >= Math.abs(e.deltaX)) {
        const scrollRegion = getActiveScrollRegion(e.target);
        const direction = e.deltaY > 0 ? 1 : -1;

        if (canScroll(scrollRegion, direction)) {
          e.preventDefault();
          scrollRegion.scrollTop += e.deltaY;
          return;
        }
      }

      e.preventDefault();
      const now = Date.now();
      if (now - lastWheelTime.current < 300) return;
      lastWheelTime.current = now;
      if (e.deltaY > 0) next();
      else prev();
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [getActiveScrollRegion, next, prev]);

  useEffect(() => {
    const handleTouchStart = (e) => {
      if (isModalOpen()) return;
      touchStartX.current = e.touches[0].clientX;
      touchStartY.current = e.touches[0].clientY;
      touchScrollRegion.current = getActiveScrollRegion(e.target);
      touchBlockNavigation.current = false;
    };

    const handleTouchMove = (e) => {
      const scrollRegion = touchScrollRegion.current;

      if (!isScrollable(scrollRegion)) return;

      const dx = e.touches[0].clientX - touchStartX.current;
      const dy = e.touches[0].clientY - touchStartY.current;

      if (Math.abs(dy) <= Math.abs(dx)) return;

      const direction = dy > 0 ? -1 : 1;
      if (canScroll(scrollRegion, direction)) {
        touchBlockNavigation.current = true;
      }
    };

    const handleTouchEnd = (e) => {
      if (isModalOpen()) return;

      const dx = e.changedTouches[0].clientX - touchStartX.current;
      const dy = e.changedTouches[0].clientY - touchStartY.current;

      if (Math.abs(dx) > Math.abs(dy)) {
        if (dx < -50) next();
        else if (dx > 50) prev();
        return;
      }

      const direction = dy > 0 ? -1 : 1;
      if (touchBlockNavigation.current || canScroll(touchScrollRegion.current, direction)) {
        return;
      }

      if (dy < -50) next();
      else if (dy > 50) prev();
    };

    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [getActiveScrollRegion, next, prev]);

  useEffect(() => {
    const handleMouseDown = (e) => {
      if (isModalOpen()) return;
      mouseStartX.current = e.clientX;
      isDragging.current = true;
    };

    const handleMouseUp = (e) => {
      if (isModalOpen()) return;
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
      <div className="deck-shell" style={course.theme} ref={deckRef}>
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
