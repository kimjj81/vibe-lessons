import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import LocaleToggle from '../components/LocaleToggle';
import { courseRegistry } from '../courses/registry';
import { useLocale } from '../i18n/LocaleContext';
import { pickLocalized } from '../i18n/localize';

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
    openLecture: {
      ko: '강의 열기',
      en: 'Open lecture',
    },
  };

  useEffect(() => {
    document.title = locale === 'ko' ? 'Studio Jin 강의 아카이브' : 'Studio Jin Lecture Archive';
  }, [locale]);

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

      <section className="catalog-grid" aria-label="lecture catalog">
        {courseRegistry.map((course, index) => (
          <article className="catalog-card" key={course.slug}>
            <div className="catalog-card-glow" style={course.theme} />
            <div className="catalog-card-top">
              <span className="catalog-index">{String(index + 1).padStart(2, '0')}</span>

            </div>
            <div className="catalog-card-body">
              <h2>{pickLocalized(course.title, locale)}</h2>
              <p className="catalog-subtitle">{pickLocalized(course.subtitle, locale)}</p>
              <p className="catalog-copy">{pickLocalized(course.description, locale)}</p>
            </div>
            <div className="catalog-card-footer">
              <span className="catalog-slide-meta">
                {locale === 'ko' ? `${course.slides.length}장` : `${course.slides.length} ${copy.slideLabel[locale]}`}
              </span>
              <Link className="catalog-link" to={`/courses/${course.slug}`}>
                {copy.openLecture[locale]}
              </Link>
            </div>
          </article>
        ))}
      </section>

      <CatalogFooter />
    </main>
  );
}
