import SlideWrapper from '../../components/SlideWrapper';
import GradientText from '../../components/GradientText';
import { useLocale } from '../../i18n/LocaleContext';

export default function Slide18_Operations() {
  const { locale } = useLocale();
  const copy = {
    ko: {
      title: '운영·확장성 전략',
      subtitle: '캐시, DB 확장, 장애 복구',
      cacheTitle: '캐시 전략',
      cacheItems: [
        'Edge CDN + Cache-Control: HTTP 표준(RFC 9111) 기반',
        'ISR/SSG: 전체 재빌드 없이 페이지 갱신, 더 정밀하면 revalidateTag',
        'Headless CMS CDN: publish 시 purge 정책 + API rate limit 함께 설계',
        'CSP/SRI: 서드파티 스크립트 통제 — 인라인 차단, 무결성 해시 검증',
      ],
      dbTitle: 'DB 확장',
      dbItems: [
        'Read Replica: 공개 조회(published)를 replica로 분산 — 캐시 정책 먼저 확보',
        'Sharding: 멀티테넌트라면 tenant_id 기준 분리 — 리비전/댓글도 같이 이동 가능해야 함',
        '미디어: DB 대신 오브젝트 스토리지(S3) + presigned URL 업로드',
      ],
      rtoTitle: '장애 복구 기준값 (예시)',
      rtoHeaders: ['구성 요소', 'RTO', 'RPO'],
      rtoRows: [
        { component: '콘텐츠 DB', rto: '1~4시간', rpo: '5~15분' },
        { component: '미디어 스토리지', rto: '1~4시간', rpo: '15~60분' },
        { component: '캐시/검색 인덱스', rto: '수분~1시간', rpo: '재구축 가능 기준' },
      ],
      rtoNote: '이 값은 시작점입니다. 팀의 운영 정책과 예산에 맞게 조정하세요.',
    },
    en: {
      title: 'Operations & Scalability Strategy',
      subtitle: 'Cache, DB scaling, disaster recovery',
      cacheTitle: 'Cache Strategy',
      cacheItems: [
        'Edge CDN + Cache-Control: Based on HTTP standard (RFC 9111)',
        'ISR/SSG: Refresh pages without full rebuild; use revalidateTag for precision',
        'Headless CMS CDN: Design purge policy + API rate limit together at publish time',
        'CSP/SRI: Control third-party scripts — block inline, verify with integrity hash',
      ],
      dbTitle: 'DB Scaling',
      dbItems: [
        'Read Replica: Route public queries (published) to replica — establish cache policy first',
        'Sharding: For multi-tenant, shard by tenant_id — revisions/comments must move together',
        'Media: Object storage (S3) instead of DB + presigned URL upload',
      ],
      rtoTitle: 'Disaster Recovery Targets (Example)',
      rtoHeaders: ['Component', 'RTO', 'RPO'],
      rtoRows: [
        { component: 'Content DB', rto: '1-4 hours', rpo: '5-15 min' },
        { component: 'Media Storage', rto: '1-4 hours', rpo: '15-60 min' },
        { component: 'Cache/Search Index', rto: 'Minutes to 1 hour', rpo: 'Rebuildable' },
      ],
      rtoNote: 'These values are starting points. Adjust based on your team\'s operations policy and budget.',
    },
  };
  const t = copy[locale];

  const sectionColors = { cache: '#0ea5e9', db: '#6366f1', rto: '#8b5cf6' };

  return (
    <SlideWrapper slideNumber={20}>
      <div className="cms-scroll-region" style={{ width: '100%', maxWidth: '1100px', zIndex: 1 }} data-prevent-swipe="" data-slide-scroll-region="true">
        <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 800, textAlign: 'center', marginBottom: '12px' }}>
          <GradientText>{t.title}</GradientText>
        </h2>
        <p style={{ textAlign: 'center', color: '#7dd3fc', marginBottom: '28px', fontSize: '1rem' }}>
          {t.subtitle}
        </p>

        {/* 3 section cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px' }}>
          {/* Cache Strategy */}
          <div className="card" style={{ borderColor: `${sectionColors.cache}44`, padding: '16px 18px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: sectionColors.cache, boxShadow: `0 0 8px ${sectionColors.cache}` }} />
              <span style={{ fontWeight: 700, color: sectionColors.cache, fontSize: '0.9rem' }}>{t.cacheTitle}</span>
            </div>
            {t.cacheItems.map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '8px', marginBottom: '10px', alignItems: 'flex-start' }}>
                <span style={{ color: sectionColors.cache, flexShrink: 0, fontSize: '0.7rem', marginTop: '2px' }}>●</span>
                <span style={{ color: '#f0f9ff', fontSize: '0.78rem', lineHeight: 1.5 }}>{item}</span>
              </div>
            ))}
          </div>

          {/* DB Scaling */}
          <div className="card" style={{ borderColor: `${sectionColors.db}44`, padding: '16px 18px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: sectionColors.db, boxShadow: `0 0 8px ${sectionColors.db}` }} />
              <span style={{ fontWeight: 700, color: sectionColors.db, fontSize: '0.9rem' }}>{t.dbTitle}</span>
            </div>
            {t.dbItems.map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '8px', marginBottom: '10px', alignItems: 'flex-start' }}>
                <span style={{ color: sectionColors.db, flexShrink: 0, fontSize: '0.7rem', marginTop: '2px' }}>●</span>
                <span style={{ color: '#f0f9ff', fontSize: '0.78rem', lineHeight: 1.5 }}>{item}</span>
              </div>
            ))}
          </div>

          {/* RTO/RPO */}
          <div className="card" style={{ borderColor: `${sectionColors.rto}44`, padding: '16px 18px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: sectionColors.rto, boxShadow: `0 0 8px ${sectionColors.rto}` }} />
              <span style={{ fontWeight: 700, color: sectionColors.rto, fontSize: '0.9rem' }}>{t.rtoTitle}</span>
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.76rem', marginBottom: '12px' }}>
              <thead>
                <tr>
                  {t.rtoHeaders.map((h) => (
                    <th key={h} style={{ padding: '6px 8px', textAlign: 'left', fontWeight: 700, color: '#7dd3fc', borderBottom: '1px solid rgba(255,255,255,0.12)', fontSize: '0.72rem' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {t.rtoRows.map((row, ri) => (
                  <tr key={ri}>
                    <td style={{ padding: '6px 8px', color: '#f0f9ff', fontWeight: 600, borderBottom: '1px solid rgba(255,255,255,0.06)' }}>{row.component}</td>
                    <td style={{ padding: '6px 8px', color: '#f0f9ff', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>{row.rto}</td>
                    <td style={{ padding: '6px 8px', color: '#f0f9ff', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>{row.rpo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p style={{ color: '#7dd3fc', fontSize: '0.74rem', lineHeight: 1.4, margin: 0 }}>{t.rtoNote}</p>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
