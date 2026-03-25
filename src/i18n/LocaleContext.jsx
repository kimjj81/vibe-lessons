import { createContext, useContext, useEffect, useState } from 'react';

const LocaleContext = createContext(null);

const SUPPORTED_LOCALES = ['ko', 'en'];

function getInitialLocale() {
  if (typeof window === 'undefined') return 'ko';
  const stored = window.localStorage.getItem('studiojin-locale');
  return SUPPORTED_LOCALES.includes(stored) ? stored : 'ko';
}

export function LocaleProvider({ children }) {
  const [locale, setLocale] = useState(getInitialLocale);

  useEffect(() => {
    window.localStorage.setItem('studiojin-locale', locale);
    document.documentElement.lang = locale;
  }, [locale]);

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
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
