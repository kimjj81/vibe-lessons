import { Link, useLocation } from 'react-router-dom';
import SeoHead from '../components/SeoHead';
import { getNotFoundSeo } from '../seo/routeSeo';
import { useLocale } from '../i18n/LocaleContext';
import { buildLocalizedPath } from '../i18n/localeRouting';

export default function NotFoundPage() {
  const { locale } = useLocale();
  const location = useLocation();
  const seo = getNotFoundSeo(locale, location.pathname);

  return (
    <main className="not-found-shell">
      <SeoHead seo={seo} />
      <div className="not-found-panel">
        <span className="catalog-eyebrow">{locale === 'ko' ? '페이지를 찾을 수 없음' : 'Page not found'}</span>
        <h1>{locale === 'ko' ? '요청한 페이지가 없습니다.' : 'The requested page does not exist.'}</h1>
        <p>
          {locale === 'ko'
            ? 'URL이 바뀌었거나 삭제된 페이지입니다. 공개된 강의 목록으로 이동해 주세요.'
            : 'The URL may have changed or the page may no longer exist. Go back to the published course index.'}
        </p>
        <Link className="catalog-link" to={buildLocalizedPath(locale, '/')}>
          {locale === 'ko' ? '강의 목록으로 돌아가기' : 'Back to lecture index'}
        </Link>
      </div>
    </main>
  );
}
