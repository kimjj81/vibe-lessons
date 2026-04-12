import React from 'react';
import FreeformSlideScene, {
  SceneConnector,
  SceneLayer,
  ScenePill,
  SceneTextBlock,
} from '../../components/slide/FreeformSlideScene';
import { BalancedText, FittedText } from '../../components/slide/MeasuredText';
import { useDeckModal } from '../../components/slide/DeckModalContext';
import { useLocale } from '../../i18n/LocaleContext';
import { codeSamples } from '../semver-release/SemverReleaseShared';

const TITLE_FONT = '"Pretendard", "Space Grotesk", ui-sans-serif, system-ui, sans-serif';
const BODY_FONT = '"Pretendard", ui-sans-serif, system-ui, sans-serif';

// Golden-ratio grid system for 1280×720 canvas
// φ = 1.618 | 1280/φ ≈ 791 | 720/φ ≈ 445
// BODY_TOP=280: reserve an extra 20px safety gap under subtitle before body blocks start
const GRID = {
  W: 1280, H: 720,
  MX: 72, MY: 56,
  PHI_X: 791, PHI_X2: 489,
  PHI_Y: 445, PHI_Y2: 275,
  TITLE_TOP: 56,
  BODY_TOP: 280,
  NOTE_TOP: 620,
  COL_LEFT: 88,
  COL_RIGHT: 672,
  COL_GAP: 48,
};

function ActionButton({ label, onClick }) {
  return (
    <button className="scene-cta-button" onClick={onClick} type="button">
      {label}
    </button>
  );
}

function StationText({ accent, body, title, x, y }) {
  return (
    <SceneTextBlock
      className="semver-station-text"
      left={x}
      top={y}
      width={232}
      style={{ color: accent }}
    >
      <div className="semver-station-icon">◎</div>
      <div className="semver-station-title">{title}</div>
      <p className="semver-station-body">{body}</p>
    </SceneTextBlock>
  );
}


function SceneHeader({ kicker, subtitle, title, titleWidth = 880 }) {
  return (
    <SceneLayer left={GRID.MX} top={GRID.MY} width={titleWidth}>
      <ScenePill tone="cyan">{kicker}</ScenePill>
      <div style={{ marginTop: '20px' }}>
        <FittedText
          className="semver-scene-title"
          fontFamily={TITLE_FONT}
          fontWeight={800}
          lineHeightRatio={0.96}
          maxHeight={150}
          maxSize={70}
          maxWidth={titleWidth}
          minSize={34}
          tag="h2"
          text={title}
        />
      </div>
      {subtitle ? (
        <BalancedText
          className="semver-scene-subtitle"
          color="rgba(211, 255, 246, 0.9)"
          fontFamily={BODY_FONT}
          fontSize={18}
          fontWeight={500}
          lineHeight={30}
          maxWidth={titleWidth}
          targetLineCount={3}
          text={subtitle}
        />
      ) : null}
    </SceneLayer>
  );
}

function SceneWrapText({ text, left = GRID.MX, top = 214, width = 1048 }) {
  if (!text) return null;

  return (
    <SceneLayer left={left} top={top} width={width}>
      <div className="semver-scene-wrap-text">{text}</div>
    </SceneLayer>
  );
}

function splitTitleParts(title) {
  if (!title) return null;

  const colonIndex = title.indexOf(':');
  if (colonIndex >= 0) {
    const head = title.slice(0, colonIndex).trim();
    const tail = title.slice(colonIndex + 1).trim();
    if (head && tail) return { title: head, subtitle: tail };
  }

  const lineBreakIndex = title.indexOf('\n');
  if (lineBreakIndex >= 0) {
    const head = title.slice(0, lineBreakIndex).trim();
    const tail = title.slice(lineBreakIndex + 1).trim();
    if (head && tail) return { title: head, subtitle: tail };
  }

  return null;
}

function normalizeSceneCopy(copy) {
  if (!copy) return copy;

  const normalized = { ...copy };
  const split = splitTitleParts(normalized.title);
  if (!split) return normalized;

  const previousSubtitle = normalized.subtitle;
  const previousSummary = normalized.summary;

  normalized.title = split.title;
  normalized.subtitle = split.subtitle;

  if (previousSubtitle) {
    normalized.summary = previousSubtitle;
  }

  if (previousSummary) {
    normalized.wrapText = previousSummary;
  } else if (previousSubtitle) {
    normalized.wrapText = previousSubtitle;
  }

  return normalized;
}

function getUiLabels(locale) {
  return locale === 'ko'
    ? {
      optionalPath: '선택 경로',
      operatingBoundaries: '운영 경계',
      releaseThesis: '핵심 원칙',
      systemPrompt: '시스템 프롬프트',
      tagGate: '태그 분기점',
    }
    : {
      optionalPath: 'optional',
      operatingBoundaries: 'operating boundaries',
      releaseThesis: 'release thesis',
      systemPrompt: 'system prompt',
      tagGate: 'tag gate',
    };
}

function CoverScene({ t }) {
  const { locale } = useLocale();
  const labels = getUiLabels(locale);

  return (
    <FreeformSlideScene className="semver-pdf-scene semver-scene-cover">
      <div className="semver-scene-bg">
        <svg width="1280" height="720" viewBox="0 0 1280 720" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="960" cy="360" r="180" stroke="rgba(103,232,249,0.06)" strokeWidth="1.5" />
          <circle cx="960" cy="360" r="280" stroke="rgba(103,232,249,0.04)" strokeWidth="1.5" />
          <circle cx="960" cy="360" r="380" stroke="rgba(103,232,249,0.025)" strokeWidth="1.5" />
        </svg>
      </div>
      <SceneLayer left={GRID.MX} top={GRID.MY} width={676}>
        <ScenePill tone="cyan">{t.kicker}</ScenePill>
        <div style={{ marginTop: '24px' }}>
          <FittedText
            className="semver-cover-title"
            fontFamily={TITLE_FONT}
            fontWeight={900}
            lineHeightRatio={0.94}
            maxHeight={260}
            maxSize={84}
            maxWidth={650}
            minSize={42}
            tag="h1"
            text={t.title}
          />
        </div>
        <BalancedText
          className="semver-cover-subtitle"
          color="rgba(229, 255, 251, 0.82)"
          fontFamily={BODY_FONT}
          fontSize={19}
          fontWeight={500}
          lineHeight={31}
          maxWidth={620}
          targetLineCount={4}
          text={t.subtitle}
        />
      </SceneLayer>

      <SceneTextBlock className="semver-cover-summary" left={742} top={606} width={394}>
        <div className="semver-mini-kicker">{labels.releaseThesis}</div>
        <p className="semver-panel-body">
          {t.wrapText ?? t.summary}
        </p>
        {t.version ? <div className="semver-version-badge">{t.version}</div> : null}
      </SceneTextBlock>

      <SceneLayer left={GRID.MX} top={500} width={1136}>
        <div className="semver-seq-diagram">
          {t.timeline.map((step, i) => (
            <React.Fragment key={step}>
              <div className="semver-seq-node">
                <div className="semver-seq-index">{String(i + 1).padStart(2, '0')}</div>
                <div className="semver-seq-label">{step}</div>
              </div>
              {i < t.timeline.length - 1 && <div className="semver-seq-arrow">{'\u2192'}</div>}
            </React.Fragment>
          ))}
        </div>
      </SceneLayer>
    </FreeformSlideScene>
  );
}

function OverviewScene({ t }) {
  return (
    <FreeformSlideScene className="semver-pdf-scene">
      <div className="semver-scene-bg">
        <svg width="1280" height="720" viewBox="0 0 1280 720" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="400" r="6" fill="rgba(103,232,249,0.06)" />
          <circle cx="480" cy="500" r="6" fill="rgba(103,232,249,0.06)" />
          <circle cx="760" cy="400" r="6" fill="rgba(103,232,249,0.06)" />
          <circle cx="1040" cy="500" r="6" fill="rgba(103,232,249,0.06)" />
          <path d="M206 400 C340 400 340 500 474 500" stroke="rgba(103,232,249,0.06)" strokeWidth="1.5" />
          <path d="M486 500 C620 500 620 400 754 400" stroke="rgba(103,232,249,0.06)" strokeWidth="1.5" />
          <path d="M766 400 C900 400 900 500 1034 500" stroke="rgba(103,232,249,0.06)" strokeWidth="1.5" />
        </svg>
      </div>
      <SceneHeader kicker={t.kicker} subtitle={t.subtitle} title={t.title} titleWidth={1040} />

      <StationText accent="var(--sv-cyan)" body={t.stations[0].body} title={t.stations[0].title} x={GRID.COL_LEFT} y={268} />
      <StationText accent="var(--sv-teal)" body={t.stations[1].body} title={t.stations[1].title} x={362} y={358} />
      <StationText accent="var(--sv-amber)" body={t.stations[2].body} title={t.stations[2].title} x={642} y={268} />
      <StationText accent="var(--sv-lime)" body={t.stations[3].body} title={t.stations[3].title} x={922} y={358} />

      <SceneConnector d="M4 42 C14 42 12 12 24 12 H52 C65 12 62 74 78 74 H118" height={96} left={278} top={320} width={124} />
      <SceneConnector d="M4 74 H88 C104 74 96 12 118 12" height={96} left={558} top={320} width={122} />
      <SceneConnector d="M6 42 C18 42 14 12 28 12 H56 C70 12 68 74 84 74 H116" height={96} left={838} top={320} width={124} />

      <SceneLayer left={GRID.MX} top={530} width={1136}>
        <div className="semver-sot-section">
          <div className="semver-sot-title">{t.wrapLabel}</div>
          <p className="semver-sot-body">{t.wrapText}</p>
        </div>
      </SceneLayer>
    </FreeformSlideScene>
  );
}

function TokenScene({ t }) {
  const { locale } = useLocale();
  const labels = getUiLabels(locale);

  return (
    <FreeformSlideScene className="semver-pdf-scene">
      <div className="semver-scene-bg">
        <svg width="1280" height="720" viewBox="0 0 1280 720" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M640 180 L580 280 L600 280 L600 520 L560 520 L640 560 L720 520 L680 520 L680 280 L700 280 Z" stroke="rgba(103,232,249,0.06)" strokeWidth="1.5" />
        </svg>
      </div>
      <SceneHeader kicker={t.kicker} subtitle={t.subtitle} title={t.title} />
      <SceneWrapText text={t.wrapText} />

      <SceneLayer left={GRID.COL_LEFT} top={GRID.BODY_TOP} width={432}>
        <div className="semver-token-stack">
          {t.tokens.map((token, index) => (
            <div className="semver-token-item" key={token.name} style={{ animationDelay: `${index * 80}ms` }}>
              <div className="semver-token-name">{token.name}</div>
              <div className="semver-token-detail">{token.detail}</div>
            </div>
          ))}
        </div>
      </SceneLayer>

      <SceneTextBlock left={GRID.COL_RIGHT} top={GRID.BODY_TOP} width={482}>
        <div className="semver-mini-kicker">{labels.operatingBoundaries}</div>
        <div className="semver-outline-list">
          {t.boundaries.map((item) => (
            <div key={item.title} className="semver-outline-item">
              <span className="semver-outline-dot" />
              <div>
                <div className="semver-outline-title">{item.title}</div>
                <div className="semver-outline-body">{item.body}</div>
              </div>
            </div>
          ))}
        </div>
      </SceneTextBlock>

      <SceneLayer left={GRID.COL_RIGHT} top={GRID.NOTE_TOP} width={474}>
        <div className="semver-inline-note">{t.note}</div>
      </SceneLayer>
    </FreeformSlideScene>
  );
}

function RouterScene({ t }) {
  const { locale } = useLocale();
  const labels = getUiLabels(locale);

  return (
    <FreeformSlideScene className="semver-pdf-scene">
      <div className="semver-scene-bg">
        <svg width="1280" height="720" viewBox="0 0 1280 720" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M640 240 L340 520" stroke="rgba(103,232,249,0.06)" strokeWidth="1.5" />
          <path d="M640 240 L640 520" stroke="rgba(103,232,249,0.06)" strokeWidth="1.5" />
          <path d="M640 240 L940 520" stroke="rgba(103,232,249,0.06)" strokeWidth="1.5" />
          <polygon points="334,526 346,526 340,538" fill="rgba(103,232,249,0.06)" />
          <polygon points="634,526 646,526 640,538" fill="rgba(103,232,249,0.06)" />
          <polygon points="934,526 946,526 940,538" fill="rgba(103,232,249,0.06)" />
        </svg>
      </div>
      <SceneHeader kicker={t.kicker} subtitle={t.subtitle} title={t.title} />
      <SceneWrapText text={t.wrapText} />

      <SceneLayer left={116} top={GRID.BODY_TOP} width={1048}>
        <div className="semver-router-hub">{labels.tagGate}</div>
        <div className="semver-router-grid">
          {t.lanes.map((lane) => (
            <div className="semver-router-lane" key={lane.title}>
              <div className="semver-router-head">
                <div className="semver-router-icon" style={{ color: lane.accent }}>◇</div>
                <div className="semver-router-title">{lane.title}</div>
              </div>
              <div className="semver-router-regex">{lane.regex}</div>
              <div className="semver-router-caption">{lane.caption}</div>
            </div>
          ))}
        </div>
        <div className="semver-lane-rails">
          <span />
          <span />
          <span />
        </div>
      </SceneLayer>

      <SceneLayer left={116} top={GRID.NOTE_TOP} width={1048}>
        <div className="semver-inline-note">{t.note}</div>
      </SceneLayer>
    </FreeformSlideScene>
  );
}

function SafetyScene({ t }) {
  return (
    <FreeformSlideScene className="semver-pdf-scene">
      <div className="semver-scene-bg">
        <svg width="1280" height="720" viewBox="0 0 1280 720" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="246" y="262" width="788" height="278" rx="28" stroke="rgba(103,232,249,0.05)" strokeWidth="1.5" />
        </svg>
      </div>
      <SceneHeader kicker={t.kicker} subtitle={t.subtitle} title={t.title} />
      <SceneWrapText text={t.wrapText} />

      <SceneLayer left={248} top={280} width={784} height={284}>
        <div className="semver-process-grid">
          <div className="semver-process-node semver-process-node-1">
            <div className="semver-process-index">01</div>
            <div className="semver-process-title">{t.flow[0]}</div>
            <div className="semver-process-body">{t.callouts[0].title}: {t.callouts[0].body}</div>
          </div>
          <div className="semver-process-node semver-process-node-2">
            <div className="semver-process-index">02</div>
            <div className="semver-process-title">{t.flow[1]}</div>
            <div className="semver-process-body">초안 상태를 유지한 채 릴리스 뼈대를 먼저 고정합니다.</div>
          </div>
          <div className="semver-process-node semver-process-node-3">
            <div className="semver-process-index">03</div>
            <div className="semver-process-title">{t.flow[2]}</div>
            <div className="semver-process-body">{t.callouts[1].title}: {t.callouts[1].body}</div>
          </div>
          <div className="semver-process-node semver-process-node-4">
            <div className="semver-process-index">04</div>
            <div className="semver-process-title">{t.flow[3]}</div>
            <div className="semver-process-body">{t.callouts[2].title}: {t.callouts[2].body}</div>
          </div>
          <div className="semver-process-arrow semver-process-arrow-right">{'\u2192'}</div>
          <div className="semver-process-arrow semver-process-arrow-down">↓</div>
          <div className="semver-process-arrow semver-process-arrow-left">{'\u2190'}</div>
        </div>
      </SceneLayer>
    </FreeformSlideScene>
  );
}

function ComparisonScene({ t }) {
  const { locale } = useLocale();
  const labels = getUiLabels(locale);

  return (
    <FreeformSlideScene className="semver-pdf-scene">
      <div className="semver-scene-bg">
        <svg width="1280" height="720" viewBox="0 0 1280 720" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="640" y1="260" x2="640" y2="300" stroke="rgba(103,232,249,0.06)" strokeWidth="1.5" />
          <line x1="540" y1="340" x2="740" y2="340" stroke="rgba(103,232,249,0.06)" strokeWidth="1.5" />
          <line x1="540" y1="340" x2="480" y2="440" stroke="rgba(103,232,249,0.06)" strokeWidth="1.5" />
          <line x1="740" y1="340" x2="800" y2="440" stroke="rgba(103,232,249,0.06)" strokeWidth="1.5" />
          <circle cx="480" cy="450" r="24" stroke="rgba(103,232,249,0.06)" strokeWidth="1.5" />
          <circle cx="800" cy="450" r="24" stroke="rgba(103,232,249,0.06)" strokeWidth="1.5" />
        </svg>
      </div>
      <SceneHeader kicker={t.kicker} subtitle={t.subtitle} title={t.title} />
      <SceneWrapText text={t.wrapText} />

      <SceneLayer left={GRID.MX} top={GRID.BODY_TOP} width={1136}>
        <div className="semver-flow-cards">
          <div className="semver-flow-card semver-flow-card-base">
            <div className="semver-flow-card-badge baseline">{t.left.label}</div>
            <div className="semver-flow-card-title">{t.left.title}</div>
            <ul className="semver-flow-card-list">
              {t.left.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
          <div className="semver-flow-connector">
            <div className="semver-flow-connector-arrow">{'\u2192'}</div>
            <div className="semver-flow-connector-label">{labels.optionalPath}</div>
          </div>
          <div className="semver-flow-card semver-flow-card-optional">
            <div className="semver-flow-card-badge optional">{t.right.label}</div>
            <div className="semver-flow-card-title">{t.right.title}</div>
            <ul className="semver-flow-card-list">
              {t.right.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </div>
      </SceneLayer>
    </FreeformSlideScene>
  );
}

function LoopScene({ t }) {
  return (
    <FreeformSlideScene className="semver-pdf-scene">
      <div className="semver-scene-bg">
        <svg width="1280" height="720" viewBox="0 0 1280 720" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M540 320 A100 100 0 0 1 740 320" stroke="rgba(103,232,249,0.06)" strokeWidth="1.5" />
          <path d="M740 400 A100 100 0 0 1 540 400" stroke="rgba(103,232,249,0.06)" strokeWidth="1.5" />
          <polygon points="540,316 540,324 532,320" fill="rgba(103,232,249,0.06)" />
          <polygon points="740,396 740,404 748,400" fill="rgba(103,232,249,0.06)" />
        </svg>
      </div>
      <SceneHeader kicker={t.kicker} subtitle={t.subtitle} title={t.title} />
      <SceneWrapText text={t.wrapText} />

      <SceneLayer left={168} top={GRID.BODY_TOP} width={944} height={312}>
        <div className="semver-loop-ring" />
        {t.steps.map((step, index) => (
          <div
            className={`semver-loop-node semver-loop-node-${index + 1}`}
            key={step.title}
          >
            <div className="semver-loop-index">{step.title}</div>
            <div className="semver-loop-body">{step.body}</div>
          </div>
        ))}
      </SceneLayer>

      <SceneTextBlock className="semver-inline-note-band" left={164} top={590} width={948}>
        <div className="semver-inline-note">{t.tip}</div>
      </SceneTextBlock>
    </FreeformSlideScene>
  );
}

function PromptScene({ t }) {
  const modalApi = useDeckModal();
  const { locale } = useLocale();
  const labels = getUiLabels(locale);

  return (
    <FreeformSlideScene className="semver-pdf-scene">
      <div className="semver-scene-bg">
        <svg width="1280" height="720" viewBox="0 0 1280 720" fill="none" xmlns="http://www.w3.org/2000/svg">
          <text x="900" y="420" fontSize="220" fontFamily="monospace" fill="rgba(103,232,249,0.04)" fontWeight="700">&lt;/&gt;</text>
        </svg>
      </div>
      <SceneHeader kicker={t.kicker} subtitle={t.subtitle} title={t.title} />
      <SceneWrapText text={t.wrapText} />

      <SceneTextBlock left={GRID.COL_LEFT} top={310} width={624}>
        <div className="semver-mini-kicker">{labels.systemPrompt}</div>
        <div className="semver-prompt-body">
          {t.promptLines.map((line) => (
            <div className="semver-prompt-line" key={line}>{line}</div>
          ))}
        </div>
      </SceneTextBlock>

      <SceneLayer left={760} top={310} width={326}>
        <div className="semver-badge-stack">
          {t.badges.map((badge) => (
            <div className="semver-floating-badge" key={badge.title}>
              <div className="semver-floating-badge-title">{badge.title}</div>
              <div className="semver-floating-badge-body">{badge.body}</div>
            </div>
          ))}
        </div>
      </SceneLayer>

      <SceneLayer left={GRID.COL_LEFT} top={GRID.NOTE_TOP} width={624}>
        <ActionButton
          label={t.button}
          onClick={() => modalApi?.openModal({
            content: codeSamples.llmPrompt,
            description: t.modalDescription,
            kicker: 'prompt',
            renderMode: 'markdown',
            title: t.modalTitle,
          })}
        />
      </SceneLayer>
    </FreeformSlideScene>
  );
}

function BridgeScene({ t }) {
  return (
    <FreeformSlideScene className="semver-pdf-scene">
      <div className="semver-scene-bg">
        <svg width="1280" height="720" viewBox="0 0 1280 720" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M320 480 Q480 280 640 480 Q800 280 960 480" stroke="rgba(103,232,249,0.06)" strokeWidth="1.5" />
          <line x1="320" y1="480" x2="960" y2="480" stroke="rgba(103,232,249,0.04)" strokeWidth="1.5" />
        </svg>
      </div>
      <SceneHeader kicker={t.kicker} subtitle={t.subtitle} title={t.title} />
      <SceneWrapText text={t.wrapText} />

      <SceneTextBlock className="semver-repo-block" left={118} top={GRID.BODY_TOP} width={288}>
        <div className="semver-repo-title">{t.source.title}</div>
        <div className="semver-repo-lines">
          {t.source.items.map((item) => <div key={item}>{item}</div>)}
        </div>
      </SceneTextBlock>

      <SceneLayer left={454} top={284} width={274} height={126}>
        <div className="semver-bridge-shell">
          <div className="semver-bridge-pill">{t.bridge}</div>
          <div className="semver-bridge-arrow" />
        </div>
      </SceneLayer>

      <SceneTextBlock className="semver-repo-block" left={780} top={GRID.BODY_TOP} width={288}>
        <div className="semver-repo-title">{t.home.title}</div>
        <div className="semver-repo-lines">
          {t.home.items.map((item) => <div key={item}>{item}</div>)}
        </div>
      </SceneTextBlock>

      <SceneLayer left={116} top={490} width={956}>
        <div className="semver-callout-grid">
          {t.callouts.map((callout) => (
            <div className={`semver-callout-box ${callout.kind === 'bad' ? 'semver-callout-box-bad' : ''}`} key={callout.title}>
              <div className="semver-callout-title">{callout.title}</div>
              <div className="semver-callout-body">{callout.body}</div>
            </div>
          ))}
        </div>
      </SceneLayer>

      <SceneLayer left={120} top={GRID.NOTE_TOP} width={952}>
        <div className="semver-inline-note">{t.note}</div>
      </SceneLayer>
    </FreeformSlideScene>
  );
}

function AstroScene({ t }) {
  const modalApi = useDeckModal();

  return (
    <FreeformSlideScene className="semver-pdf-scene">
      <div className="semver-scene-bg">
        <svg width="1280" height="720" viewBox="0 0 1280 720" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M200 600 Q400 200 600 400 Q800 600 1000 200" stroke="rgba(103,232,249,0.06)" strokeWidth="1.5" strokeDasharray="8 6" />
          <circle cx="1000" cy="200" r="4" fill="rgba(103,232,249,0.06)" />
        </svg>
      </div>
      <SceneHeader kicker={t.kicker} title={t.title} />

      <SceneLayer left={GRID.MX} top={GRID.BODY_TOP} width={1136}>
        <div className="semver-import-intro">{t.bodyIntro}</div>
        <div className="semver-import-flow">
          {t.cards.map((card, i) => (
            <div className="semver-import-row" key={card.title}>
              <div className="semver-import-card">
                <div className="semver-import-card-title">{card.title}</div>
                <div className="semver-import-card-body">{card.body}</div>
              </div>
              <div className="semver-import-arrow">{'\u2192'}</div>
              <div className="semver-import-desc">{t.steps[i]}</div>
            </div>
          ))}
        </div>
      </SceneLayer>

      <SceneLayer left={GRID.MX} top={648} width={560}>
        <div className="semver-button-row">
          <ActionButton
            label={t.workflowButton}
            onClick={() => modalApi?.openModal({
              content: codeSamples.homepageImportWorkflow,
              description: t.workflowDescription,
              kicker: 'workflow',
              language: 'YAML',
              renderMode: 'code',
              title: t.workflowTitle,
            })}
          />
          <ActionButton
            label={t.scriptButton}
            onClick={() => modalApi?.openModal({
              content: codeSamples.importScript,
              description: t.scriptDescription,
              kicker: 'script',
              language: 'JavaScript',
              renderMode: 'code',
              title: t.scriptTitle,
            })}
          />
        </div>
      </SceneLayer>
    </FreeformSlideScene>
  );
}

function DashboardScene({ t }) {
  return (
    <FreeformSlideScene className="semver-pdf-scene">
      <div className="semver-scene-bg">
        <svg width="1280" height="720" viewBox="0 0 1280 720" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="640" y1="220" x2="640" y2="620" stroke="rgba(103,232,249,0.04)" strokeWidth="1" />
          <line x1="140" y1="420" x2="1140" y2="420" stroke="rgba(103,232,249,0.04)" strokeWidth="1" />
        </svg>
      </div>
      <SceneHeader kicker={t.kicker} subtitle={t.subtitle} title={t.title} />
      <SceneLayer left={GRID.MX} top={GRID.BODY_TOP} width={1136}>
        <div className="semver-metric-grid">
          {t.metrics.map((m, i) => (
            <div className="semver-metric-cell" key={m.label}>
              <div className="semver-metric-cell-label">{m.label}</div>
              <div className="semver-metric-cell-value" style={{ color: ['var(--sv-teal)', 'var(--sv-cyan)', 'var(--sv-lime)', 'var(--sv-amber)'][i] }}>{m.value}</div>
              <div className="semver-metric-cell-note">{m.note}</div>
            </div>
          ))}
        </div>
      </SceneLayer>
    </FreeformSlideScene>
  );
}

function TimelineScene({ t }) {
  return (
    <FreeformSlideScene className="semver-pdf-scene">
      <div className="semver-scene-bg">
        <svg width="1280" height="720" viewBox="0 0 1280 720" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="160" y1="560" x2="1120" y2="560" stroke="rgba(103,232,249,0.06)" strokeWidth="1.5" strokeDasharray="4 8" />
          <circle cx="240" cy="560" r="3" fill="rgba(103,232,249,0.06)" />
          <circle cx="432" cy="560" r="3" fill="rgba(103,232,249,0.06)" />
          <circle cx="624" cy="560" r="3" fill="rgba(103,232,249,0.06)" />
          <circle cx="816" cy="560" r="3" fill="rgba(103,232,249,0.06)" />
          <circle cx="1008" cy="560" r="3" fill="rgba(103,232,249,0.06)" />
        </svg>
      </div>
      <SceneHeader kicker={t.kicker} subtitle={t.subtitle} title={t.title} />
      <SceneWrapText text={t.wrapText} />

      <SceneLayer left={120} top={318} width={1030}>
        <div className="semver-zero-touch-line" />
        <div className="semver-zero-touch-row">
          {t.steps.map((step, index) => (
            <div className="semver-zero-touch-node" key={step.title}>
              <div className="semver-zero-touch-index">{String(index + 1).padStart(2, '0')}</div>
              <div className="semver-zero-touch-title">{step.title}</div>
              <div className="semver-zero-touch-body">{step.body}</div>
            </div>
          ))}
        </div>
      </SceneLayer>

      <SceneLayer left={212} top={GRID.NOTE_TOP} width={858}>
        <div className="semver-inline-note">{t.note}</div>
      </SceneLayer>
    </FreeformSlideScene>
  );
}

function ClosingScene({ t }) {
  return (
    <FreeformSlideScene className="semver-pdf-scene semver-scene-closing">
      <div className="semver-scene-bg">
        <svg width="1280" height="720" viewBox="0 0 1280 720" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 500 Q160 440 320 500 Q480 560 640 500 Q800 440 960 500 Q1120 560 1280 500" stroke="rgba(103,232,249,0.05)" strokeWidth="1.5" />
          <path d="M0 540 Q160 480 320 540 Q480 600 640 540 Q800 480 960 540 Q1120 600 1280 540" stroke="rgba(103,232,249,0.03)" strokeWidth="1.5" />
        </svg>
      </div>
      <SceneLayer left={150} top={126} width={980}>
        <FittedText
          align="center"
          className="semver-closing-title"
          fontFamily={TITLE_FONT}
          fontWeight={900}
          lineHeightRatio={0.94}
          maxHeight={210}
          maxSize={78}
          maxWidth={980}
          minSize={34}
          tag="h2"
          text={t.title}
        />
      </SceneLayer>
      {t.subtitle ? (
        <SceneLayer left={210} top={320} width={860}>
          <BalancedText
            className="semver-closing-subtitle"
            color="rgba(229, 255, 251, 0.88)"
            fontFamily={BODY_FONT}
            fontSize={22}
            fontWeight={600}
            lineHeight={34}
            maxWidth={860}
            style={{ margin: '0 auto', textAlign: 'center' }}
            targetLineCount={2}
            text={t.subtitle}
          />
        </SceneLayer>
      ) : null}
      <SceneLayer left={120} top={412} width={1040} style={{ display: 'flex', justifyContent: 'center' }}>
        <BalancedText
          className="semver-closing-copy"
          color="rgba(229, 255, 251, 0.82)"
          fontFamily={BODY_FONT}
          fontSize={20}
          fontWeight={500}
          lineHeight={33}
          maxWidth={900}
          style={{ margin: '0 auto', textAlign: 'center' }}
          targetLineCount={4}
          text={t.wrapText ?? t.summary ?? t.subtitle}
        />
      </SceneLayer>
      <SceneLayer left={174} top={584} width={932} style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="semver-resource-pill-row">
          {t.resources.map((item) => (
            <a className="semver-resource-pill" href={item.href} key={item.label} rel="noopener noreferrer" target="_blank">
              {item.label}
            </a>
          ))}
        </div>
      </SceneLayer>
    </FreeformSlideScene>
  );
}

function getCopy(locale) {
  return locale === 'ko'
    ? {
      1: {
        kicker: '강의 04',
        title: '무결점 릴리스 노트 자동화',
        subtitle: 'SemVer에서 홈페이지 발행까지',
        summary: '핵심은 자동화 그 자체보다 신뢰할 수 있는 원본 소스를 어디에 둘지, 어느 저장소가 편집자이고 어느 저장소가 소비자인지를 먼저 정하는 것입니다. 태그 푸시 한 번으로 GitHub 릴리스, AI 교정, 그리고 Astro 기반 블로그 배포까지 이어지는 사람 손을 더 거치지 않는 릴리스 흐름을 설명합니다.',
        timeline: ['태그 푸시', '초안 생성', '노트 교정', '호출 전달', 'Astro 빌드'],
      },
      2: {
        kicker: '전체 구성',
        title: '파이프라인의 전체 조감도',
        subtitle: '네 개의 자동화 스테이션을 먼저 한 장의 운영 그림으로 고정합니다.',
        stations: [
          { title: '원본 저장소', body: 'GitHub 릴리스를 신뢰할 수 있는 원본 소스로 유지합니다.' },
          { title: 'AI 교정', body: '선택적으로 자동 생성 릴리스 노트를 사용자 문장으로 다듬습니다.' },
          { title: '저장소 간 호출', body: '호출 신호만 보내고 홈페이지 파일은 직접 건드리지 않습니다.' },
          { title: '홈페이지 렌더링', body: '별도 저장소가 릴리스를 읽어 Astro를 다시 빌드합니다.' },
        ],
        wrapLabel: '신뢰할 수 있는 원본 소스',
        wrapText: '릴리스 파이프라인은 도구 나열이 아니라 경계 설계입니다. 원본 저장소는 릴리스 상태를 완성하고, 홈페이지 저장소는 공개된 정식 릴리스 상태만 읽어 렌더링합니다.',
      },
      3: {
        kicker: '최소 권한',
        title: '인프라 권한 설정:\n최소 권한의 원칙',
        subtitle: '토큰 이름보다 먼저 “무엇을 못 하게 할 것인가”를 정해야 운영이 안전해집니다.',
        tokens: [
          { name: 'GITHUB_TOKEN', detail: '현재 저장소 안에서 릴리스 생성과 수정만 담당' },
          { name: 'BLOG_REPO_DISPATCH_TOKEN', detail: '대상 저장소 1곳과 Actions 쓰기 권한만 허용' },
          { name: 'OPENAI_API_KEY', detail: '릴리스 노트 교정 전용, 원본 소스 대체 금지' },
          { name: 'OPENAI_MODEL', detail: '비밀값이 아니라 변수로 분리해 운영' },
        ],
        boundaries: [
          { title: '원본 저장소', body: '태그 정책, 초안 생성, 공개 발행까지 책임집니다.' },
          { title: '호출 토큰', body: '홈페이지 워크플로를 깨우는 데만 씁니다.' },
          { title: '홈페이지 저장소', body: '자기 GITHUB_TOKEN으로 가져오기, 빌드, 커밋을 처리합니다.' },
        ],
        note: '운영 포인트: 모델 이름은 자주 바뀌므로 비밀값이 아니라 변수로 두고, 저장소 간 호출 토큰에는 내용 쓰기 권한을 붙이지 않습니다.',
      },
      4: {
        kicker: '태그 분기',
        title: '첫번째 스테이션:\n시맨틱 버전 정규식 분기기',
        subtitle: '정식(stable), 베타(beta), 출시 후보(rc)를 태그 단계에서 나누면 이후 워크플로 책임이 훨씬 명확해집니다.',
        lanes: [
          { accent: 'var(--sv-cyan)', title: '정식 경로', regex: '^v[0-9]+\\.[0-9]+\\.[0-9]+$', caption: '정식 공개 + 홈페이지 동기화' },
          { accent: 'var(--sv-amber)', title: '베타 경로', regex: '^vX.Y.Z-beta(.n)?$', caption: '사전 공개 상태로 유지' },
          { accent: 'var(--sv-purple)', title: '출시 후보 경로', regex: '^vX.Y.Z-rc(.n)?$', caption: '출시 후보 버전 관리' },
        ],
        note: '이벤트는 `push.tags: ["v*"]`로 넓게 받고, 실제 최종 판정은 셸 정규식에서 수행하는 편이 복구 경로까지 포함해 단순합니다.',
      },
      5: {
        kicker: '초안 안전장치',
        title: '두 번째 스테이션:\n미완성 배포를 막는 안전 밸브',
        subtitle: '릴리스는 처음부터 공개 상태가 아니라 준비 중 상태로 시작해야 합니다.',
        flow: ['태그 푸시', '초안 릴리스 생성', '노트/자산 준비', '공개 발행'],
        callouts: [
          { title: '초안 먼저', body: '초기에 무조건 초안으로 만들면 미완성 공개를 막을 수 있습니다.' },
          { title: '노트 준비 완료', body: '자동 생성 노트와 자산 준비가 끝나기 전에는 릴리스가 공개되지 않습니다.' },
          { title: '마지막에 공개', body: '가시성 전환은 마지막 한 단계만 담당하도록 분리합니다.' },
        ],
      },
      6: {
        kicker: '콘텐츠 전략',
        title: '콘텐츠 생성 전략:\n기본 생성과 LLM 교정',
        subtitle: '기본 경로는 GitHub 자동 생성 릴리스 노트이고, LLM은 선택 후처리입니다.',
        left: {
          title: 'GitHub 기본 생성',
          label: '필수',
          items: [
            '가장 빠르고 실패 지점이 적습니다.',
            'PR 비교 정보 기반이라 운영 기준 정보가 안정적입니다.',
            '내부 도구나 개발자 중심 제품에 잘 맞습니다.',
          ],
        },
        right: {
          title: 'LLM 후처리 교정',
          label: '선택',
          items: [
            '다국어 / 사용자 문체 정리에 강합니다.',
            '섹션 구조와 톤앤매너를 통일할 수 있습니다.',
            '하지만 신뢰할 수 있는 원본 소스를 대체하면 안 됩니다.',
          ],
        },
      },
      7: {
        kicker: 'LLM 흐름',
        title: 'LLM 통합 워크플로우:\n후처리 프로세서로서의 AI',
        subtitle: 'LLM은 원시 diff를 읽는 주체가 아니라 이미 정리된 자동 생성 릴리스 노트를 다듬는 후처리기입니다.',
        steps: [
          { title: '1', body: '대상 릴리스를 조회합니다.' },
          { title: '2', body: 'GitHub 기본 초안을 생성합니다.' },
          { title: '3', body: '초안을 LLM으로 보냅니다.' },
          { title: '4', body: '결과를 PATCH 수정 요청으로 릴리스에 되돌립니다.' },
        ],
        tip: '실무 팁: Git diff 전체를 LLM에 던지지 마십시오. 자동 생성 릴리스 노트나 비교 요약을 넣는 것이 비용과 환각 둘 다 줄입니다.',
      },
      8: {
        kicker: '프롬프트 설계',
        title: '무결점 릴리스 노트를 위한\n프롬프트 설계도',
        subtitle: '좋은 프롬프트는 새 사실을 추가하게 만드는 문장이 아니라, 참조 무결성과 문체의 폭을 동시에 좁히는 규칙 집합입니다.',
        promptLines: [
          '입력은 GitHub가 생성한 릴리스 노트만 사용합니다.',
          '원문에 없는 주장이나 사실은 절대로 추가하지 않습니다.',
          '버전 번호, 링크, PR 번호는 원문 그대로 유지합니다.',
          '결과는 간결한 사용자용 마크다운으로만 다시 작성합니다.',
        ],
        badges: [
          { title: '참조 무결성 유지', body: '버전명, 링크, PR 번호를 원문 그대로 보존' },
          { title: '톤앤매너 고정', body: '과장하지 않고 사용자 관점의 문장으로 변환' },
          { title: '환각 억제', body: '입력에 없는 사실은 절대 추가하지 않음' },
        ],
        button: '전체 프롬프트 보기',
        modalTitle: '교정 프롬프트 전체 내용',
        modalDescription: '릴리스 노트를 다듬을 때 쓰는 전체 프롬프트입니다.',
      },
      9: {
        kicker: '분리 호출',
        title: '세 번째 스테이션:\n안전한 저장소 간 자동화',
        subtitle: '원본 저장소와 홈페이지 저장소는 공동 편집자가 아니라 분리된 담당자여야 합니다.',
        source: {
          title: '원본 저장소',
          items: ['태그 정책', '초안 → 공개 발행', '호출만 담당'],
        },
        home: {
          title: '홈페이지 저장소',
          items: ['릴리스 가져오기', 'Astro 콘텐츠 생성', '빌드 + 조건부 커밋'],
        },
        bridge: 'workflow_dispatch 호출 연결',
        callouts: [
          { kind: 'bad', title: '잘못된 패턴', body: '원본 저장소가 홈페이지 파일을 직접 덮어쓰면 보안과 책임 경계가 동시에 무너집니다.' },
          { kind: 'good', title: '우아한 자동화', body: '원본 저장소는 깨우기만 하고, 홈페이지 저장소가 자기 토큰으로 스스로 가져오기와 커밋을 끝냅니다.' },
        ],
        note: '오직 공개된 정식 릴리스에 대해서만 연결을 열어 두면 수동 재실행과 운영 실수를 함께 줄일 수 있습니다.',
      },
      10: {
        kicker: 'Astro 반영',
        title: '네 번째 스테이션:\nAstro 홈페이지 누적 렌더링',
        bodyIntro: '홈페이지 저장소는 릴리스 본문을 읽어 콘텐츠 컬렉션 문서로 바꾸고, 빌드가 성공한 경우에만 최신 페이지로 공개합니다.',
        cards: [
          { title: '원본 데이터', body: 'GitHub Release API에서 정식 릴리스를 조회' },
          { title: '콘텐츠 반영', body: 'frontmatter와 마크다운 본문으로 바꿔 콘텐츠 컬렉션에 저장' },
          { title: '공개 페이지', body: 'Cloudflare Pages가 다시 빌드해 공개 사이트에 반영' },
        ],
        steps: [
          '홈페이지 워크플로가 깨어나면 가져오기 스크립트가 릴리스 API를 호출합니다.',
          '가져온 릴리스 본문은 Astro 콘텐츠 포맷의 `.md` 파일로 저장됩니다.',
          '빌드가 성공하면 변경만 커밋하고, 아무 변경이 없으면 추가 커밋을 만들지 않습니다.',
        ],
        workflowButton: 'workflow 보기',
        workflowDescription: '홈페이지 저장소 워크플로 전체 YAML입니다.',
        workflowTitle: '홈페이지 가져오기 워크플로 전체 YAML',
        scriptButton: 'script 보기',
        scriptDescription: '릴리스 가져오기 스크립트 전체 자바스크립트입니다.',
        scriptTitle: '가져오기 스크립트 전체 자바스크립트',
      },
      11: {
        kicker: '검증',
        title: '4단계 무결성 검증 대시보드',
        subtitle: '워크플로 성공이 아니라 사용자에게 보이는 상태까지 확인해야 이 파이프라인이 완성됩니다.',
        metrics: [
          { label: '태그 분기', value: '첫번째 필수 체크 조건', note: '정식 태그만 정식 릴리스 경로로 들어왔는가?' },
          { label: '안전 밸브', value: '발행 순서 체크 조건', note: '초안에서 노트가 채워진 뒤 공개 발행되었는가?' },
          { label: '저장소 간 호출 확인', value: '실행 여부 확인 조건', note: '대상 저장소 워크플로가 실제로 깨고 실행되었는가?' },
          { label: '무변경 재실행 검증', value: '중복 커밋 방지 조건', note: '같은 정식 릴리스를 재실행할 때 불필요한 커밋이 생기지 않는가?' },
        ],
      },
      12: {
        kicker: '자동 완결',
        title: '파이프라인 완성:\n자동 완결 릴리스',
        subtitle: '개발자는 Git 태그만 푸시하고, 나머지는 분리된 운영 파이프라인이 공개 릴리스 상태를 사용자 페이지까지 운반합니다.',
        steps: [
          { title: '태그', body: '정식 태그 푸시' },
          { title: '초안', body: '초안 릴리스 생성' },
          { title: '노트', body: '자동 생성 노트 / 선택 교정' },
          { title: '호출', body: '홈페이지 워크플로 실행' },
          { title: '빌드', body: 'Astro 반영과 사이트 빌드' },
          { title: '공개', body: '공개 페이지 갱신' },
        ],
        note: '자동화는 “릴리스 문장을 누가 최종 편집하는가”와 “어느 저장소가 공개 페이지를 책임지는가”를 고정하는 운영 설계입니다.',
      },
      13: {
        title: '릴리스 노트 자동 발행을 통해\n운영의 한계를 돌파하십시오.',
        subtitle: '추가 문의 사항이나 파이프라인 구축 관련 논의는 언제든 환영합니다.\n문의: support@studiojin.dev (Studio Jin)',
        resources: [
          { href: 'https://docs.github.com/en/actions', label: 'GitHub Actions 문서' },
          { href: 'https://docs.github.com/en/rest/releases', label: 'GitHub REST API 문서' },
          { href: 'https://platform.openai.com/docs', label: 'OpenAI API 참고 자료' },
        ],
      },
    }
    : {
      1: {
        kicker: 'course 04',
        title: 'Low-Defect Release Notes Automation',
        subtitle: 'From SemVer to Homepage Publishing',
        summary: 'The real design choice is not automation by itself, but where release truth lives and which repository is allowed to edit or merely consume it. One tag push triggers GitHub Release creation, optional AI polishing, and Astro-powered homepage publishing without manual copy-paste in the middle.',
        timeline: ['Tag pushed', 'Draft created', 'Notes polished', 'Dispatch fired', 'Astro built'],
      },
      2: {
        kicker: 'station map',
        title: 'The Whole Pipeline at a Glance',
        subtitle: 'Lock the four operating stations into one visual map before diving into YAML.',
        stations: [
          { title: 'Source repo', body: 'Keep GitHub Release as the canonical source of public release state.' },
          { title: 'AI polish', body: 'Optionally rewrite generated notes into cleaner user language.' },
          { title: 'Repo bridge', body: 'Dispatch only. Never let the source repo edit homepage files.' },
          { title: 'Homepage render', body: 'A separate repo consumes the release and rebuilds Astro.' },
        ],
        wrapLabel: 'single source of truth',
        wrapText: 'Release automation is boundary design. The source repo completes release state, and the homepage repo consumes published stable state only.',
      },
      3: {
        kicker: 'minimum permissions',
        title: 'Infrastructure Permissions:\nThe Principle of Least Privilege',
        subtitle: 'Safer automation starts by deciding what each credential must not be allowed to do.',
        tokens: [
          { name: 'GITHUB_TOKEN', detail: 'Used only inside the current repository for release edits' },
          { name: 'BLOG_REPO_DISPATCH_TOKEN', detail: 'Scoped to one target repo with Actions write only' },
          { name: 'OPENAI_API_KEY', detail: 'Used only for release-note polishing, never as source of truth' },
          { name: 'OPENAI_MODEL', detail: 'Stored as a variable, not a secret' },
        ],
        boundaries: [
          { title: 'source repo', body: 'Owns tag policy, draft creation, and final publish.' },
          { title: 'dispatch token', body: 'Wakes the homepage workflow and nothing more.' },
          { title: 'homepage repo', body: 'Imports, builds, and conditionally commits with its own token.' },
        ],
        note: 'Operational rule: treat model selection as configuration, and avoid giving cross-repo credentials any file-write permission they do not need.',
      },
      4: {
        kicker: 'tag gate',
        title: 'Station 1:\nThe SemVer Regex Router',
        subtitle: 'Once stable, beta, and rc are separated at the tag gate, the rest of the workflow becomes much easier to reason about.',
        lanes: [
          { accent: 'var(--sv-cyan)', title: 'Stable lane', regex: '^v[0-9]+\\.[0-9]+\\.[0-9]+$', caption: 'public release + homepage sync' },
          { accent: 'var(--sv-amber)', title: 'Beta lane', regex: '^vX.Y.Z-beta(.n)?$', caption: 'keep as prerelease' },
          { accent: 'var(--sv-purple)', title: 'RC lane', regex: '^vX.Y.Z-rc(.n)?$', caption: 'candidate validation path' },
        ],
        note: 'Receive tags broadly with `push.tags: ["v*"]`, then perform the final classification in shell so recovery and manual replay stay explicit.',
      },
      5: {
        kicker: 'draft safety',
        title: 'Station 2:\nThe Safety Valve Against Half-Finished Releases',
        subtitle: 'A release should start as staging state, not public state.',
        flow: ['Tag pushed', 'Draft release created', 'Prepare notes and assets', 'Publish'],
        callouts: [
          { title: 'Draft first', body: 'Creating the release as draft avoids accidental public visibility.' },
          { title: 'Notes ready', body: 'Generated notes and assets can settle before users ever see them.' },
          { title: 'Publish last', body: 'Visibility is promoted only in the final explicit step.' },
        ],
      },
      6: {
        kicker: 'content strategy',
        title: 'Content Strategy:\nNative vs LLM Polish',
        subtitle: 'GitHub generated notes remain the baseline path. LLM polish stays an optional post-processing step.',
        left: {
          title: 'GitHub native generation',
          label: 'baseline path',
          items: [
            'Fastest path with the fewest failure points.',
            'Grounded in PR and compare data.',
            'Ideal for internal or developer-facing products.',
          ],
        },
        right: {
          title: 'LLM post-processing',
          label: 'optional path',
          items: [
            'Better for multilingual and user-facing phrasing.',
            'Can normalize tone and section structure.',
            'Must never replace the canonical release source.',
          ],
        },
      },
      7: {
        kicker: 'llm loop',
        title: 'The LLM Integration Loop:\nAI as a Post-Processing Stage',
        subtitle: 'The model should rewrite already-curated release notes, not inspect raw git history directly.',
        steps: [
          { title: '1', body: 'Fetch the target release.' },
          { title: '2', body: 'Generate the baseline GitHub notes.' },
          { title: '3', body: 'Send the baseline into the model.' },
          { title: '4', body: 'PATCH the polished output back into the release.' },
        ],
        tip: 'Practical tip: do not send raw git diffs into the model. Generated notes or compare summaries are cheaper, smaller, and less hallucination-prone.',
      },
      8: {
        kicker: 'prompt blueprint',
        title: 'A Prompt Blueprint for\nLow-Defect Release Notes',
        subtitle: 'A strong prompt does not create new facts. It narrows both the allowed claims and the tone of the output.',
        promptLines: [
          'Input is GitHub generated notes.',
          'Never add claims that are not present in the source.',
          'Keep version numbers, links, and PR ids unchanged.',
          'Return concise user-facing Markdown only.',
        ],
        badges: [
          { title: 'Reference integrity', body: 'Version names, links, and PR ids stay untouched.' },
          { title: 'Tone lock', body: 'Rewrite for readers without drifting into marketing fluff.' },
          { title: 'Hallucination suppression', body: 'The model is forbidden from introducing unsupported facts.' },
        ],
        button: 'Open full prompt',
        modalTitle: 'Full polishing prompt',
        modalDescription: 'The full prompt used for release-note polishing.',
      },
      9: {
        kicker: 'air-gapped bridge',
        title: 'Station 3:\nSafe Cross-Repo Automation',
        subtitle: 'The source repo and homepage repo should stay separate operators, not co-editors of the same files.',
        source: {
          title: 'Source repo',
          items: ['tag policy', 'draft -> publish', 'dispatch only'],
        },
        home: {
          title: 'Homepage repo',
          items: ['fetch release', 'generate Astro content', 'build + conditional commit'],
        },
        bridge: 'workflow_dispatch bridge',
        callouts: [
          { kind: 'bad', title: 'Anti-pattern', body: 'Letting the source repo overwrite homepage files breaks the security and ownership boundary.' },
          { kind: 'good', title: 'Safer pattern', body: 'The source repo only wakes the downstream workflow. The homepage repo imports and commits on its own.' },
        ],
        note: 'Allow the bridge to react only to published stable releases so replay paths and operator expectations stay predictable.',
      },
      10: {
        kicker: 'astro import',
        title: 'Station 4:\nIncremental Astro Homepage Rendering',
        bodyIntro: 'The homepage repository consumes the release body, turns it into content collection data, and only goes live when the build succeeds.',
        cards: [
          { title: 'source payload', body: 'Read the stable release through the GitHub Release API' },
          { title: 'content import', body: 'Convert it into frontmatter plus markdown content' },
          { title: 'live page', body: 'Rebuild Astro and publish only if the import still passes build' },
        ],
        steps: [
          'When the homepage workflow wakes up, the import script fetches the release API.',
          'The release body is written into an Astro content `.md` document.',
          'If the build passes, only real changes are committed. No-op reruns stay quiet.',
        ],
        workflowButton: 'Open workflow',
        workflowDescription: 'The full homepage import workflow YAML.',
        workflowTitle: 'Full homepage import workflow YAML',
        scriptButton: 'Open script',
        scriptDescription: 'The full release import script in JavaScript.',
        scriptTitle: 'Full import script JavaScript',
      },
      11: {
        kicker: 'verification',
        title: 'A Four-Point Integrity Dashboard',
        subtitle: 'The pipeline is not done when the workflow passes. It is done when visible release state is correct.',
        metrics: [
          { label: 'Tag routing', value: 'First required check', note: 'Did only stable tags enter the public release lane?' },
          { label: 'Safety valve', value: 'Publish-order check', note: 'Did the release stay draft until notes were truly ready?' },
          { label: 'Cross-repo ping', value: 'Execution check', note: 'Did the target repo workflow actually wake and run?' },
          { label: 'No-op proof', value: 'Duplicate-commit prevention', note: 'Does replay avoid creating junk commits when nothing changed?' },
        ],
      },
      12: {
        kicker: 'zero touch',
        title: 'Pipeline Complete:\nZero-Touch Releases',
        subtitle: 'The developer pushes only a Git tag. A split operating pipeline carries release truth all the way into the public site.',
        steps: [
          { title: 'Tag', body: 'stable tag push' },
          { title: 'Draft', body: 'draft release created' },
          { title: 'Notes', body: 'generated notes / optional polish' },
          { title: 'Dispatch', body: 'homepage workflow fired' },
          { title: 'Build', body: 'Astro import and site build' },
          { title: 'Live', body: 'public page updated' },
        ],
        note: 'Automation is an operating design that fixes who edits the release text and which repository owns public presentation.',
      },
      13: {
        title: 'Raise Your Operational Ceiling\nWith Automated Release Notes.',
        subtitle: 'Questions and pipeline discussions are always welcome.\nContact: support@studiojin.dev (Studio Jin)',
        resources: [
          { href: 'https://docs.github.com/en/actions', label: 'GitHub Actions' },
          { href: 'https://docs.github.com/en/rest/releases', label: 'GitHub REST API' },
          { href: 'https://platform.openai.com/docs', label: 'OpenAI API Reference' },
        ],
      },
    };
}

export default function SemverPdfScene({ scene }) {
  const { locale } = useLocale();
  const copy = normalizeSceneCopy(getCopy(locale)[scene]);

  switch (scene) {
    case 1:
      return <CoverScene t={copy} />;
    case 2:
      return <OverviewScene t={copy} />;
    case 3:
      return <TokenScene t={copy} />;
    case 4:
      return <RouterScene t={copy} />;
    case 5:
      return <SafetyScene t={copy} />;
    case 6:
      return <ComparisonScene t={copy} />;
    case 7:
      return <LoopScene t={copy} />;
    case 8:
      return <PromptScene t={copy} />;
    case 9:
      return <BridgeScene t={copy} />;
    case 10:
      return <AstroScene t={copy} />;
    case 11:
      return <DashboardScene t={copy} />;
    case 12:
      return <TimelineScene t={copy} />;
    case 13:
      return <ClosingScene t={copy} />;
    default:
      return null;
  }
}
