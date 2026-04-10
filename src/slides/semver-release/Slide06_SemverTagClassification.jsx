import { useLocale } from '../../i18n/LocaleContext';
import { SemverSlide, TableBlock } from './SemverReleaseShared';

export default function Slide06_SemverTagClassification() {
  const { locale } = useLocale();
  const copy = {
    ko: {
      kicker: 'policy',
      title: 'SemVer Tag Classification',
      subtitle: 'SemVer 자동화의 핵심은 `v*`를 전부 같은 release로 취급하지 않는 데 있습니다.',
      headers: ['타입', '정규식 / 예시', '기본 처리'],
      rows: [
        ['stable', '`^v[0-9]+\\.[0-9]+\\.[0-9]+$`\n예: `v1.4.8`', 'draft -> notes 정리 -> publish -> homepage sync'],
        ['beta', '`^v[0-9]+\\.[0-9]+\\.[0-9]+-beta(\\.[0-9]+)?$`\n예: `v1.4.8-beta.1`', 'prerelease 유지, homepage 공개 반영은 보통 제외'],
        ['rc', '`^v[0-9]+\\.[0-9]+\\.[0-9]+-rc([0-9]+|\\.[0-9]+)?$`\n예: `v1.4.8-rc1`', 'prerelease 유지, stable 직전 검증 단계로 사용'],
      ],
      takeaway: '태그 정책이 느슨하면 release workflow와 homepage sync 정책이 뒤에서 모두 흔들립니다.',
    },
    en: {
      kicker: 'policy',
      title: 'SemVer Tag Classification',
      subtitle: 'The key to SemVer automation is refusing to treat every `v*` tag as the same release type.',
      headers: ['Type', 'Regex / example', 'Default handling'],
      rows: [
        ['stable', '`^v[0-9]+\\.[0-9]+\\.[0-9]+$`\nex: `v1.4.8`', 'draft -> note prep -> publish -> homepage sync'],
        ['beta', '`^v[0-9]+\\.[0-9]+\\.[0-9]+-beta(\\.[0-9]+)?$`\nex: `v1.4.8-beta.1`', 'keep as prerelease, usually exclude from homepage publishing'],
        ['rc', '`^v[0-9]+\\.[0-9]+\\.[0-9]+-rc([0-9]+|\\.[0-9]+)?$`\nex: `v1.4.8-rc1`', 'keep as prerelease, use as a final validation stage before stable'],
      ],
      takeaway: 'If tag policy is loose, both release workflow policy and homepage-sync policy become unstable.',
    },
  };
  const t = copy[locale];

  return (
    <SemverSlide kicker={t.kicker} slideNumber={6} subtitle={t.subtitle} title={t.title}>
      <div style={{ display: 'grid', gap: '18px' }}>
        <TableBlock headers={t.headers} rows={t.rows} leadWidth="14%" />
        <div
          style={{
            padding: '14px 18px',
            borderRadius: '16px',
            background: 'rgba(15, 23, 42, 0.58)',
            border: '1px solid rgba(103, 232, 249, 0.18)',
            color: '#cffafe',
            fontSize: '0.88rem',
            lineHeight: 1.55,
            textAlign: 'center',
          }}
        >
          {t.takeaway}
        </div>
      </div>
    </SemverSlide>
  );
}
