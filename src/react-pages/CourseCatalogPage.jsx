import { useEffect, useRef, useState } from 'react';
import LocaleToggle from '../components/LocaleToggle';
import { getCourseDetailBySlug } from '../course-details/registry';
import { courseRegistry } from '../courses/registry';
import { useLocale } from '../i18n/LocaleContext';
import { buildLocalizedPath } from '../i18n/localeRouting';
import { pickLocalized } from '../i18n/localize';
import { toGitHubExampleAssetHref } from '../utils/exampleLinks';

function CatalogFooter() {
  return (
    <footer className="catalog-footer">
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
    </footer>
  );
}

export default function CourseCatalogPage() {
  const { locale } = useLocale();
  const [activeSlug, setActiveSlug] = useState(courseRegistry[0]?.slug ?? null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobilePickerRef = useRef(null);
  const copy = {
    eyebrow: {
      ko: 'Studio Jin 강의 아카이브',
      en: 'Studio Jin lecture archive',
    },
    titleTop: {
      ko: 'Vibe Coding,',
      en: 'Vibe Coding,',
    },
    titleBottom: {
      ko: '자동화 강좌',
      en: 'Automation Course',
    },
    description: {
      ko: '실전형 개발 강의를 하나씩 쌓아가는 컬렉션입니다. 비정기적으로 추가합니다. 요청하는 강의도 만들어드립니다.',
      en: 'This is a growing collection of production-minded development lectures. New courses are added periodically, and custom lecture requests are welcome.',
    },
    slideLabel: {
      ko: '장',
      en: 'slides',
    },
    openOverview: {
      ko: '자세히 보기',
      en: 'View details',
    },
    openSlides: {
      ko: '슬라이드 바로 보기',
      en: 'Open slides',
    },
    detailEyebrow: {
      ko: '선택한 강좌',
      en: 'Selected lecture',
    },
    listEyebrow: {
      ko: '강좌 목록',
      en: 'Lecture list',
    },
    pickerEyebrow: {
      ko: '현재 선택한 강좌',
      en: 'Current lecture',
    },
    pickerAction: {
      ko: '다른 강좌 보기',
      en: 'Browse lectures',
    },
  };

  const activeCourse = courseRegistry.find((course) => course.slug === activeSlug) ?? courseRegistry[0];
  const activeCourseDetail = getCourseDetailBySlug(activeCourse.slug);
  const activeIndex = courseRegistry.findIndex((course) => course.slug === activeCourse.slug);
  const detailTheme = {
    '--catalog-accent-start': activeCourse.theme['--grad-start'],
    '--catalog-accent-end': activeCourse.theme['--grad-end'],
    '--catalog-accent-mid': activeCourse.theme['--grad-mid'],
  };

  useEffect(() => {
    if (!isMobileMenuOpen) return undefined;

    function handlePointerDown(event) {
      if (!mobilePickerRef.current?.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    }

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    }

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMobileMenuOpen]);

  function handleSelectCourse(courseSlug) {
    setActiveSlug(courseSlug);
    setIsMobileMenuOpen(false);
  }

  const getOverviewPath = (courseSlug) => buildLocalizedPath(locale, `/courses/${courseSlug}/overview`);
  const getDeckPath = (courseSlug) => buildLocalizedPath(locale, `/courses/${courseSlug}`);

  return (
    <main className="catalog-shell">
      <div className="catalog-noise" />
      <div className="catalog-toolbar">
        <LocaleToggle />
      </div>
      <section className="catalog-hero">
        <div className="catalog-eyebrow">{copy.eyebrow[locale]}</div>
        <h1 className="catalog-title">
          {copy.titleTop[locale]}
          <br />
          {copy.titleBottom[locale]}
        </h1>
        <p className="catalog-description">{copy.description[locale]}</p>
      </section>

      <section className="catalog-browser" aria-label="lecture catalog" style={detailTheme}>
        <div className="catalog-mobile-picker" ref={mobilePickerRef}>
          <div className="catalog-mobile-picker-head">
            <span className="catalog-eyebrow">{copy.pickerEyebrow[locale]}</span>
            <span className="catalog-slide-meta">
              {locale === 'ko' ? `${activeCourse.slides.length}장` : `${activeCourse.slides.length} ${copy.slideLabel[locale]}`}
            </span>
          </div>
          <button
            type="button"
            className="catalog-mobile-picker-trigger"
            aria-expanded={isMobileMenuOpen}
            aria-haspopup="listbox"
            onClick={() => setIsMobileMenuOpen((current) => !current)}
          >
            <div className="catalog-mobile-picker-copy">
              <span className="catalog-mobile-picker-title">{pickLocalized(activeCourse.title, locale)}</span>
              <span className="catalog-mobile-picker-subtitle">{copy.pickerAction[locale]}</span>
            </div>
            <span className={isMobileMenuOpen ? 'catalog-mobile-picker-icon catalog-mobile-picker-icon-open' : 'catalog-mobile-picker-icon'}>
              ▾
            </span>
          </button>
          {isMobileMenuOpen ? (
            <div className="catalog-mobile-menu" role="listbox" aria-label={copy.listEyebrow[locale]}>
              {courseRegistry.map((course, index) => {
                const isActive = course.slug === activeCourse.slug;
                return (
                  <button
                    key={course.slug}
                    type="button"
                    className={isActive ? 'catalog-mobile-option catalog-mobile-option-active' : 'catalog-mobile-option'}
                    onClick={() => handleSelectCourse(course.slug)}
                  >
                    <span className="catalog-mobile-option-index">{String(index + 1).padStart(2, '0')}</span>
                    <span className="catalog-mobile-option-title">{pickLocalized(course.title, locale)}</span>
                  </button>
                );
              })}
            </div>
          ) : null}
        </div>

        <div className="catalog-list" role="list">
          <div className="catalog-list-label">{copy.listEyebrow[locale]}</div>
          {courseRegistry.map((course, index) => {
            const isActive = course.slug === activeCourse.slug;
            return (
              <button
                key={course.slug}
                type="button"
                className={isActive ? 'catalog-list-item catalog-list-item-active' : 'catalog-list-item'}
                onMouseEnter={() => handleSelectCourse(course.slug)}
                onFocus={() => handleSelectCourse(course.slug)}
                onTouchStart={() => handleSelectCourse(course.slug)}
                onClick={() => handleSelectCourse(course.slug)}
                aria-pressed={isActive}
              >
                <div className="catalog-list-head">
                  <span className="catalog-list-index">{String(index + 1).padStart(2, '0')}</span>
                  <span className="catalog-slide-meta">
                    {locale === 'ko' ? `${course.slides.length}장` : `${course.slides.length} ${copy.slideLabel[locale]}`}
                  </span>
                </div>
                <div className="catalog-list-title">{pickLocalized(course.title, locale)}</div>
                <div className="catalog-list-subtitle">{pickLocalized(course.subtitle, locale)}</div>
                <div
                  className="catalog-list-accent"
                  style={{
                    background: `linear-gradient(90deg, ${course.theme['--grad-start']}, ${course.theme['--grad-end']})`,
                  }}
                />
              </button>
            );
          })}
        </div>

        <article className="catalog-detail">
          <div className="catalog-detail-head">
            <span className="catalog-eyebrow">{copy.detailEyebrow[locale]}</span>
          </div>
          <div className="catalog-detail-body">
            <div className="catalog-detail-index">{String(activeIndex + 1).padStart(2, '0')}</div>
            <h2 className="catalog-detail-title">{pickLocalized(activeCourse.title, locale)}</h2>
            <p className="catalog-detail-subtitle">{pickLocalized(activeCourse.subtitle, locale)}</p>
            <p className="catalog-detail-copy">{pickLocalized(activeCourse.description, locale)}</p>
            {activeCourseDetail ? (
              <>
                <div className="catalog-detail-meta">
                  <span className="catalog-pill">{pickLocalized(activeCourseDetail.difficulty, locale)}</span>
                  <span className="catalog-pill">{pickLocalized(activeCourseDetail.estimatedTime, locale)}</span>
                </div>
                <p className="catalog-detail-note">{pickLocalized(activeCourseDetail.hero.deliverable, locale)}</p>
              </>
            ) : null}
          </div>
          <div className="catalog-detail-footer">
            <span className="catalog-slide-meta">
              {locale === 'ko' ? `${activeCourse.slides.length}장` : `${activeCourse.slides.length} ${copy.slideLabel[locale]}`}
            </span>
            <div className="catalog-detail-actions">
              <a className="catalog-link catalog-detail-link" href={getOverviewPath(activeCourse.slug)}>
                {copy.openOverview[locale]}
              </a>
              <a className="catalog-link catalog-detail-link catalog-detail-link-ghost" href={getDeckPath(activeCourse.slug)}>
                {copy.openSlides[locale]}
              </a>
            </div>
          </div>
        </article>
      </section>

      <CatalogFooter />
    </main>
  );
}
