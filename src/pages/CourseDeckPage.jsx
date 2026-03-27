import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import CourseDeck from '../components/CourseDeck';
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

  useEffect(() => {
    if (course) {
      document.title = pickLocalized(course.title, locale);
      return;
    }
    document.title = locale === 'ko' ? '알 수 없는 강의' : 'Unknown lecture';
  }, [course, locale]);

  if (course) {
    return <CourseDeck course={course} />;
  }

  return (
    <main className="not-found-shell">
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
