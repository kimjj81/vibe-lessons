import SlideWrapper from '../../components/SlideWrapper';
import GradientText from '../../components/GradientText';

export function CusdisSlide({ slideNumber, kicker, title, subtitle, sources = [], children }) {
  return (
    <SlideWrapper slideNumber={slideNumber} style={{ justifyContent: 'flex-start', padding: '92px 56px 88px' }}>
      <div className="cusdis-slide-shell">
        <div className="cusdis-slide-head">
          <div className="cusdis-slide-kicker">{kicker}</div>
          <h2 className="cusdis-slide-title">
            <GradientText>{title}</GradientText>
          </h2>
          {subtitle ? <p className="cusdis-slide-subtitle">{subtitle}</p> : null}
        </div>
        <div className="cusdis-scroll-region">
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

export function MediaCard({ src, alt, caption }) {
  return (
    <figure className="cusdis-media-card">
      <img src={src} alt={alt} />
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}

export function CodeCard({ title, code }) {
  return (
    <div className="cusdis-code-card">
      <div className="cusdis-code-title">{title}</div>
      <pre>{code}</pre>
    </div>
  );
}
