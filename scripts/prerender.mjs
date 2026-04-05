import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

function toOutputFile(distDir, pathname) {
  const trimmed = pathname.replace(/^\/+/, '').replace(/\/+$/, '');
  if (!trimmed) {
    return path.join(distDir, 'index.html');
  }

  return path.join(distDir, trimmed, 'index.html');
}

function injectApp(template, appHtml, headHtml, locale) {
  return template
    .replace('<html lang="ko">', `<html lang="${locale}">`)
    .replace('<!--app-head-->', headHtml)
    .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
}

function renderRedirectPage(target) {
  return `<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="refresh" content="0; url=${target}" />
    <meta name="robots" content="noindex, follow" />
    <link rel="canonical" href="${target}" />
    <title>Redirecting…</title>
  </head>
  <body>
    <p>Redirecting to <a href="${target}">${target}</a></p>
  </body>
</html>
`;
}

async function writePage(filePath, content) {
  await mkdir(path.dirname(filePath), { recursive: true });
  await writeFile(filePath, content, 'utf8');
}

async function main() {
  const cwd = process.cwd();
  const distDir = path.join(cwd, 'dist');
  const template = await readFile(path.join(distDir, 'index.html'), 'utf8');
  const serverEntryUrl = pathToFileURL(path.join(distDir, 'server', 'entry-server.js')).href;
  const {
    getPublicLocalizedRouteEntries,
    render,
    renderSeoHead,
  } = await import(serverEntryUrl);

  const localizedRoutes = getPublicLocalizedRouteEntries();

  for (const route of localizedRoutes) {
    const appHtml = render(route.pathname);
    const html = injectApp(template, appHtml, renderSeoHead(route.seo), route.locale);
    await writePage(toOutputFile(distDir, route.pathname), html);
  }

  await writePage(path.join(distDir, 'index.html'), renderRedirectPage('/ko/'));

  for (const route of localizedRoutes.filter((entry) => entry.pathname.includes('/courses/'))) {
    if (route.locale !== 'ko') {
      continue;
    }

    const legacyPath = route.pathname.replace(/^\/ko/, '');
    await writePage(toOutputFile(distDir, legacyPath), renderRedirectPage(route.pathname));
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
