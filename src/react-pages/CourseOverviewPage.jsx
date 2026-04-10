import LocaleToggle from '../components/LocaleToggle';
import { useLocale } from '../i18n/LocaleContext';
import { buildLocalizedPath } from '../i18n/localeRouting';
import { pickLocalized } from '../i18n/localize';
import { toGitHubExampleAssetHref } from '../utils/exampleLinks';

function localizeItems(items = [], locale) {
  return items.map((item) => pickLocalized(item, locale));
}

function OverviewList({ items, locale, className = 'overview-list' }) {
  const localized = localizeItems(items, locale);
  if (!localized.length) return null;

  return (
    <ul className={className}>
      {localized.map((item, index) => (
        <li key={`${item}-${index}`}>{item}</li>
      ))}
    </ul>
  );
}

function OverviewSection({ title, children }) {
  return (
    <section className="overview-section">
      <div className="overview-section-head">
        <h2>{title}</h2>
      </div>
      {children}
    </section>
  );
}

export default function CourseOverviewPage({ course, detail }) {
  const { locale } = useLocale();
  const exampleHref = toGitHubExampleAssetHref(pickLocalized(detail.practiceAssets[0]?.href, locale));
  const catalogPath = buildLocalizedPath(locale, '/');
  const deckPath = buildLocalizedPath(locale, `/courses/${course.slug}`);
  const heroMeta = [
    {
      label: locale === 'ko' ? '난이도' : 'Difficulty',
      value: pickLocalized(detail.difficulty, locale),
    },
    {
      label: locale === 'ko' ? '예상 시간' : 'Estimated time',
      value: pickLocalized(detail.estimatedTime, locale),
    },
    {
      label: locale === 'ko' ? '구성' : 'Format',
      value: locale === 'ko' ? `${course.slides.length}장 슬라이드` : `${course.slides.length}-slide deck`,
    },
  ];
  const overviewCopy = {
    eyebrow: {
      ko: 'Course Overview',
      en: 'Course Overview',
    },
    backToCatalog: {
      ko: '강의 목록',
      en: 'Lecture index',
    },
    goToSlides: {
      ko: '슬라이드 보기',
      en: 'Open slides',
    },
    openExample: {
      ko: '예제 보기',
      en: 'Open example',
    },
    slidesMeta: {
      ko: `${course.slides.length}장`,
      en: `${course.slides.length} slides`,
    },
    audience: {
      ko: '추천 수강생',
      en: 'Who this is for',
    },
    prerequisites: {
      ko: '사전 준비',
      en: 'Prerequisites',
    },
    outcomes: {
      ko: '수강 후 할 수 있는 것',
      en: 'What you will be able to do',
    },
    chapters: {
      ko: '챕터 목차',
      en: 'Chapter outline',
    },
    learn: {
      ko: '배우는 것',
      en: 'You will learn',
    },
    artifacts: {
      ko: '핵심 산출물',
      en: 'Key artifacts',
    },
    assets: {
      ko: '실습 자료',
      en: 'Practice assets',
    },
    tools: {
      ko: '필요 도구',
      en: 'Tools',
    },
    studyGuide: {
      ko: '추천 학습 순서',
      en: 'Recommended study path',
    },
    faq: {
      ko: 'FAQ',
      en: 'FAQ',
    },
    evidence: {
      ko: '실전성 증거',
      en: 'Hands-on evidence',
    },
  };

  return (
    <main className="overview-shell" style={course.theme}>
      <div className="catalog-noise" />

      <div className="overview-toolbar">
        <a className="deck-back-link deck-back-link-ghost" href={catalogPath}>
          {overviewCopy.backToCatalog[locale]}
        </a>
        <LocaleToggle />
      </div>

      <section className="overview-hero">
        <span className="catalog-eyebrow">{overviewCopy.eyebrow[locale]}</span>
        <div className="overview-hero-copy">
          <h1 className="overview-title">{pickLocalized(detail.hero.title, locale)}</h1>
          <p className="overview-subtitle">{pickLocalized(detail.hero.subtitle, locale)}</p>
        </div>
        <p className="overview-summary">{pickLocalized(detail.hero.summary, locale)}</p>
        <p className="overview-deliverable">{pickLocalized(detail.hero.deliverable, locale)}</p>
        <dl className="overview-meta-list">
          {heroMeta.map((item) => (
            <div key={item.label} className="overview-meta-row">
              <dt>{item.label}</dt>
              <dd>{item.value}</dd>
            </div>
          ))}
        </dl>
        <div className="overview-hero-actions">
          <a className="catalog-link overview-link-primary" href={deckPath}>
            {overviewCopy.goToSlides[locale]}
          </a>
          {exampleHref ? (
            <a
              className="catalog-link overview-link-secondary"
              href={exampleHref}
              rel="noreferrer"
              target="_blank"
            >
              {overviewCopy.openExample[locale]}
            </a>
          ) : null}
        </div>
      </section>

      <section className="overview-layout">
        <OverviewSection title={overviewCopy.audience[locale]}>
          <OverviewList items={detail.audience} locale={locale} />
        </OverviewSection>

        <OverviewSection title={overviewCopy.prerequisites[locale]}>
          <OverviewList items={detail.prerequisites} locale={locale} />
        </OverviewSection>

        <OverviewSection title={overviewCopy.outcomes[locale]}>
          <OverviewList items={detail.learningOutcomes} locale={locale} />
        </OverviewSection>

        <OverviewSection title={overviewCopy.tools[locale]}>
          <OverviewList items={detail.tools} locale={locale} />
        </OverviewSection>

        <OverviewSection title={overviewCopy.studyGuide[locale]}>
          <OverviewList items={detail.studyGuide} locale={locale} />
        </OverviewSection>

        <OverviewSection title={overviewCopy.chapters[locale]}>
          <div className="overview-chapter-list">
            {detail.chapters.map((chapter, index) => (
              <article key={pickLocalized(chapter.title, locale)} className="overview-chapter-item">
                <div className="overview-chapter-head">
                  <span className="catalog-detail-index">{String(index + 1).padStart(2, '0')}</span>
                  <span className="catalog-slide-meta">{pickLocalized(chapter.duration, locale)}</span>
                </div>
                <h3>{pickLocalized(chapter.title, locale)}</h3>
                <p className="overview-card-copy">{pickLocalized(chapter.summary, locale)}</p>
                <div className="overview-chapter-details">
                  <div className="overview-detail-block">
                    <span className="overview-subcard-label">{overviewCopy.learn[locale]}</span>
                    <OverviewList items={chapter.learn} locale={locale} className="overview-list overview-list-tight" />
                  </div>
                  <div className="overview-detail-block">
                    <span className="overview-subcard-label">{overviewCopy.artifacts[locale]}</span>
                    <OverviewList items={chapter.artifacts} locale={locale} className="overview-list overview-list-tight" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </OverviewSection>

        {detail.evidence?.length ? (
          <OverviewSection title={overviewCopy.evidence[locale]}>
            <div className="overview-evidence-list">
              {detail.evidence.map((item) => (
                <article key={pickLocalized(item.title, locale)} className="overview-evidence-item">
                  <div className="overview-evidence-head">
                    <h3>{pickLocalized(item.title, locale)}</h3>
                    <p className="overview-card-copy">{pickLocalized(item.description, locale)}</p>
                  </div>
                  {item.type === 'image' ? (
                    <img alt={pickLocalized(item.title, locale)} className="overview-evidence-image" src={item.src} />
                  ) : (
                    <pre className="overview-code-block">
                      <code>{item.code}</code>
                    </pre>
                  )}
                </article>
              ))}
            </div>
          </OverviewSection>
        ) : null}

        <OverviewSection title={overviewCopy.assets[locale]}>
          <div className="overview-assets-list">
            {detail.practiceAssets.map((asset) => (
              <a
                key={pickLocalized(asset.href, locale)}
                className="overview-asset-item"
                href={toGitHubExampleAssetHref(pickLocalized(asset.href, locale))}
                rel="noreferrer"
                target="_blank"
              >
                <div className="overview-asset-head">
                  <h3>{pickLocalized(asset.label, locale)}</h3>
                  <span className="catalog-pill">{pickLocalized(asset.type, locale)}</span>
                </div>
                <p className="overview-card-copy">{pickLocalized(asset.description, locale)}</p>
              </a>
            ))}
          </div>
        </OverviewSection>

        <OverviewSection title={overviewCopy.faq[locale]}>
          <div className="overview-faq-list">
            {detail.faq.map((entry) => (
              <article key={pickLocalized(entry.question, locale)} className="overview-faq-item">
                <h3>{pickLocalized(entry.question, locale)}</h3>
                <p>{pickLocalized(entry.answer, locale)}</p>
              </article>
            ))}
          </div>
        </OverviewSection>
      </section>
    </main>
  );
}
