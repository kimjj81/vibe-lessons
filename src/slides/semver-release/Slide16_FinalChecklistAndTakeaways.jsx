import { useLocale } from '../../i18n/LocaleContext';
import { BulletList, SectionCard, SemverSlide } from './SemverReleaseShared';

export default function Slide16_FinalChecklistAndTakeaways() {
  const { locale } = useLocale();
  const copy = {
    ko: {
      kicker: 'wrap-up',
      title: 'Final Checklist and Takeaways',
      subtitle: '이 강의를 끝까지 따라가면 release truth, repo boundary, verification 기준을 한 문장으로 설명할 수 있어야 합니다.',
      checklistTitle: '운영 원칙 5개',
      checklist: [
        'GitHub Release를 canonical source로 둔다.',
        'stable / beta / rc 정책을 태그 단계에서 명확히 분리한다.',
        'draft release에서 notes와 publish를 분리한다.',
        'homepage repo는 published stable release만 소비한다.',
        'workflow 성공이 아니라 user-visible state까지 검증한다.',
      ],
      nextTitle: '이 덱 다음 구현 과제',
      next: [
        '실제 source repo에 release workflow를 붙이기',
        'homepage repo에서 Astro content import 경로를 제품별로 연결하기',
        'first stable release를 발행하고 no-op rerun까지 검증하기',
      ],
      closing: '핵심 메시지: 자동화는 스크립트 묶음이 아니라, 공개 릴리스의 truth를 어디에 두고 어떤 경계로 전파할지 결정하는 운영 설계입니다.',
    },
    en: {
      kicker: 'wrap-up',
      title: 'Final Checklist and Takeaways',
      subtitle: 'By the end of this deck, you should be able to explain release truth, repo boundaries, and verification criteria in one clean sentence.',
      checklistTitle: 'Five operating rules',
      checklist: [
        'Keep GitHub Release as the canonical source.',
        'Separate stable / beta / rc policy at the tag stage.',
        'Separate notes preparation from final publish through draft releases.',
        'Let the homepage repo consume published stable releases only.',
        'Verify user-visible state, not just workflow success.',
      ],
      nextTitle: 'What to implement next',
      next: [
        'Attach the release workflow to a real source repo',
        'Connect the Astro content import path in the homepage repo',
        'Ship a first stable release and verify the no-op rerun path',
      ],
      closing: 'Core message: automation is not just a pile of scripts; it is an operating design that decides where release truth lives and how it propagates safely.',
    },
  };
  const t = copy[locale];

  return (
    <SemverSlide kicker={t.kicker} slideNumber={16} subtitle={t.subtitle} title={t.title}>
      <div style={{ display: 'grid', gap: '18px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '18px' }}>
          <SectionCard color="#5eead4" title={t.checklistTitle}>
            <BulletList accent="#5eead4" items={t.checklist} textColor="#d1fae5" />
          </SectionCard>
          <SectionCard color="#facc15" title={t.nextTitle}>
            <BulletList accent="#facc15" items={t.next} textColor="#fef3c7" />
          </SectionCard>
        </div>
        <div
          style={{
            padding: '20px 22px',
            borderRadius: '20px',
            background: 'linear-gradient(135deg, rgba(6,182,212,0.15), rgba(132,204,22,0.15))',
            border: '1px solid rgba(125, 211, 252, 0.16)',
            color: '#ecfeff',
            fontSize: '0.95rem',
            lineHeight: 1.7,
            textAlign: 'center',
            fontWeight: 700,
          }}
        >
          {t.closing}
        </div>
      </div>
    </SemverSlide>
  );
}
