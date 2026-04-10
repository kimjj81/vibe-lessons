import { useLocale } from '../../i18n/LocaleContext';
import { BulletList, CodeExcerptCard, OpenModalButton, SectionCard, SemverSlide, codeSamples } from './SemverReleaseShared';

const excerpt = `const prompt = [
  "You are preparing release notes for end users.",
  "Rewrite the input into concise Markdown.",
  "Rules:",
  "- Keep factual accuracy.",
  "- Start with a one-paragraph summary.",
  "- Then use sections: Highlights, Fixes, Notes.",
  "- Do not invent features that are not present.",
  "- Keep version number exactly as given.",
].join("\\n");`;

export default function Slide11_LlmPromptAndScriptBoundary() {
  const { locale } = useLocale();
  const copy = {
    ko: {
      kicker: 'prompt',
      title: 'LLM Prompt and Script Boundary',
      subtitle: '프롬프트는 사실 제약을 걸고, 스크립트는 release body를 다시 GitHub에 PATCH하는 역할로 나눕니다.',
      rulesTitle: '프롬프트가 맡는 일',
      rules: [
        '사실 추가 금지',
        'Markdown 구조 강제',
        'Version / links / identifiers 보존',
        '사용자-facing 문체로만 재서술',
        '입력 원문이 generated notes임을 명시',
      ],
      modalPromptTitle: 'Polishing prompt 전체 내용',
      modalPromptDescription: 'release notes를 LLM으로 다듬을 때 쓰는 전체 프롬프트 예시입니다.',
      modalScriptTitle: 'Polishing script 전체 내용',
      modalScriptDescription: 'generated notes 조회, LLM 호출, PATCH back to release까지 포함한 전체 스크립트입니다.',
    },
    en: {
      kicker: 'prompt',
      title: 'LLM Prompt and Script Boundary',
      subtitle: 'The prompt enforces factual rules, while the script owns the PATCH back into the GitHub Release body.',
      rulesTitle: 'What the prompt owns',
      rules: [
        'No invented facts',
        'Explicit Markdown structure',
        'Preserve version / links / identifiers',
        'Rewrite only into a more user-facing voice',
        'State clearly that the source is generated notes',
      ],
      modalPromptTitle: 'Full polishing prompt',
      modalPromptDescription: 'The full prompt example used when polishing release notes with an LLM.',
      modalScriptTitle: 'Full polishing script',
      modalScriptDescription: 'The full script covering generated-note fetch, LLM call, and PATCH back into the release.',
    },
  };
  const t = copy[locale];

  return (
    <SemverSlide kicker={t.kicker} slideNumber={11} subtitle={t.subtitle} title={t.title}>
      <div style={{ display: 'grid', gridTemplateColumns: '0.85fr 1.15fr', gap: '18px' }}>
        <SectionCard color="#5eead4" title={t.rulesTitle}>
          <BulletList accent="#5eead4" items={t.rules} textColor="#d1fae5" />
          <div style={{ marginTop: '16px' }}>
            <OpenModalButton
              label={locale === 'ko' ? '전체 프롬프트 보기' : 'Open full prompt'}
              modal={{
                content: codeSamples.llmPrompt,
                description: t.modalPromptDescription,
                kicker: 'prompt',
                language: 'text',
                title: t.modalPromptTitle,
              }}
            />
          </div>
        </SectionCard>
        <CodeExcerptCard
          excerpt={excerpt}
          language="JavaScript"
          modal={{
            content: codeSamples.llmPolishScript,
            description: t.modalScriptDescription,
            kicker: 'script',
            language: 'JavaScript',
            title: t.modalScriptTitle,
          }}
          notes={[
            locale === 'ko'
              ? 'LLM은 generated notes를 읽고 더 읽기 쉬운 Markdown으로 재정리할 뿐입니다.'
              : 'The LLM only rewrites generated notes into cleaner Markdown.',
            locale === 'ko'
              ? '스크립트는 최종 body를 다시 GitHub Release에 PATCH해 canonical source를 유지합니다.'
              : 'The script PATCHes the final body back into GitHub Release so the canonical source stays in one place.',
          ]}
          title={locale === 'ko' ? '스크립트 핵심 발췌' : 'Core script excerpt'}
        />
      </div>
    </SemverSlide>
  );
}
