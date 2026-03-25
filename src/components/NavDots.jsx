import { useLocale } from '../i18n/LocaleContext';

export default function NavDots({ current, total, onGoto }) {
  const { locale } = useLocale();

  return (
    <div className="nav-dots">
      {[...Array(total)].map((_, i) => (
        <button
          key={i}
          onClick={() => onGoto(i)}
          className={i === current ? 'nav-dot nav-dot-active' : 'nav-dot'}
          aria-label={locale === 'ko' ? `슬라이드 ${i + 1}` : `Slide ${i + 1}`}
        />
      ))}
    </div>
  );
}
