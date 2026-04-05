import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import AppRoutes from './router/AppRoutes';
import { renderSeoHead } from './seo/head';
import {
  getPageSeoByPath,
  getPublicLocalizedRouteEntries,
} from './seo/routeSeo';

export function render(url) {
  return renderToString(
    <StaticRouter location={url}>
      <AppRoutes />
    </StaticRouter>,
  );
}

export { getPageSeoByPath, getPublicLocalizedRouteEntries, renderSeoHead };
