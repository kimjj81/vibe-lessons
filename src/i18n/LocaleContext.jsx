import { createContext, useContext, useEffect } from 'react';
import { normalizeLocale } from './localeRouting';

const LocaleContext = createContext(null);

export function LocaleProvider({ children, locale }) {
  const resolvedLocale = normalizeLocale(locale);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    window.localStorage.setItem('studiojin-locale', resolvedLocale);
    document.documentElement.lang = resolvedLocale;
  }, [resolvedLocale]);

  return (
    <LocaleContext.Provider value={{ locale: resolvedLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error('useLocale must be used within LocaleProvider');
  }
  return context;
}
