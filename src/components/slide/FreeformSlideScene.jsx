import { useCourseDeck } from '../../courses/CourseDeckContext';

function resolveUnit(value) {
  if (value === undefined || value === null) return undefined;
  if (typeof value === 'number') return `${value}px`;
  return value;
}

export default function FreeformSlideScene({ children, className = '', sceneStyle = {}, stageStyle = {} }) {
  const deck = useCourseDeck();

  return (
    <div className={`freeform-slide-scene ${className}`.trim()} data-course-slug={deck?.course?.slug} style={sceneStyle}>
      <div className="freeform-slide-grid" />
      <div className="freeform-slide-stage" style={stageStyle}>
        {children}
      </div>
    </div>
  );
}

export function SceneLayer({ children, className = '', style = {}, ...position }) {
  return (
    <div
      className={`scene-layer ${className}`.trim()}
      style={{
        bottom: resolveUnit(position.bottom),
        height: resolveUnit(position.height),
        left: resolveUnit(position.left),
        right: resolveUnit(position.right),
        top: resolveUnit(position.top),
        width: resolveUnit(position.width),
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export function ScenePanel({ children, className = '', tone = 'default', style = {}, ...position }) {
  return (
    <SceneLayer
      className={`scene-panel scene-panel-${tone} ${className}`.trim()}
      style={style}
      {...position}
    >
      {children}
    </SceneLayer>
  );
}

export function SceneObject({ children, className = '', tone = 'default', style = {}, ...position }) {
  return (
    <SceneLayer
      className={`scene-object scene-object-${tone} ${className}`.trim()}
      style={style}
      {...position}
    >
      {children}
    </SceneLayer>
  );
}

export function SceneTextBlock({ children, className = '', style = {}, ...position }) {
  return (
    <SceneLayer
      className={`scene-text-block ${className}`.trim()}
      style={style}
      {...position}
    >
      {children}
    </SceneLayer>
  );
}

export function SceneLabel({ children, className = '', style = {}, ...position }) {
  return (
    <SceneLayer
      className={`scene-label ${className}`.trim()}
      style={style}
      {...position}
    >
      {children}
    </SceneLayer>
  );
}

export function SceneList({ className = '', items = [], marker = '▸', style = {} }) {
  return (
    <div className={`scene-list ${className}`.trim()} style={style}>
      {items.map((item) => (
        <div className="scene-list-item" key={item}>
          <span className="scene-list-marker">{marker}</span>
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
}

export function SceneMetricText({ className = '', label, note, value, valueColor = 'inherit', style = {} }) {
  return (
    <div className={`scene-metric-text ${className}`.trim()} style={style}>
      <div className="scene-metric-text-label">{label}</div>
      <div className="scene-metric-text-value" style={{ color: valueColor }}>{value}</div>
      {note ? <div className="scene-metric-text-note">{note}</div> : null}
    </div>
  );
}

export function SceneConnector({ className = '', d, stroke = 'rgba(148, 163, 184, 0.28)', strokeWidth = 2, style = {}, ...position }) {
  return (
    <SceneLayer className={`scene-connector ${className}`.trim()} style={style} {...position}>
      <svg className="scene-connector-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d={d} fill="none" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} vectorEffect="non-scaling-stroke" />
      </svg>
    </SceneLayer>
  );
}

export function ScenePill({ children, className = '', tone = 'default' }) {
  return <span className={`scene-pill scene-pill-${tone} ${className}`.trim()}>{children}</span>;
}
