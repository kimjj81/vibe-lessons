import { Link, useLocation, useParams } from 'react-router-dom';
import CourseDeck from '../components/CourseDeck';
import SeoHead from '../components/SeoHead';
import { getCourseDetailBySlug } from '../course-details/registry';
import { getCourseBySlug } from '../courses/registry';
import { useLocale } from '../i18n/LocaleContext';
import { buildLocalizedPath } from '../i18n/localeRouting';
import { pickLocalized } from '../i18n/localize';
import { getCourseDeckSeo, getNotFoundSeo } from '../seo/routeSeo';

export default function CourseDeckPage() {
  const { locale } = useLocale();
  const { courseSlug } = useParams();
  const location = useLocation();
  const course = getCourseBySlug(courseSlug);
  const detail = getCourseDetailBySlug(courseSlug);
  const seo = course ? getCourseDeckSeo(locale, courseSlug) : getNotFoundSeo(locale, location.pathname);
  const copy = {
    summaryEyebrow: {
      ko: '강의 요약',
      en: 'Course Summary',
    },
    overviewLink: {
      ko: '강의 소개 보기',
      en: 'Read course overview',
    },
    backToCatalog: {
      ko: '강의 목록',
      en: 'Lecture index',
    },
    learnTitle: {
      ko: '이 강의에서 다루는 것',
      en: 'What this deck covers',
    },
    chaptersTitle: {
      ko: '챕터 구성',
      en: 'Chapter outline',
    },
  };

  if (course) {
    return (
      <>
        <SeoHead seo={seo} />
        <main className="course-page-shell" style={course.theme}>
          <CourseDeck course={course} />
          {detail ? (
            <section className="course-seo-summary">
              <div className="course-seo-summary-head">
                <span className="catalog-eyebrow">{copy.summaryEyebrow[locale]}</span>
                <h1 className="course-seo-summary-title">{pickLocalized(course.title, locale)}</h1>
                <p className="course-seo-summary-subtitle">{pickLocalized(detail.hero.subtitle, locale)}</p>
                <p className="course-seo-summary-copy">{pickLocalized(detail.hero.summary, locale)}</p>
                <p className="course-seo-summary-copy course-seo-summary-copy-strong">
                  {pickLocalized(detail.hero.deliverable, locale)}
                </p>
                <div className="course-seo-summary-actions">
                  <Link className="catalog-link" to={buildLocalizedPath(locale, `/courses/${course.slug}/overview`)}>
                    {copy.overviewLink[locale]}
                  </Link>
                  <Link className="catalog-link catalog-detail-link-ghost" to={buildLocalizedPath(locale, '/')}>
                    {copy.backToCatalog[locale]}
                  </Link>
                </div>
              </div>

              <div className="course-seo-grid">
                <article className="course-seo-card">
                  <h2>{copy.learnTitle[locale]}</h2>
                  <ul className="overview-list">
                    {detail.learningOutcomes.map((outcome, index) => (
                      <li key={`${pickLocalized(outcome, locale)}-${index}`}>{pickLocalized(outcome, locale)}</li>
                    ))}
                  </ul>
                </article>

                <article className="course-seo-card">
                  <h2>{copy.chaptersTitle[locale]}</h2>
                  <div className="course-seo-chapter-list">
                    {detail.chapters.map((chapter, index) => (
                      <article key={`${course.slug}-chapter-${index}`} className="course-seo-chapter-card">
                        <div className="course-seo-chapter-head">
                          <span className="catalog-detail-index">{String(index + 1).padStart(2, '0')}</span>
                          <span className="catalog-slide-meta">{pickLocalized(chapter.duration, locale)}</span>
                        </div>
                        <h3>{pickLocalized(chapter.title, locale)}</h3>
                        <p>{pickLocalized(chapter.summary, locale)}</p>
                      </article>
                    ))}
                  </div>
                </article>
              </div>
            </section>
          ) : null}
        </main>
      </>
    );
  }

  return (
    <main className="not-found-shell">
      <SeoHead seo={seo} />
      <div className="not-found-panel">
        <span className="catalog-eyebrow">{locale === 'ko' ? '알 수 없는 강의' : 'Unknown lecture'}</span>
        <h1>{locale === 'ko' ? '찾는 강의를 아직 만들지 않았습니다.' : 'This lecture does not exist yet.'}</h1>
        <p>
          {locale === 'ko'
            ? '요청한 경로에 대응하는 강의가 없습니다. 루트 카탈로그에서 현재 공개된 강의를 선택해 주세요.'
            : 'There is no lecture for this path yet. Go back to the catalog and pick one of the published decks.'}
        </p>
        <Link className="catalog-link" to={buildLocalizedPath(locale, '/')}>
          {locale === 'ko' ? '강의 목록으로 돌아가기' : 'Back to lecture index'}
        </Link>
      </div>
    </main>
  );
}
