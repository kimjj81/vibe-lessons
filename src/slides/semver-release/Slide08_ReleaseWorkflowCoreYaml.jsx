import { useLocale } from '../../i18n/LocaleContext';
import { CodeExcerptCard, SemverSlide, codeSamples } from './SemverReleaseShared';

const excerpt = `on:
  push:
    tags:
      - "v*"
  workflow_dispatch:
    inputs:
      tag_name: ...

jobs:
  tag_gate:
    outputs:
      is_release: ...
      is_prerelease: ...

  prepare_release:
    if: needs.tag_gate.outputs.is_release == 'true'

  publish_release:
    needs: [tag_gate, prepare_release]`;

export default function Slide08_ReleaseWorkflowCoreYaml() {
  const { locale } = useLocale();
  const copy = {
    ko: {
      kicker: 'yaml',
      title: 'Release Workflow Core YAML',
      subtitle: '슬라이드에서는 구조만 읽고, 전체 YAML은 모달에서 스크롤로 확인합니다.',
      notes: [
        '`push.tags: ["v*"]`로 넓게 받되 실제 판정은 `tag_gate`에서 수행합니다.',
        '`prepare_release`는 draft release를 만들고, `publish_release`는 마지막 공개 단계만 담당합니다.',
        '`workflow_dispatch`는 recovery 경로를 열어 주되 기본 경로와 분리해 둡니다.',
      ],
      modalTitle: 'Release workflow 전체 YAML',
      modalDescription: 'SemVer tag gate, draft release 생성, publish 단계까지 포함한 전체 release workflow 예시입니다.',
    },
    en: {
      kicker: 'yaml',
      title: 'Release Workflow Core YAML',
      subtitle: 'Read the shape on the slide first, then use the modal to inspect the full YAML with scroll.',
      notes: [
        'Receive a broad `v*` tag range, then perform the actual classification inside `tag_gate`.',
        '`prepare_release` owns draft creation, while `publish_release` owns the final visibility change only.',
        '`workflow_dispatch` keeps recovery explicit instead of blending it into the default publish path.',
      ],
      modalTitle: 'Full release workflow YAML',
      modalDescription: 'A fuller release workflow example covering the SemVer gate, draft creation, and final publish.',
    },
  };
  const t = copy[locale];

  return (
    <SemverSlide kicker={t.kicker} slideNumber={8} subtitle={t.subtitle} title={t.title}>
      <CodeExcerptCard
        excerpt={excerpt}
        language="YAML"
        modal={{
          content: codeSamples.releaseWorkflow,
          description: t.modalDescription,
          kicker: 'workflow',
          language: 'YAML',
          title: t.modalTitle,
        }}
        notes={t.notes}
        title={locale === 'ko' ? '핵심 구조 발췌' : 'Core structure excerpt'}
      />
    </SemverSlide>
  );
}
