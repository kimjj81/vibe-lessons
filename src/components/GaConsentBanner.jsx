import { useMemo } from 'react';

export default function GaConsentBanner({ onAccept, onDeny }) {
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <div style={bannerStyle}>
      <div style={panelStyle}>
        <strong style={titleStyle}>맞춤형 분석 동의</strong>
        <p style={textStyle}>
          이 사이트는 방문 분석을 위해 Google Analytics를 사용합니다.
          동의하시면 익명화된 페이지 이동 정보만 수집합니다. (기록 보존: {year})
        </p>
        <div style={buttonRowStyle}>
          <button type="button" style={denyButtonStyle} onClick={onDeny}>
            비동의
          </button>
          <button type="button" style={acceptButtonStyle} onClick={onAccept}>
            동의함
          </button>
        </div>
      </div>
    </div>
  );
}

const bannerStyle = {
  position: 'fixed',
  left: 0,
  right: 0,
  bottom: 0,
  padding: '16px',
  zIndex: 9999,
  display: 'flex',
  justifyContent: 'center',
};

const panelStyle = {
  width: 'min(880px, 100%)',
  borderRadius: 12,
  padding: '14px 16px',
  background: '#111827',
  color: 'white',
  boxShadow: '0 12px 30px rgba(0, 0, 0, 0.25)',
};

const titleStyle = {
  marginBottom: 6,
  fontSize: 15,
};

const textStyle = {
  margin: '0 0 12px',
  fontSize: 13,
  lineHeight: 1.4,
  color: '#e5e7eb',
};

const buttonRowStyle = {
  display: 'flex',
  gap: 8,
  justifyContent: 'flex-end',
};

const acceptButtonStyle = {
  border: 'none',
  background: '#2563eb',
  color: 'white',
  padding: '8px 14px',
  borderRadius: 8,
  fontWeight: 700,
  cursor: 'pointer',
};

const denyButtonStyle = {
  border: '1px solid rgba(255,255,255,0.4)',
  background: 'transparent',
  color: 'white',
  padding: '8px 14px',
  borderRadius: 8,
  cursor: 'pointer',
};
