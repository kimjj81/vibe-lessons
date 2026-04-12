import { highlightCode } from '../../lib/slide/highlight';

export default function CodeSurface({ className = '', content, language = 'text' }) {
  return (
    <pre className={`code-surface ${className}`.trim()}>
      <code dangerouslySetInnerHTML={{ __html: highlightCode(content, language) }} />
    </pre>
  );
}
