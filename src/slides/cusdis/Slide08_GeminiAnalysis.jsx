import { useLocale } from '../../i18n/LocaleContext';
import { cusdisAssets } from './assets';
import { CodeCard, CusdisSlide, MediaCard } from './CusdisShared';

const prompts = {
  ko: `당신은 블로그 주인을 돕는 AI 비서입니다.
다음 댓글을 읽고 스팸인지 판별한 후, 정상적인 댓글이라면 감사의 답글을 작성해 주세요. (답글은 친절하게 댓글 언어에 맞춰서 1~2문장으로 작성할 것)
댓글 내용: "{{ $json.body.data.content }}"

[출력 규칙]
반드시 아래의 구조를 가진 순수한 JSON 객체 하나만 출력하세요. 마크다운으로 감싸지 마세요.

댓글 내용: "{{ $json.body.data.content }}"

[출력 규칙]
1. 어떠한 설명이나 마크다운 백틱(\`\`\`) 기호 없이 오직 JSON(rfc8259) 포맷만을 반환하세요.
2. 아래의 JSON 스키마를 정확히 준수하세요.
{
  "result": "NORMAL" 또는 "SPAM",
  "reply": "작성한 답글 내용 (SPAM인 경우 빈 문자열)",
  "approved_link": "{{ $json.body.data.approve_link }}"
}`,
  en: `You are an AI assistant helping the blog owner.
Read the comment below, decide whether it is spam, and if it is a normal comment, write a short thank-you reply. (The reply should be friendly, 1-2 sentences long, and match the language of the comment.)
Comment: "{{ $json.body.data.content }}"

[Output rules]
Return exactly one pure JSON object with the structure below. Do not wrap it in Markdown.

Comment: "{{ $json.body.data.content }}"

[Output rules]
1. Return only JSON (rfc8259), with no explanation and no markdown fences.
2. Follow the JSON schema below exactly.
{
  "result": "NORMAL" or "SPAM",
  "reply": "The drafted reply text (empty string for SPAM)",
  "approved_link": "{{ $json.body.data.approve_link }}"
}`,
};

export default function Slide08_GeminiAnalysis() {
  const { locale } = useLocale();
  const copy = {
    ko: {
      kicker: 'n8n workflow · 2 / 6',
      title: 'Gemini Analysis 노드 — 스팸 판별 및 답글 생성',
      subtitle: '핵심은 LLM 출력 형식을 프롬프트에 정의하는 것이다.',
      createCaption: '1 Gemini Message 노드 추가',
      settingCaption: '2 모델 / 프롬프트 / JSON 출력 설정',
      notes: [
        '다른 AI 를 사용해도 되지만 소량 운영이면, Google AI Studio에서 제공하는 무료 용량으로 가능 할 것이다.',
        '모델 선택은 `gemini-2.5-flash-lite`으로 한다. 무료 사용량이 넉넉하고 우리가 필요한 기능도 적절하게 다룰 수 있는 정도이다.',
        '`Simplify Output`과 `Output Content as JSON`을 모두 켜야 다음 노드가 단순해진다',
        '스크린샷의 모델 표기는 오래됐을 수 있으니 실제 선택 목록을 기준으로 본다',
      ],
      codeTitle: '한국어 프롬프트',
    },
    en: {
      kicker: 'n8n workflow · 2 / 6',
      title: 'Gemini Analysis Node — spam detection and reply drafting',
      subtitle: 'The important part is constraining the model to return a clean JSON contract.',
      createCaption: '1 Adding the Gemini Message node',
      settingCaption: '2 Model, prompt, and JSON output settings',
      notes: [
        'Create credentials with an API key from Google AI Studio',
        'Recommend the current stable model code `gemini-2.5-flash-lite`',
        'Turn on both `Simplify Output` and `Output Content as JSON` so the next node stays simple',
        'The screenshot may show an older model name, so trust the live model picker in the UI',
      ],
      codeTitle: 'English prompt',
    },
  };
  const t = copy[locale];

  return (
    <CusdisSlide
      slideNumber={8}
      kicker={t.kicker}
      title={t.title}
      subtitle={t.subtitle}
      sources={[
        { label: 'n8n Gemini docs', href: 'https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatgooglegemini/' },
        { label: 'Google AI Studio', href: 'https://aistudio.google.com/api-keys' },
        { label: 'Gemini models', href: 'https://ai.google.dev/gemini-api/docs/models/gemini' },
      ]}
    >
      <div className="cusdis-asymmetric-layout">
        <div className="cusdis-editorial-stack">
          <MediaCard src={cusdisAssets.createGeminiNode} alt={t.createCaption} title={t.createCaption} />
          <div className="cusdis-callout">
            <ul className="cusdis-bullet-list tight">
              {t.notes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="cusdis-editorial-stack">
          <MediaCard src={cusdisAssets.geminiSetting} alt={t.settingCaption} title={t.settingCaption} />
          <CodeCard title={t.codeTitle} code={prompts[locale]} />
        </div>
      </div>
    </CusdisSlide>
  );
}
