import { useCourseDeck } from '../courses/CourseDeckContext';

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
          <div key={i} style={{
            position: 'absolute',
            width: Math.random() * 3 + 1 + 'px',
            height: Math.random() * 3 + 1 + 'px',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.15)',
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
          }} />
        ))}
      </div>
      {children}
      <div className="slide-number">{slideNumber} / {resolvedTotalSlides}</div>
    </div>
  );
}
