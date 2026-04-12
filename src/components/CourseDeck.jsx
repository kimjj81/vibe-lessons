import { useEffect, useMemo, useRef, useState } from 'react';
import { Deck, Slide } from '@revealjs/react';
import 'reveal.js/reveal.css';
import { CourseDeckProvider } from '../courses/CourseDeckContext';
import LocaleToggle from './LocaleToggle';
import SlideExampleLink from './SlideExampleLink';
import { useLocale } from '../i18n/LocaleContext';
import { buildLocalizedPath } from '../i18n/localeRouting';
import { pickLocalized } from '../i18n/localize';
import { DeckModalProvider, useDeckModal } from './slide/DeckModalContext';

const SCROLL_REGION_SELECTOR = '[data-slide-scroll-region="true"]';

const REVEAL_CONFIG = {
  center: false,
  controls: true,
  disableLayout: true,
  hash: true,
  height: 720,
  jumpToSlide: true,
  overview: true,
  progress: true,
  respondToHashChanges: true,
  slideNumber: 'c/t',
  touch: true,
  transition: 'slide',
  width: 1280,
};

function hasScrollableOverflow(element) {
  if (!element) return false;
  const { overflowY } = window.getComputedStyle(element);
  return overflowY === 'auto' || overflowY === 'scroll' || overflowY === 'overlay';
}

function isScrollable(element) {
  return Boolean(element) && hasScrollableOverflow(element) && element.scrollHeight > element.clientHeight + 1;
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
  const catalogPath = buildLocalizedPath(locale, '/');

  return (
    <div className="course-contact">
      <a className="contact-link muted-link" href={catalogPath}>
        {locale === 'ko' ? '전체 강의' : 'All lectures'}
      </a>
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
      <span className="contact-divider" />
      <a
        className="contact-link"
        href="https://substack.com/@studiojin"
        rel="noopener noreferrer"
        target="_blank"
      >
        Substack
      </a>
    </div>
  );
}

function DeckChrome({ course, current, totalSlides }) {
  const { locale } = useLocale();
  const catalogPath = buildLocalizedPath(locale, '/');

  return (
    <>
      <div className="deck-header">
        <div className="deck-header-main">
          <a className="deck-back-link deck-back-link-ghost" href={catalogPath}>
            {locale === 'ko' ? '강의 목록' : 'Lecture index'}
          </a>
          <div className="deck-header-copy">
            <span className="deck-subtitle">{pickLocalized(course.subtitle, locale)}</span>
            <span className="deck-runtime-meta">{current + 1} / {totalSlides}</span>
          </div>
        </div>
        <div className="deck-header-actions">
          <SlideExampleLink compact />
          <LocaleToggle />
        </div>
      </div>
      <CourseContact course={course} />
    </>
  );
}

function RevealDeckShell({ course, current, deckRef, onSlideChange, setDeckReady }) {
  const { activeModal } = useDeckModal();
  const lastWheelTimeRef = useRef(0);

  const getActiveScrollRegion = (target) => {
    const activeSlide = deckRef.current?.getCurrentSlide?.()
      ?? document.querySelector('.reveal-course-deck .slides section.present');
    const markedRegion = activeSlide?.querySelector(SCROLL_REGION_SELECTOR) ?? null;
    return findNearestScrollableAncestor(target, activeSlide) ?? markedRegion;
  };

  useEffect(() => {
    const deck = deckRef.current;
    if (!deck) return;

    deck.configure({
      controls: !activeModal,
      keyboard: !activeModal,
      touch: !activeModal,
    });
  }, [activeModal, deckRef]);

  useEffect(() => {
    const handleWheel = (e) => {
      const deck = deckRef.current;
      if (!deck || activeModal) return;
      if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;

      const direction = e.deltaY > 0 ? 1 : -1;
      const scrollRegion = getActiveScrollRegion(e.target);
      if (canScroll(scrollRegion, direction)) {
        e.preventDefault();
        scrollRegion.scrollTop += e.deltaY;
        return;
      }

      const now = Date.now();
      if (now - lastWheelTimeRef.current < 600) {
        e.preventDefault();
        return;
      }

      lastWheelTimeRef.current = now;
      e.preventDefault();

      if (direction > 0) deck.next();
      else deck.prev();
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [activeModal, deckRef]);

  return (
    <div className="reveal-course-shell" style={course.theme}>
      <Deck
        className="reveal-course-deck"
        config={REVEAL_CONFIG}
        deckRef={deckRef}
        onReady={(deck) => setDeckReady(Boolean(deck))}
        onSlideChange={onSlideChange}
      >
        {course.slides.map((SlideComponent, index) => (
          <Slide className="reveal-course-slide" key={`${course.slug}-${index}`}>
            <SlideComponent />
          </Slide>
        ))}
      </Deck>
      <DeckChrome course={course} current={current} totalSlides={course.slides.length} />
    </div>
  );
}

export default function CourseDeck({ course }) {
  const { locale } = useLocale();
  const [current, setCurrent] = useState(0);
  const [deckReady, setDeckReady] = useState(false);
  const deckRef = useRef(null);
  const totalSlides = course.slides.length;

  useEffect(() => {
    document.body.classList.add('course-deck-open');
    return () => document.body.classList.remove('course-deck-open');
  }, []);

  useEffect(() => {
    if (!deckReady || !deckRef.current) return;
    deckRef.current.slide(0);
    setCurrent(0);
  }, [course.slug, deckReady]);

  const deckContextValue = useMemo(() => ({
    course,
    current,
    deck: deckRef.current,
    goTo: (index) => deckRef.current?.slide(index),
    locale,
    totalSlides,
  }), [course, current, locale, totalSlides]);

  return (
    <CourseDeckProvider value={deckContextValue}>
      <DeckModalProvider>
        <RevealDeckShell
          course={course}
          current={current}
          deckRef={deckRef}
          onSlideChange={(event) => setCurrent(event.indexh ?? 0)}
          setDeckReady={setDeckReady}
        />
      </DeckModalProvider>
    </CourseDeckProvider>
  );
}
