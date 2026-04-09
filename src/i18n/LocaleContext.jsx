import { createContext, useContext, useEffect, useState } from 'react';
import { DEFAULT_LOCALE, normalizeLocale, normalizePathname } from './localeRouting';

const LocaleContext = createContext(null);

export function LocaleProvider({ children, initialLocale = DEFAULT_LOCALE, initialPathname = '/' }) {
  const [locale, setLocale] = useState(() => normalizeLocale(initialLocale));
  const pathname = normalizePathname(initialPathname);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocalePreference = (nextLocale) => {
    const normalizedLocale = normalizeLocale(nextLocale);

    if (typeof window !== 'undefined') {
      window.localStorage.setItem('studiojin-locale', normalizedLocale);
    }

    setLocale(normalizedLocale);
  };

  return (
    <LocaleContext.Provider value={{ locale, pathname, setLocalePreference }}>
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
