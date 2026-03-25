import { Link } from 'react-router-dom';
import { courseRegistry } from '../courses/registry';

function StatusPill({ course }) {
  const className = course.status === 'live' ? 'catalog-pill catalog-pill-live' : 'catalog-pill catalog-pill-soon';
  return <span className={className}>{course.statusLabel}</span>;
}

export default function CourseCatalogPage() {
  return (
    <main className="catalog-shell">
      <div className="catalog-noise" />
      <section className="catalog-hero">
        <div className="catalog-eyebrow">Studio Jin lecture archive</div>
        <h1 className="catalog-title">
          One deck was not enough.
          <br />
          So the archive became a library.
        </h1>
        <p className="catalog-description">
          실전형 개발 강의를 하나씩 쌓아가는 컬렉션입니다. 지금은 바이브 코딩이 열려 있고,
          다음 순번으로는 블로그 코멘트용 <strong>Cusdis</strong> 트랙이 대기 중입니다.
        </p>
      </section>

      <section className="catalog-grid" aria-label="lecture catalog">
        {courseRegistry.map((course, index) => (
          <article className="catalog-card" key={course.slug}>
            <div className="catalog-card-glow" style={course.theme} />
            <div className="catalog-card-top">
              <span className="catalog-index">{String(index + 1).padStart(2, '0')}</span>
              <StatusPill course={course} />
            </div>
            <div className="catalog-card-body">
              <h2>{course.title}</h2>
              <p className="catalog-subtitle">{course.subtitle}</p>
              <p className="catalog-copy">{course.description}</p>
            </div>
            <div className="catalog-card-footer">
              <span className="catalog-slide-meta">{course.slides.length} slide{course.slides.length > 1 ? 's' : ''}</span>
              <Link className="catalog-link" to={`/courses/${course.slug}`}>
                {course.status === 'live' ? 'Open lecture' : 'View placeholder'}
              </Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
