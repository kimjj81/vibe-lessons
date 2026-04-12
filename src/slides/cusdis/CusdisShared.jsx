import { useCallback, useState } from 'react';
import SlideWrapper from '../../components/SlideWrapper';
import GradientText from '../../components/GradientText';
import { useDeckModal } from '../../components/slide/DeckModalContext';
import { useLocale } from '../../i18n/LocaleContext';

export function CusdisSlide({ slideNumber, kicker, title, subtitle, sources = [], children }) {
  return (
    <SlideWrapper slideNumber={slideNumber} style={{ padding: '72px 80px 96px' }}>
      <div className="cusdis-slide-shell">
        <div className="cusdis-slide-head">
          <div className="cusdis-slide-kicker tag tag-cyan">{kicker}</div>
          <h2 className="cusdis-slide-title">
            <GradientText>{title}</GradientText>
          </h2>
          {subtitle ? <p className="cusdis-slide-subtitle">{subtitle}</p> : null}
        </div>
        <div className="cusdis-scroll-region" data-prevent-swipe="" data-slide-scroll-region="true">
          {children}
        </div>
        {sources.length > 0 ? (
          <div className="cusdis-source-row">
            {sources.map((source) => (
              <a
                key={source.href}
                className="cusdis-source-link"
                href={source.href}
                rel="noopener noreferrer"
                target="_blank"
              >
                {source.label}
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </SlideWrapper>
  );
}

export function MediaCard({ src, alt, caption, title }) {
  const { locale } = useLocale();
  const modalApi = useDeckModal();
  const resolvedTitle = title ?? caption;

  return (
    <figure className="cusdis-media-card">
      {resolvedTitle ? <figcaption className="cusdis-media-title">{resolvedTitle}</figcaption> : null}
      <button
        aria-label={`${resolvedTitle || alt} ${locale === 'ko' ? '크게 보기' : 'view full image'}`}
        className="cusdis-media-button"
        onClick={() => modalApi?.openModal({
          alt,
          description: locale === 'ko' ? '이미지 전체 보기' : 'Full image',
          kicker: locale === 'ko' ? '이미지 전체 보기' : 'Full image',
          renderMode: 'image',
          src,
          title: resolvedTitle || alt,
        })}
        type="button"
      >
        <img alt={alt} src={src} />
        <span className="cusdis-media-badge">{locale === 'ko' ? '크게 보기' : 'Open full image'}</span>
      </button>
    </figure>
  );
}

export function CodeCard({ title, code }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(code).catch(() => { });
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [code]);

  return (
    <div className="cusdis-code-card">
      <div className="cusdis-code-title">
        <span>{title}</span>
        <button className="cusdis-copy-btn" onClick={handleCopy} type="button">
          {copied ? '✓ Copied' : 'Copy'}
        </button>
      </div>
      <pre>{code}</pre>
    </div>
  );
}

export function StepList({ items }) {
  return (
    <ol className="cusdis-step-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ol>
  );
}
