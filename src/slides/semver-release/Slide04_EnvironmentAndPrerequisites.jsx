import { useLocale } from '../../i18n/LocaleContext';
import { SectionCard, SemverSlide } from './SemverReleaseShared';

export default function Slide04_EnvironmentAndPrerequisites() {
  const { locale } = useLocale();
  const copy = {
    ko: {
      kicker: 'setup',
      title: 'Environment and Prerequisites',
      subtitle: '실습은 source repo와 homepage repo를 동시에 보는 편이 가장 빠릅니다.',
      cards: [
        ['Source repo', 'GitHub Release와 build artifact를 만드는 기준 저장소'],
        ['Homepage repo', 'published stable release를 Astro content로 가져와 빌드하는 소비자 저장소'],
        ['CLI literacy', 'GitHub CLI, shell, env var, secret, token 의미를 읽을 수 있어야 함'],
        ['Astro baseline', '정적 content 파일을 읽어 페이지가 빌드된다는 감각 정도면 충분'],
      ],
    },
    en: {
      kicker: 'setup',
      title: 'Environment and Prerequisites',
      subtitle: 'The fastest practice path is to keep the source repo and homepage repo visible side by side.',
      cards: [
        ['Source repo', 'The source of release creation, artifacts, and public release state'],
        ['Homepage repo', 'The consumer repo that imports published stable releases into Astro content'],
        ['CLI literacy', 'You should be able to read GitHub CLI commands, env vars, secrets, and tokens'],
        ['Astro baseline', 'It is enough to understand that static pages are built from content files'],
      ],
    },
  };
  const t = copy[locale];

  return (
    <SemverSlide kicker={t.kicker} slideNumber={4} subtitle={t.subtitle} title={t.title}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '18px' }}>
        {t.cards.map((card, index) => (
          <SectionCard color={index < 2 ? '#5eead4' : '#67e8f9'} key={card[0]} title={card[0]}>
            <p style={{ color: '#e6fffb', fontSize: '0.88rem', lineHeight: 1.55 }}>{card[1]}</p>
          </SectionCard>
        ))}
      </div>
    </SemverSlide>
  );
}
