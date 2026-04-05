import { Link, useLocation } from 'react-router-dom';
import { useLocale } from '../i18n/LocaleContext';
import { switchLocalePath } from '../i18n/localeRouting';

export default function LocaleToggle() {
  const location = useLocation();
  const { locale } = useLocale();

  return (
    <div className="locale-toggle" role="group" aria-label="Language switcher">
      {[
        { value: 'ko', label: '한국어' },
        { value: 'en', label: 'English' },
      ].map((option) => (
        <Link
          key={option.value}
          className={locale === option.value ? 'locale-button locale-button-active' : 'locale-button'}
          to={{
            pathname: switchLocalePath(location.pathname, option.value),
            search: location.search,
            hash: location.hash,
          }}
        >
          {option.label}
        </Link>
      ))}
    </div>
  );
}
