import { Link, useParams } from 'react-router-dom';
import CourseDeck from '../components/CourseDeck';
import { getCourseBySlug } from '../courses/registry';

export default function CourseDeckPage() {
  const { courseSlug } = useParams();
  const course = getCourseBySlug(courseSlug);

  if (course) {
    return <CourseDeck course={course} />;
  }

  return (
    <main className="not-found-shell">
      <div className="not-found-panel">
        <span className="catalog-eyebrow">Unknown lecture</span>
        <h1>찾는 강의를 아직 만들지 않았습니다.</h1>
        <p>
          요청한 경로에 대응하는 강의가 없습니다. 루트 카탈로그에서 현재 공개된 강의를 선택해 주세요.
        </p>
        <Link className="catalog-link" to="/">
          Back to lecture index
        </Link>
      </div>
    </main>
  );
}
