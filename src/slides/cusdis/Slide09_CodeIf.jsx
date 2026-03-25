import { useLocale } from '../../i18n/LocaleContext';
import { cusdisAssets } from './assets';
import { CodeCard, CusdisSlide, MediaCard } from './CusdisShared';

const codeExample = [
  'for (const item of $input.all()) {',
  '  try {',
  '    // Result from gemini : $json.content.parts[0].text',
  '    let rawText = item.json.content.parts[0].text;',
  '',
  '    // 2. Remove markdown letters and trim',
  '    rawText = rawText.replace(/```json/g, "").replace(/```/g, "").trim();',
  '',
  '    const parsedData = JSON.parse(rawText);',
  '    const originalLink = parsedData.approved_link;',
  '    const apiLink = originalLink.replace("/open/approve", "/api/open/approve");',
  '    item.json.ai_result = parsedData.result;',
  '    item.json.ai_reply = parsedData.reply;',
  '    item.json.ai_api_link = apiLink;',
  '    item.json.ai_approve_link = parsedData.approved_link;',
  '',
  '  } catch (error) {',
  '    item.json.ai_result = "ERROR";',
  '    item.json.ai_approve_link = "";',
  '  }',
  '}',
  'return $input.all();',
].join('\n');

export default function Slide09_CodeIf() {
  const { locale } = useLocale();
  const copy = {
    ko: {
      kicker: 'n8n workflow · 3 / 6',
      title: 'Code 노드 — Gemini 결과를 JavaScript로 정리',
      subtitle: 'self-host에서 추가 셋업이 덜한 JavaScript를 선택하면 속도가 빠르다. 파싱 실패는 `ERROR`로 흡수한다.',
      createCaption: 'Code 노드 추가',
      settingCaption: 'Run once for all items / JavaScript 설정',
      notes: [
        '`Run once for all items` 모드에서 Gemini 출력 전체를 순회한다',
        'markdown fence를 제거하고 JSON.parse로 결과를 검증한다',
        'javascript 코드를 복사해서 붙여넣기 하면 된다',
      ],
      codeTitle: 'JavaScript 후처리',
    },
    en: {
      kicker: 'n8n workflow · 3 / 6',
      title: 'Code Node — clean up Gemini output with JavaScript',
      subtitle: 'JavaScript avoids extra Python setup on a self-hosted box. Parse failures are intentionally absorbed as `ERROR`.',
      createCaption: '1. Adding the Code node',
      settingCaption: '2. Run once for all items / JavaScript settings',
      notes: [
        'Use `Run once for all items` to loop through the Gemini output payload',
        'Strip markdown fences and verify the result with `JSON.parse`',
        'Copy & past "JavaScript post-processing"',
      ],
      codeTitle: 'JavaScript post-processing',
    },
  };
  const t = copy[locale];

  return (
    <CusdisSlide
      slideNumber={9}
      kicker={t.kicker}
      title={t.title}
      subtitle={t.subtitle}
    >
      <div className="cusdis-asymmetric-layout">

        <div className="cusdis-editorial-stack">
          <div className="cusdis-image-wall">
            <MediaCard src={cusdisAssets.createCode} alt={t.createCaption} title={t.createCaption} />
            <MediaCard src={cusdisAssets.codeSetting} alt={t.settingCaption} title={t.settingCaption} />
          </div>
          <div className="cusdis-callout">
            <ul className="cusdis-bullet-list tight">
              {t.notes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <CodeCard title={t.codeTitle} code={codeExample} />
      </div>
    </CusdisSlide>
  );
}
