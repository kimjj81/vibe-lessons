import { useLocale } from '../i18n/LocaleContext';

export default function LocaleToggle() {
  const { locale, setLocale } = useLocale();

  return (
    <div className="locale-toggle" role="group" aria-label="Language switcher">
      {[
        { value: 'ko', label: '한국어' },
        { value: 'en', label: 'English' },
      ].map((option) => (
        <button
          key={option.value}
          className={locale === option.value ? 'locale-button locale-button-active' : 'locale-button'}
          onClick={() => setLocale(option.value)}
          type="button"
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
