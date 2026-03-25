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
      title: 'Code 노드로 데이터 깔끔하게 정리하기',
      subtitle: 'AI가 준 답변을 자바스크립트로 예쁘게 가공해 봅시다.\n속도가 빠른 자바스크립트를 사용하고, 혹시 모를 에러도 안전하게 처리해 줄 거예요.',
      createCaption: '1. Code 노드 추가하기',
      settingCaption: '2. 자바스크립트 실행 모드 설정하기',
      notes: [
        '`Run once for all items` 모드를 선택해 모든 데이터를 한 번에 순회하며 처리합니다.',
        'AI 답변에서 불필요한 마크다운 기호를 지우고, 진짜 데이터(JSON)만 쏙 뽑아낼 거예요.',
        '준비된 코드를 복사해서 붙여넣기만 하면 설정 끝! 정말 간편하죠?',
      ],
      codeTitle: 'JavaScript 후처리 코드',
    },
    en: {
      kicker: 'n8n workflow · 3 / 6',
      title: 'Code Node — clean up Gemini output with JavaScript',
      subtitle: 'JavaScript avoids extra Python setup on a self-hosted box.\nParse failures are intentionally absorbed as `ERROR`.',
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
