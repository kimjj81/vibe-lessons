import { useLocale } from '../../i18n/LocaleContext';
import { BulletList, SectionCard, SemverSlide } from './SemverReleaseShared';

export default function Slide12_CrossRepoSyncArchitecture() {
  const { locale } = useLocale();
  const copy = {
    ko: {
      kicker: 'boundary',
      title: 'Cross-Repo Sync Architecture',
      subtitle: 'source repo와 homepage repo가 서로의 파일을 직접 만지지 않는 경계를 먼저 고정합니다.',
      sourceTitle: 'source repo가 맡는 일',
      sourceItems: [
        'SemVer tag policy와 release workflow 실행',
        'draft -> notes -> publish로 release state를 완성',
        'homepage repo workflow를 dispatch로 깨우기',
      ],
      homeTitle: 'homepage repo가 맡는 일',
      homeItems: [
        'published stable release를 조회',
        'Astro content markdown 생성',
        'build, commit, no-op rerun까지 자기 workflow 안에서 처리',
      ],
      caution: locale === 'ko'
        ? '필수 경계: source repo는 homepage 파일을 직접 커밋하지 않습니다.'
        : 'Required boundary: the source repo never commits homepage files directly.',
    },
    en: {
      kicker: 'boundary',
      title: 'Cross-Repo Sync Architecture',
      subtitle: 'Fix the repo boundary first so the source repo and homepage repo never act as co-editors of the same files.',
      sourceTitle: 'What the source repo owns',
      sourceItems: [
        'SemVer tag policy and release workflow execution',
        'Complete release state through draft -> notes -> publish',
        'Trigger the homepage workflow through dispatch',
      ],
      homeTitle: 'What the homepage repo owns',
      homeItems: [
        'Fetch the published stable release',
        'Generate Astro content markdown',
        'Handle build, commit, and no-op reruns inside its own workflow',
      ],
      caution: 'Required boundary: the source repo never commits homepage files directly.',
    },
  };
  const t = copy[locale];

  return (
    <SemverSlide kicker={t.kicker} slideNumber={12} subtitle={t.subtitle} title={t.title}>
      <div style={{ display: 'grid', gap: '18px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 120px 1fr', gap: '18px', alignItems: 'stretch' }}>
          <SectionCard color="#67e8f9" title={t.sourceTitle}>
            <BulletList accent="#67e8f9" items={t.sourceItems} textColor="#e0f2fe" />
          </SectionCard>
          <div
            style={{
              display: 'grid',
              placeItems: 'center',
              borderRadius: '20px',
              border: '1px solid rgba(148,163,184,0.16)',
              background: 'rgba(15, 23, 42, 0.52)',
              color: '#94a3b8',
              fontWeight: 800,
              fontSize: '0.88rem',
              textAlign: 'center',
              lineHeight: 1.5,
            }}
          >
            dispatch
            <br />
            ↓
            <br />
            release fetch
          </div>
          <SectionCard color="#84cc16" title={t.homeTitle}>
            <BulletList accent="#84cc16" items={t.homeItems} textColor="#ecfccb" />
          </SectionCard>
        </div>
        <div
          style={{
            padding: '14px 18px',
            borderRadius: '16px',
            background: 'rgba(113, 63, 18, 0.34)',
            border: '1px solid rgba(250, 204, 21, 0.18)',
            color: '#fef3c7',
            textAlign: 'center',
            fontSize: '0.9rem',
            fontWeight: 700,
          }}
        >
          {t.caution}
        </div>
      </div>
    </SemverSlide>
  );
}
