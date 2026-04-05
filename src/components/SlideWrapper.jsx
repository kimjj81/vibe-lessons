import { useCourseDeck } from '../courses/CourseDeckContext';

function buildStarStyle(index, slideNumber) {
  const seed = slideNumber * 31 + index * 17;
  const size = (seed % 3) + 1;
  const left = (seed * 13) % 100;
  const top = (seed * 29) % 100;

  return {
    position: 'absolute',
    width: `${size}px`,
    height: `${size}px`,
    borderRadius: '50%',
    background: 'rgba(255,255,255,0.15)',
    left: `${left}%`,
    top: `${top}%`,
  };
}

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
        {[...Array(20)].map((_, i) => (
          <div key={i} style={buildStarStyle(i, slideNumber)} />
        ))}
      </div>
      {children}
      <div className="slide-number">{slideNumber} / {resolvedTotalSlides}</div>
    </div>
  );
}
