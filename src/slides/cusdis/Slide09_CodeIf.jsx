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
      kicker: 'code + if',
      title: 'Code 노드에서 JSON을 정리하고, If 노드에서 정상 댓글만 통과시키기',
      subtitle: 'self-host에서 추가 셋업이 덜한 JavaScript를 선택하면 속도가 빠르다. 여기서는 파싱 실패를 `ERROR`로 흡수한다.',
      createCaption: 'Code 노드 추가',
      settingCaption: 'Run once for all items / JavaScript 설정',
      ifCaption: 'If 노드에서 NORMAL 조건 분기',
      notes: [
        '`Run once for all items` 모드에서 Gemini 출력 전체를 순회한다',
        'markdown fence를 제거하고 JSON.parse로 결과를 검증한다',
        '`approve_link`를 `/api/open/approve` 경로로 바꿔 실제 API 요청에 쓴다',
        'If 노드는 `{{ $json.ai_result }} == NORMAL` 조건으로 둔다',
      ],
      codeTitle: 'JavaScript 후처리',
    },
    en: {
      kicker: 'code + if',
      title: 'Clean the JSON in a Code node, then branch only normal comments',
      subtitle: 'JavaScript is the practical choice here because it avoids extra Python setup on a self-hosted box. Parse failures are intentionally absorbed as `ERROR`.',
      createCaption: 'Adding the Code node',
      settingCaption: 'Run once for all items / JavaScript settings',
      ifCaption: 'If node branching on NORMAL',
      notes: [
        'Use `Run once for all items` to loop through the Gemini output payload',
        'Strip markdown fences and verify the result with `JSON.parse`',
        'Transform `approve_link` into `/api/open/approve` before the request call',
        'The If node checks `{{ $json.ai_result }} == NORMAL`',
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
        <CodeCard title={t.codeTitle} code={codeExample} />
        <div className="cusdis-editorial-stack">
          <div className="cusdis-image-wall">
            <MediaCard src={cusdisAssets.createCode} alt={t.createCaption} title={t.createCaption} />
            <MediaCard src={cusdisAssets.codeSetting} alt={t.settingCaption} title={t.settingCaption} />
          </div>
          <MediaCard src={cusdisAssets.ifNode} alt={t.ifCaption} title={t.ifCaption} />
          <div className="cusdis-callout">
            <ul className="cusdis-bullet-list tight">
              {t.notes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </CusdisSlide>
  );
}
