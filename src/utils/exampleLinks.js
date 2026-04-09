const githubBaseUrl = 'https://github.com/kimjj81/vibe-lessons/blob/main';

export function toGitHubExampleAssetHref(href = '') {
  if (typeof href !== 'string') return href;

  if (href.startsWith('/example/')) {
    return `${githubBaseUrl}/public${href}`;
  }

  return href;
}

