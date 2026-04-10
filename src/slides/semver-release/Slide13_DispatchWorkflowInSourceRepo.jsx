import { useLocale } from '../../i18n/LocaleContext';
import { CodeExcerptCard, SemverSlide, codeSamples } from './SemverReleaseShared';

const excerpt = `on:
  release:
    types:
      - published
  workflow_dispatch:
    inputs:
      tag_name: ...

jobs:
  dispatch_release_notes:
    if: github.event_name != 'release' || github.event.release.prerelease == false
    steps:
      - name: Resolve published stable release tag
      - name: Dispatch homepage workflow`;

export default function Slide13_DispatchWorkflowInSourceRepo() {
  const { locale } = useLocale();
  const copy = {
    ko: {
      kicker: 'dispatch',
      title: 'Dispatch Workflow in Source Repo',
      subtitle: 'publish 이후에는 stable release만 homepage workflow를 깨우도록 guard를 둡니다.',
      notes: [
        '`release: published`와 manual replay를 같은 workflow 안에서 다룹니다.',
        'manual replay도 published stable release인지 다시 조회해서 확인합니다.',
        'dispatch token은 workflow 실행 요청만 하고, homepage content는 직접 쓰지 않습니다.',
      ],
      modalTitle: 'Source dispatch workflow 전체 YAML',
      modalDescription: 'stable-only guard와 manual replay 검증까지 포함한 source repo dispatch workflow 예시입니다.',
    },
    en: {
      kicker: 'dispatch',
      title: 'Dispatch Workflow in Source Repo',
      subtitle: 'After publish, add a guard so that only stable releases trigger the homepage workflow.',
      notes: [
        'The same workflow can cover both `release: published` and manual replay.',
        'Manual replay should still re-check that the tag points to a published stable release.',
        'The dispatch token requests execution only and never writes homepage content directly.',
      ],
      modalTitle: 'Full source dispatch workflow YAML',
      modalDescription: 'A source-repo dispatch workflow example including stable-only guards and manual replay validation.',
    },
  };
  const t = copy[locale];

  return (
    <SemverSlide kicker={t.kicker} slideNumber={13} subtitle={t.subtitle} title={t.title}>
      <CodeExcerptCard
        excerpt={excerpt}
        language="YAML"
        modal={{
          content: codeSamples.sourceDispatchWorkflow,
          description: t.modalDescription,
          kicker: 'dispatch',
          language: 'YAML',
          title: t.modalTitle,
        }}
        notes={t.notes}
        title={locale === 'ko' ? '핵심 dispatch 구조' : 'Core dispatch structure'}
      />
    </SemverSlide>
  );
}
