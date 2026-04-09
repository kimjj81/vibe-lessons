import { useCourseDeck } from '../courses/CourseDeckContext';

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

export default function SlideWrapper({ children, slideNumber, totalSlides = 11, style = {} }) {
  const deck = useCourseDeck();
  const resolvedTotalSlides = deck?.totalSlides ?? totalSlides;

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '60px 80px',
        position: 'relative',
        overflow: 'hidden',
        ...style,
      }}
    >
      {/* Background stars/particles effect */}
      <div style={{
        position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none',
      }}>
        {DECORATIVE_STARS.map((star, i) => (
          <div key={i} style={{
            position: 'absolute',
            width: star.size + 'px',
            height: star.size + 'px',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.15)',
            left: star.left + '%',
            top: star.top + '%',
          }} />
        ))}
      </div>
      {children}
      <div className="slide-number">{slideNumber} / {resolvedTotalSlides}</div>
    </div>
  );
}
