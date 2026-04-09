import { useLocale } from '../i18n/LocaleContext';
import { switchLocalePath } from '../i18n/localeRouting';

export default function LocaleToggle() {
  const { locale, pathname, setLocalePreference } = useLocale();

  return (
    <div className="locale-toggle" role="group" aria-label="Language switcher">
      {[
        { value: 'ko', label: '한국어' },
        { value: 'en', label: 'English' },
      ].map((option) => (
        <a
          key={option.value}
          className={locale === option.value ? 'locale-button locale-button-active' : 'locale-button'}
          href={switchLocalePath(pathname, option.value)}
          onClick={() => setLocalePreference(option.value)}
        >
          {option.label}
        </a>
      ))}
    </div>
  );
}
