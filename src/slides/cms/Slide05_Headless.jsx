import SlideWrapper from '../../components/SlideWrapper';
import GradientText from '../../components/GradientText';
import { useLocale } from '../../i18n/LocaleContext';

export default function Slide05_Headless() {
  const { locale } = useLocale();
  const copy = {
    ko: {
      title: 'Headless CMS',
      subtitle: 'API로 콘텐츠를 분리·전달하는 현대적 구조',
      what: '콘텐츠 저장·관리(backend)와 프레젠테이션(frontend)을 분리하고, REST/GraphQL API로 콘텐츠를 어느 채널에든 전달하는 구조. 프론트엔드 기술 스택(React, Vue, Astro 등)을 자유롭게 선택할 수 있습니다.',
      saas: {
        label: 'SaaS형 (벤더 관리)',
        points: [
          '인프라·업데이트·보안 패치를 벤더가 담당',
          '빠른 시작, 즉시 사용 가능',
          '사용량·좌석 기반 비용 + 벤더 종속성',
        ],
      },
      selfhost: {
        label: 'Self-host형 (오픈소스)',
        points: [
          '코드·데이터 완전 통제, 데이터 주권 확보',
          '운영·보안·스케일링 책임이 팀에 있음',
          '장기 고정비(인프라+인력)로 전환 가능',
        ],
      },
      strengthLabel: '핵심 강점',
      strength: 'API로 웹·앱·음성·IoT 등 멀티채널 동시 지원 가능',
      vendorRiskLabel: '벤더 리스크',
      vendorRisk: '콘텐츠 모델/GraphQL 스키마 종속, API 요청/문서 수/대역폭/좌석 기반 비용이 성장 구간에서 급증할 수 있음',
    },
    en: {
      title: 'Headless CMS',
      subtitle: 'Modern structure delivering content via API',
      what: 'Separates content storage/management (backend) from presentation (frontend), delivering content via REST/GraphQL to any channel. Frontend tech stack (React, Vue, Astro, etc.) is freely selectable.',
      saas: {
        label: 'SaaS (vendor-managed)',
        points: [
          'Vendor handles infrastructure, updates, security patches',
          'Fast start, ready to use immediately',
          'Usage/seat-based costs + vendor dependency',
        ],
      },
      selfhost: {
        label: 'Self-hosted (open source)',
        points: [
          'Full control over code and data, data sovereignty',
          'Team owns ops, security, and scaling responsibility',
          'Convert to fixed costs (infra + staff) long-term',
        ],
      },
      strengthLabel: 'Key strength',
      strength: 'Supports web, app, voice, IoT simultaneously via API',
      vendorRiskLabel: 'Vendor risk',
      vendorRisk: 'Content model/GraphQL schema lock-in; API request/document/bandwidth/seat-based costs can spike at growth inflection points',
    },
  };
  const t = copy[locale];

  const types = [
    { data: t.saas, color: '#0ea5e9' },
    { data: t.selfhost, color: '#8b5cf6' },
  ];

  return (
    <SlideWrapper slideNumber={6}>
      <div style={{ width: '100%', maxWidth: '1100px', zIndex: 1 }}>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, textAlign: 'center', marginBottom: '16px' }}>
          <GradientText>{t.title}</GradientText>
        </h2>
        <p style={{ textAlign: 'center', color: '#7dd3fc', marginBottom: '40px', fontSize: '1.1rem' }}>
          {t.subtitle}
        </p>

        {/* What */}
        <div className="card" style={{ marginBottom: '24px', borderColor: 'rgba(14,165,233,0.3)' }}>
          <p style={{ color: '#f0f9ff', fontSize: '1rem', lineHeight: 1.7 }}>
            {t.what}
          </p>
        </div>

        {/* Two types */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '24px' }}>
          {types.map(({ data, color }) => (
            <div key={data.label} className="card" style={{ borderColor: `${color}44` }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: color, boxShadow: `0 0 8px ${color}` }} />
                <h3 style={{ fontWeight: 700, color, fontSize: '1rem' }}>{data.label}</h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {data.points.map((p, i) => (
                  <div key={i} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                    <span style={{ color, fontWeight: 700, flexShrink: 0 }}>-</span>
                    <span style={{ color: '#f0f9ff', fontSize: '0.88rem', lineHeight: 1.5 }}>{p}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Strength + Vendor Risk */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
          <div style={{
            padding: '16px 24px', borderRadius: '12px',
            background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.25)',
          }}>
            <span style={{ fontWeight: 700, color: '#22c55e', marginRight: '8px' }}>{t.strengthLabel}:</span>
            <span style={{ color: '#f0f9ff', fontSize: '0.92rem' }}>{t.strength}</span>
          </div>
          <div style={{
            padding: '16px 24px', borderRadius: '12px',
            background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.25)',
          }}>
            <span style={{ fontWeight: 700, color: '#f59e0b', marginRight: '8px' }}>{t.vendorRiskLabel}:</span>
            <span style={{ color: '#f0f9ff', fontSize: '0.92rem' }}>{t.vendorRisk}</span>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
