import { useLocale } from '../../i18n/LocaleContext';
import { OpenModalButton, SemverSlide, TableBlock, codeSamples } from './SemverReleaseShared';

export default function Slide15_EndToEndVerification() {
  const { locale } = useLocale();
  const copy = {
    ko: {
      kicker: 'verify',
      title: 'End-to-End Verification',
      subtitle: 'workflow가 green이라는 사실과 사용자가 최신 release를 실제로 본다는 사실은 다릅니다.',
      headers: ['검증 층위', '직접 확인할 것', '성공 기준'],
      rows: [
        ['release workflow', 'SemVer 분류, draft -> publish 순서', 'stable 태그만 intended path를 따라감'],
        ['GitHub Release 상태', 'title/body, draft=false, prerelease 여부', '최종 release body가 canonical source로 남음'],
        ['homepage import', '생성된 markdown 경로, build, commit', 'stable release 한 건이 정확한 위치에 반영됨'],
        ['제품 페이지', '최신 release 노출, no-op 재실행', '사용자가 실제 최신 상태를 볼 수 있음'],
      ],
      note: '실전 명령은 슬라이드 본문에 다 넣지 않고, 발표 중 필요할 때 모달로 전체를 열어 보는 패턴이 더 적합합니다.',
      modalTitle: 'Verification commands 전체 예시',
      modalDescription: 'release publish와 homepage import를 사람이 점검할 때 자주 쓰는 GitHub CLI / shell 명령 묶음입니다.',
    },
    en: {
      kicker: 'verify',
      title: 'End-to-End Verification',
      subtitle: 'A green workflow run is not the same thing as a user actually seeing the latest release state.',
      headers: ['Layer', 'What to inspect directly', 'Success signal'],
      rows: [
        ['release workflow', 'SemVer classification and draft -> publish order', 'Only stable tags follow the intended public path'],
        ['GitHub Release state', 'title/body, draft=false, prerelease state', 'The final release body remains the canonical source'],
        ['homepage import', 'generated markdown path, build, commit', 'Exactly one stable release lands in the correct location'],
        ['product page', 'latest release visibility and no-op reruns', 'Users can actually see the latest state'],
      ],
      note: 'The command list is better kept in a modal than crammed into the main slide body.',
      modalTitle: 'Full verification command set',
      modalDescription: 'A compact command set for manually checking release publish and homepage import.',
    },
  };
  const t = copy[locale];

  return (
    <SemverSlide kicker={t.kicker} slideNumber={15} subtitle={t.subtitle} title={t.title}>
      <div style={{ display: 'grid', gap: '18px' }}>
        <TableBlock headers={t.headers} rows={t.rows} leadWidth="17%" />
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '18px',
            padding: '16px 18px',
            borderRadius: '16px',
            background: 'rgba(15, 23, 42, 0.58)',
            border: '1px solid rgba(125, 211, 252, 0.16)',
          }}
        >
          <p style={{ color: '#cffafe', fontSize: '0.86rem', lineHeight: 1.55, flex: 1 }}>{t.note}</p>
          <OpenModalButton
            label={locale === 'ko' ? '검증 명령 전체 보기' : 'Open verification commands'}
            modal={{
              content: codeSamples.verificationCommands,
              description: t.modalDescription,
              kicker: 'bash',
              language: 'bash',
              title: t.modalTitle,
            }}
          />
        </div>
      </div>
    </SemverSlide>
  );
}
