import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import SlideWrapper from '../../components/SlideWrapper';
import GradientText from '../../components/GradientText';
import { useLocale } from '../../i18n/LocaleContext';

const CusdisMediaContext = createContext(null);

function ImageLightbox({ media, onClose }) {
  const { locale } = useLocale();

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className="cusdis-lightbox-backdrop" data-ui-modal="open" onClick={onClose}>
      <div
        aria-modal="true"
        className="cusdis-lightbox-dialog"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
      >
        <div className="cusdis-lightbox-header">
          <div className="cusdis-lightbox-copy">
            <div className="cusdis-lightbox-kicker">{locale === 'ko' ? '이미지 전체 보기' : 'Full image'}</div>
            <div className="cusdis-lightbox-title">{media.title || media.alt}</div>
          </div>
          <button className="cusdis-lightbox-close" onClick={onClose} type="button">
            {locale === 'ko' ? '닫기' : 'Close'}
          </button>
        </div>
        <div className="cusdis-lightbox-frame">
          <img alt={media.alt} src={media.src} />
        </div>
      </div>
    </div>
  );
}

export function CusdisSlide({ slideNumber, kicker, title, subtitle, sources = [], children }) {
  const [activeMedia, setActiveMedia] = useState(null);
  const mediaApi = useMemo(() => ({
    openMedia: (media) => setActiveMedia(media),
  }), []);

  return (
    <CusdisMediaContext.Provider value={mediaApi}>
      <SlideWrapper slideNumber={slideNumber} style={{ padding: '72px 80px 96px' }}>
        <div className="cusdis-slide-shell">
          <div className="cusdis-slide-head">
            <div className="cusdis-slide-kicker tag tag-cyan">{kicker}</div>
            <h2 className="cusdis-slide-title">
              <GradientText>{title}</GradientText>
            </h2>
            {subtitle ? <p className="cusdis-slide-subtitle">{subtitle}</p> : null}
          </div>
          <div className="cusdis-scroll-region" data-slide-scroll-region="true">
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
        {activeMedia && typeof document !== 'undefined'
          ? createPortal(
            <ImageLightbox media={activeMedia} onClose={() => setActiveMedia(null)} />,
            document.body,
          )
          : null}
      </SlideWrapper>
    </CusdisMediaContext.Provider>
  );
}

export function MediaCard({ src, alt, caption, title }) {
  const { locale } = useLocale();
  const media = useContext(CusdisMediaContext);
  const resolvedTitle = title ?? caption;

  return (
    <figure className="cusdis-media-card">
      {resolvedTitle ? <figcaption className="cusdis-media-title">{resolvedTitle}</figcaption> : null}
      <button
        aria-label={`${resolvedTitle || alt} ${locale === 'ko' ? '크게 보기' : 'view full image'}`}
        className="cusdis-media-button"
        onClick={() => media?.openMedia({ src, alt, title: resolvedTitle })}
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
