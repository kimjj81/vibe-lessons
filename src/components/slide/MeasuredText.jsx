import { useEffect, useMemo, useState } from 'react';
import { layoutNextLine, layoutWithLines, prepareWithSegments } from '@chenglou/pretext';

function useFontsReady() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (typeof document === 'undefined') return undefined;
    let cancelled = false;

    const markReady = () => {
      if (!cancelled) {
        setReady(true);
      }
    };

    if (document.fonts.status === 'loaded') {
      markReady();
    } else {
      document.fonts.ready.then(markReady);
    }

    return () => {
      cancelled = true;
    };
  }, []);

  return ready;
}

function buildFont(weight, size, family, style = 'normal') {
  return `${style} ${weight} ${size}px ${family}`;
}

function fitFontSize({ fontFamily, fontStyle, fontWeight, lineHeightRatio, maxHeight, maxWidth, maxSize, minSize, text }) {
  let low = minSize;
  let high = maxSize;
  let bestSize = minSize;

  while (low <= high) {
    const candidateSize = Math.floor((low + high) / 2);
    const font = buildFont(fontWeight, candidateSize, fontFamily, fontStyle);
    const prepared = prepareWithSegments(text, font);
    const lineHeight = Math.round(candidateSize * lineHeightRatio);
    const result = layoutWithLines(prepared, maxWidth, lineHeight);

    if (result.height <= maxHeight) {
      bestSize = candidateSize;
      low = candidateSize + 1;
    } else {
      high = candidateSize - 1;
    }
  }

  return bestSize;
}

function balanceWidth({ font, lineHeight, maxWidth, minWidth, targetLineCount, text }) {
  const prepared = prepareWithSegments(text, font);
  let bestWidth = maxWidth;
  let bestScore = Number.POSITIVE_INFINITY;

  for (let width = maxWidth; width >= minWidth; width -= 6) {
    const result = layoutWithLines(prepared, width, lineHeight);
    if (result.lineCount > targetLineCount) continue;

    const raggedness = result.lines.reduce((sum, line) => {
      const missing = width - line.width;
      return sum + missing * missing;
    }, 0);
    const score = raggedness + (targetLineCount - result.lineCount) * 2200;

    if (score < bestScore) {
      bestScore = score;
      bestWidth = width;
    }
  }

  return bestWidth;
}

export function FittedText({
  align = 'left',
  className = '',
  fontFamily,
  fontStyle = 'normal',
  fontWeight = 700,
  lineHeightRatio = 1,
  maxHeight,
  maxSize,
  maxWidth,
  minSize = 20,
  style = {},
  tag: Tag = 'div',
  text,
}) {
  const fontsReady = useFontsReady();

  const fittedSize = useMemo(() => {
    if (!fontsReady) return maxSize;
    return fitFontSize({
      fontFamily,
      fontStyle,
      fontWeight,
      lineHeightRatio,
      maxHeight,
      maxWidth,
      maxSize,
      minSize,
      text,
    });
  }, [fontFamily, fontStyle, fontWeight, fontsReady, lineHeightRatio, maxHeight, maxSize, maxWidth, minSize, text]);

  return (
    <Tag
      className={className}
      style={{
        fontFamily,
        fontSize: `${fittedSize}px`,
        fontStyle,
        fontWeight,
        lineHeight: lineHeightRatio,
        margin: 0,
        maxWidth: `${maxWidth}px`,
        textAlign: align,
        whiteSpace: 'pre-wrap',
        ...style,
      }}
    >
      {text}
    </Tag>
  );
}

export function BalancedText({
  className = '',
  color = 'inherit',
  fontFamily,
  fontStyle = 'normal',
  fontWeight = 500,
  lineHeight = 30,
  maxWidth,
  minWidth = Math.floor(maxWidth * 0.56),
  style = {},
  targetLineCount = 3,
  text,
}) {
  const fontsReady = useFontsReady();

  const fontSize = style.fontSize ?? 18;
  const font = useMemo(() => buildFont(fontWeight, Number(fontSize), fontFamily, fontStyle), [fontFamily, fontSize, fontStyle, fontWeight]);
  const balancedWidth = useMemo(() => {
    if (!fontsReady) return maxWidth;
    return balanceWidth({
      font,
      lineHeight,
      maxWidth,
      minWidth,
      targetLineCount,
      text,
    });
  }, [font, fontsReady, lineHeight, maxWidth, minWidth, targetLineCount, text]);

  return (
    <div
      className={className}
      style={{
        color,
        fontFamily,
        fontSize,
        fontStyle,
        fontWeight,
        lineHeight: `${lineHeight}px`,
        margin: 0,
        maxWidth: `${balancedWidth}px`,
        whiteSpace: 'pre-wrap',
        ...style,
      }}
    >
      {text}
    </div>
  );
}

function mergeIntervals(intervals) {
  const sorted = [...intervals]
    .filter((interval) => interval.right > interval.left)
    .sort((left, right) => left.left - right.left);

  const merged = [];
  for (const interval of sorted) {
    const previous = merged[merged.length - 1];
    if (!previous || interval.left > previous.right) {
      merged.push({ ...interval });
      continue;
    }

    previous.right = Math.max(previous.right, interval.right);
  }

  return merged;
}

function carveSlots(width, intervals) {
  const merged = mergeIntervals(intervals);
  const slots = [];
  let cursor = 0;

  for (const interval of merged) {
    if (interval.left > cursor) {
      slots.push({ left: cursor, right: interval.left });
    }
    cursor = Math.max(cursor, interval.right);
  }

  if (cursor < width) {
    slots.push({ left: cursor, right: width });
  }

  return slots.filter((slot) => slot.right - slot.left > 48);
}

function layoutAroundObstacles({ font, height, lineHeight, obstacles, text, width }) {
  const prepared = prepareWithSegments(text, font);
  const lines = [];
  let cursor = { segmentIndex: 0, graphemeIndex: 0 };
  let y = 0;

  while (y + lineHeight <= height) {
    const blocked = obstacles
      .filter((obstacle) => y < obstacle.top + obstacle.height && y + lineHeight > obstacle.top)
      .map((obstacle) => ({
        left: obstacle.left,
        right: obstacle.left + obstacle.width,
      }));
    const slots = carveSlots(width, blocked);

    if (slots.length === 0) {
      y += lineHeight;
      continue;
    }

    for (const slot of slots) {
      const line = layoutNextLine(prepared, cursor, slot.right - slot.left);
      if (!line) {
        return lines;
      }

      lines.push({
        text: line.text,
        width: line.width,
        x: slot.left,
        y,
      });
      cursor = line.end;
    }

    y += lineHeight;
  }

  return lines;
}

export function ObstacleTextBlock({
  className = '',
  color = 'inherit',
  fontFamily,
  fontSize = 18,
  fontStyle = 'normal',
  fontWeight = 500,
  height,
  lineHeight = 30,
  obstacles = [],
  style = {},
  text,
  width,
}) {
  const fontsReady = useFontsReady();
  const font = useMemo(() => buildFont(fontWeight, fontSize, fontFamily, fontStyle), [fontFamily, fontSize, fontStyle, fontWeight]);
  const lines = useMemo(() => {
    if (!fontsReady) return [];
    return layoutAroundObstacles({
      font,
      height,
      lineHeight,
      obstacles,
      text,
      width,
    });
  }, [font, fontsReady, height, lineHeight, obstacles, text, width]);

  if (!fontsReady || lines.length === 0) {
    return (
      <div
        className={className}
        style={{
          color,
          fontFamily,
          fontSize: `${fontSize}px`,
          fontStyle,
          fontWeight,
          lineHeight: `${lineHeight}px`,
          whiteSpace: 'pre-wrap',
          width: `${width}px`,
          ...style,
        }}
      >
        {text}
      </div>
    );
  }

  return (
    <div
      className={className}
      style={{
        color,
        fontFamily,
        fontSize: `${fontSize}px`,
        fontStyle,
        fontWeight,
        height: `${height}px`,
        lineHeight: `${lineHeight}px`,
        position: 'relative',
        width: `${width}px`,
        ...style,
      }}
    >
      {lines.map((line, index) => (
        <span
          key={`${line.text}-${index}`}
          style={{
            left: `${line.x}px`,
            position: 'absolute',
            top: `${line.y}px`,
            whiteSpace: 'pre',
          }}
        >
          {line.text}
        </span>
      ))}
    </div>
  );
}
