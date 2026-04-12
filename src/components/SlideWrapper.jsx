import FreeformSlideScene from './slide/FreeformSlideScene';

const DECORATIVE_STARS = [
  { size: 1.8, left: 6, top: 12 },
  { size: 2.2, left: 18, top: 74 },
  { size: 1.4, left: 26, top: 38 },
  { size: 3.2, left: 34, top: 16 },
  { size: 2.6, left: 41, top: 58 },
  { size: 1.5, left: 48, top: 82 },
  { size: 2.8, left: 57, top: 24 },
  { size: 1.7, left: 63, top: 66 },
  { size: 2.3, left: 72, top: 44 },
  { size: 1.9, left: 81, top: 15 },
  { size: 2.7, left: 88, top: 72 },
  { size: 1.6, left: 12, top: 48 },
];

export default function SlideWrapper({ children, style = {} }) {
  return (
    <FreeformSlideScene>
      <div className="slide-wrapper-stars" aria-hidden="true">
        {DECORATIVE_STARS.map((star, index) => (
          <div
            key={index}
            className="slide-wrapper-star"
            style={{
              height: `${star.size}px`,
              left: `${star.left}%`,
              top: `${star.top}%`,
              width: `${star.size}px`,
            }}
          />
        ))}
      </div>
      <div className="slide-wrapper-compat" style={style}>
        {children}
      </div>
    </FreeformSlideScene>
  );
}
