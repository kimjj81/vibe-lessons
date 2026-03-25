import SlideWrapper from '../../components/SlideWrapper';
import GradientText from '../../components/GradientText';
import { useLocale } from '../../i18n/LocaleContext';

export default function Slide08_TechTree() {
  const { locale } = useLocale();
  const copy = {
    ko: {
      title: '기술 스택 결정 트리',
      subtitle: '프로젝트 유형별 최적의 기술 선택 가이드',
      root: '🚀 새 프로젝트',
      web: '🌐 웹 서비스',
      data: '📊 데이터 중심',
      interactive: '🎨 인터렉티브',
      app: '📱 앱/모바일',
      cross: '크로스플랫폼',
      desktop: '데스크탑',
      note: '💡 MVP에서는 Next.js 또는 React+Vite가 가장 AI 친화적 (문서 풍부, 학습 데이터 많음)',
      stackDesc: {
        svelte: '경량',
        astro: '정적',
        reactVite: 'SPA',
        reactNative: '모바일',
        expo: '빠른 빌드',
        tauri: '경량',
        electron: '범용',
      },
    },
    en: {
      title: 'Tech stack decision tree',
      subtitle: 'A practical guide to choosing the right stack for the project shape',
      root: '🚀 New project',
      web: '🌐 Web product',
      data: '📊 Data-heavy',
      interactive: '🎨 Interactive',
      app: '📱 App / mobile',
      cross: 'Cross-platform',
      desktop: 'Desktop',
      note: '💡 For MVP work, Next.js or React + Vite tends to be the most AI-friendly path thanks to broad docs and training coverage',
      stackDesc: {
        svelte: 'Lean',
        astro: 'Static',
        reactVite: 'SPA',
        reactNative: 'Mobile',
        expo: 'Fast builds',
        tauri: 'Lightweight',
        electron: 'General-purpose',
      },
    },
  };
  const t = copy[locale];

  return (
    <SlideWrapper slideNumber={8}>
      <div style={{ width: '100%', maxWidth: '1100px', zIndex: 1 }}>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, textAlign: 'center', marginBottom: '16px' }}>
          <GradientText>{t.title}</GradientText>
        </h2>
        <p style={{ textAlign: 'center', color: '#94a3b8', marginBottom: '40px', fontSize: '1.1rem' }}>
          {t.subtitle}
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0' }}>
          <NodeBox label={t.root} color="#7c3aed" />
          <Connector />

          <div style={{ display: 'flex', gap: '80px', alignItems: 'flex-start', position: 'relative', width: '100%', justifyContent: 'center' }}>
            <div style={{ position: 'absolute', top: '0', left: '50%', transform: 'translateX(-50%)', width: '400px', height: '1px', background: 'rgba(255,255,255,0.15)' }} />

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <NodeBox label={t.web} color="#2563eb" small />
              <Connector />
              <div style={{ display: 'flex', gap: '16px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <NodeBox label={t.data} color="#1d4ed8" small />
                  <Connector />
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <StackBox name="Next.js" desc="SSR" color="#0ea5e9" />
                    <StackBox name="SvelteKit" desc={t.stackDesc.svelte} color="#ff6b35" />
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <NodeBox label={t.interactive} color="#1d4ed8" small />
                  <Connector />
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <StackBox name="React+Vite" desc={t.stackDesc.reactVite} color="#61dafb" />
                    <StackBox name="Astro" desc={t.stackDesc.astro} color="#ff5d01" />
                  </div>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <NodeBox label={t.app} color="#0891b2" small />
              <Connector />
              <div style={{ display: 'flex', gap: '16px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <NodeBox label={t.cross} color="#0e7490" small />
                  <Connector />
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <StackBox name="React Native" desc={t.stackDesc.reactNative} color="#61dafb" />
                    <StackBox name="Expo" desc={t.stackDesc.expo} color="#000020" />
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <NodeBox label={t.desktop} color="#0e7490" small />
                  <Connector />
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <StackBox name="Tauri" desc={t.stackDesc.tauri} color="#ffc131" />
                    <StackBox name="Electron" desc={t.stackDesc.electron} color="#9feaf9" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '24px', padding: '12px 24px', background: 'rgba(124,58,237,0.1)', borderRadius: '8px', border: '1px solid rgba(124,58,237,0.2)', color: '#c4b5fd', fontSize: '0.85rem' }}>
            {t.note}
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}

function NodeBox({ label, color, small }) {
  return (
    <div style={{
      padding: small ? '8px 16px' : '12px 24px',
      background: `${color}22`,
      border: `1px solid ${color}66`,
      borderRadius: '8px',
      color: '#f1f5f9',
      fontWeight: 700,
      fontSize: small ? '0.85rem' : '1rem',
      whiteSpace: 'nowrap',
    }}>
      {label}
    </div>
  );
}

function Connector() {
  return <div style={{ width: '1px', height: '20px', background: 'rgba(255,255,255,0.15)' }} />;
}

function StackBox({ name, desc, color }) {
  return (
    <div style={{
      padding: '8px 12px',
      background: 'rgba(255,255,255,0.05)',
      border: `1px solid ${color}44`,
      borderRadius: '8px',
      textAlign: 'center',
    }}>
      <div style={{ fontWeight: 700, fontSize: '0.85rem', color: '#f1f5f9' }}>{name}</div>
      <div style={{ fontSize: '0.7rem', color: '#94a3b8', marginTop: '2px' }}>{desc}</div>
    </div>
  );
}
