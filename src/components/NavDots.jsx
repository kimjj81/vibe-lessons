export default function NavDots({ current, total, onGoto }) {
  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      gap: '8px',
      zIndex: 100,
    }}>
      {[...Array(total)].map((_, i) => (
        <button
          key={i}
          onClick={() => onGoto(i)}
          style={{
            width: i === current ? '24px' : '8px',
            height: '8px',
            borderRadius: '4px',
            border: 'none',
            cursor: 'pointer',
            background: i === current
              ? 'linear-gradient(90deg, #7c3aed, #06b6d4)'
              : 'rgba(255,255,255,0.2)',
            transition: 'all 0.3s ease',
            padding: 0,
          }}
          aria-label={`슬라이드 ${i + 1}`}
        />
      ))}
    </div>
  );
}
