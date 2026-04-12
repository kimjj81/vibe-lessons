function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
}

function applyHighlightRules(content, rules) {
  let html = escapeHtml(content);

  for (const { pattern, replacer } of rules) {
    html = html.replace(pattern, replacer);
  }

  return html;
}

export function highlightCode(content, language = '') {
  const normalized = language.toLowerCase();

  const sharedStringRule = {
    pattern: /("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`(?:[^`\\]|\\.)*`)/g,
    replacer: '<span style="color:#f9a8d4;">$1</span>',
  };
  const sharedNumberRule = {
    pattern: /\b(\d+(?:\.\d+)?)\b/g,
    replacer: '<span style="color:#fca5a5;">$1</span>',
  };

  if (normalized === 'yaml' || normalized === 'yml') {
    return applyHighlightRules(content, [
      { pattern: /(^|\n)(\s*#.*?)(?=\n|$)/g, replacer: '$1<span style="color:#94a3b8;">$2</span>' },
      { pattern: /(^|\n)(\s*)([\w.-]+:)/g, replacer: '$1$2<span style="color:#67e8f9;">$3</span>' },
      { pattern: /(\$\{\{[^}]+\}\})/g, replacer: '<span style="color:#c4b5fd;">$1</span>' },
      sharedStringRule,
      sharedNumberRule,
      { pattern: /\b(true|false|null)\b/g, replacer: '<span style="color:#fde68a;">$1</span>' },
    ]);
  }

  if (normalized === 'javascript' || normalized === 'js' || normalized === 'typescript' || normalized === 'ts') {
    return applyHighlightRules(content, [
      { pattern: /(\/\/.*?$)/gm, replacer: '<span style="color:#94a3b8;">$1</span>' },
      {
        pattern: /\b(import|from|const|let|var|async|await|return|throw|if|else|try|catch|new|function|export|default|class)\b/g,
        replacer: '<span style="color:#67e8f9;">$1</span>',
      },
      { pattern: /\b(fetch|JSON|stringify|trim|join|writeFile|console|log|map|filter|reduce)\b/g, replacer: '<span style="color:#c4b5fd;">$1</span>' },
      { pattern: /(\$\{[^}]+\})/g, replacer: '<span style="color:#fde68a;">$1</span>' },
      sharedStringRule,
      sharedNumberRule,
      { pattern: /\b(true|false|null|undefined)\b/g, replacer: '<span style="color:#fde68a;">$1</span>' },
    ]);
  }

  if (normalized === 'bash' || normalized === 'shell' || normalized === 'sh') {
    return applyHighlightRules(content, [
      { pattern: /(^|\n)(\s*#.*?)(?=\n|$)/g, replacer: '$1<span style="color:#94a3b8;">$2</span>' },
      { pattern: /\b(git|gh|curl|jq|node|npm|echo|set|if|then|fi)\b/g, replacer: '<span style="color:#67e8f9;">$1</span>' },
      { pattern: /(\$\{[^}]+\}|\$[A-Z_][A-Z0-9_]*)/g, replacer: '<span style="color:#c4b5fd;">$1</span>' },
      sharedStringRule,
      sharedNumberRule,
    ]);
  }

  if (normalized === 'json') {
    return applyHighlightRules(content, [
      { pattern: /("(?:[^"\\]|\\.)*")(\s*:)/g, replacer: '<span style="color:#67e8f9;">$1</span>$2' },
      sharedStringRule,
      sharedNumberRule,
      { pattern: /\b(true|false|null)\b/g, replacer: '<span style="color:#fde68a;">$1</span>' },
    ]);
  }

  return escapeHtml(content);
}

export function highlightInlineCode(content) {
  return escapeHtml(content);
}

export { escapeHtml };
