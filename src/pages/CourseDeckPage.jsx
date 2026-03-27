import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import CourseDeck from '../components/CourseDeck';
import SeoHead from '../components/SeoHead';
import { getCourseBySlug } from '../courses/registry';
import { useLocale } from '../i18n/LocaleContext';
import { pickLocalized } from '../i18n/localize';

export default function CourseDeckPage() {
  const { locale } = useLocale();
  const { courseSlug } = useParams();
  const course = getCourseBySlug(courseSlug);

  useEffect(() => {
    document.body.classList.add('course-deck-open');
    return () => document.body.classList.remove('course-deck-open');
  }, []);

  const title = course ? pickLocalized(course.title, locale) : locale === 'ko' ? '알 수 없는 강의' : 'Unknown lecture';
  const description = course
    ? pickLocalized(course.description, locale)
    : locale === 'ko'
      ? '요청한 강의 경로에 대응되는 데이터가 없습니다.'
      : 'No lecture data is available for the requested course route.';

  const currentPath = course ? `/courses/${courseSlug}` : '/';

  if (course) {
    return (
      <>
        <SeoHead title={title} description={description} path={currentPath} locale={locale} />
        <CourseDeck course={course} />
      </>
    );
  }

  return (
    <main className="not-found-shell">
      <SeoHead title={title} description={description} path="/" locale={locale} />
      <div className="not-found-panel">
        <span className="catalog-eyebrow">{locale === 'ko' ? '알 수 없는 강의' : 'Unknown lecture'}</span>
        <h1>{locale === 'ko' ? '찾는 강의를 아직 만들지 않았습니다.' : 'This lecture does not exist yet.'}</h1>
        <p>
          {locale === 'ko'
            ? '요청한 경로에 대응하는 강의가 없습니다. 루트 카탈로그에서 현재 공개된 강의를 선택해 주세요.'
            : 'There is no lecture for this path yet. Go back to the catalog and pick one of the published decks.'}
        </p>
        <Link className="catalog-link" to="/">
          {locale === 'ko' ? '강의 목록으로 돌아가기' : 'Back to lecture index'}
        </Link>
      </div>
    </main>
  );
}
