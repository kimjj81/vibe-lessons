import { useLocale } from '../../i18n/LocaleContext';
import { BulletList, SectionCard, SemverSlide } from './SemverReleaseShared';

export default function Slide02_WhyThisPipelineExists() {
  const { locale } = useLocale();
  const copy = {
    ko: {
      kicker: 'why',
      title: '왜 이 파이프라인이 필요한가',
      subtitle: '배포 자동화와 홈페이지 반영을 따로 관리하면 release truth가 빠르게 흐려집니다.',
      painTitle: '분리 운영에서 생기는 문제',
      painItems: [
        'GitHub Release, 제품 페이지, 문서가 서로 다른 release notes를 들고 움직이기 쉽습니다.',
        '앱 저장소가 homepage 저장소를 직접 수정하기 시작하면 권한과 실패 지점이 한데 엉킵니다.',
        'published stable release와 prerelease의 경계가 흐려지면 사용자에게 내부 상태가 보일 수 있습니다.',
      ],
      principleTitle: '이 강의의 해결 원칙',
      principleItems: [
        'GitHub Release를 공개 릴리스의 canonical source로 둡니다.',
        'homepage repo는 release를 편집하지 않고 소비자 역할만 맡습니다.',
        'generated notes를 기본값으로 두고, LLM polishing은 선택적 후처리로만 붙입니다.',
      ],
    },
    en: {
      kicker: 'why',
      title: 'Why this pipeline exists',
      subtitle: 'When deployment automation and homepage publishing are managed separately, release truth drifts fast.',
      painTitle: 'Problems in split operations',
      painItems: [
        'GitHub Release, the product page, and docs can all end up carrying different release notes.',
        'Once the app repo edits homepage files directly, permissions and failure points become tangled.',
        'If stable and prerelease boundaries blur, internal release state can leak to end users.',
      ],
      principleTitle: 'The design principles here',
      principleItems: [
        'Treat GitHub Release as the canonical source of public release state.',
        'Keep the homepage repo as a consumer, not a release editor.',
        'Use generated notes as the baseline and keep LLM polishing optional.',
      ],
    },
  };
  const t = copy[locale];

  return (
    <SemverSlide kicker={t.kicker} slideNumber={2} subtitle={t.subtitle} title={t.title}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '18px' }}>
        <SectionCard color="#fb7185" title={t.painTitle}>
          <BulletList accent="#fb7185" items={t.painItems} textColor="#ffe4e6" />
        </SectionCard>
        <SectionCard color="#5eead4" title={t.principleTitle}>
          <BulletList accent="#5eead4" items={t.principleItems} textColor="#d1fae5" />
        </SectionCard>
      </div>
    </SemverSlide>
  );
}
