const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim();
const CONSENT_STORAGE_KEY = 'ga_consent_status';
const CONSENT_DEFAULT = 'unknown';
const CONSENT_GRANTED = 'granted';
const CONSENT_DENIED = 'denied';

let initialized = false;

export const isGaEnabled = Boolean(GA_ID);
export const consentStates = {
  unknown: CONSENT_DEFAULT,
  granted: CONSENT_GRANTED,
  denied: CONSENT_DENIED,
};

const getPageViewPath = (pathname = '/', search = '') => `${pathname}${search}`;

export const getConsentState = () => {
  if (typeof window === 'undefined') {
    return CONSENT_DEFAULT;
  }

  const value = window.localStorage.getItem(CONSENT_STORAGE_KEY);
  if (value === CONSENT_GRANTED || value === CONSENT_DENIED) {
    return value;
  }

  return CONSENT_DEFAULT;
};

export const setConsentState = (state) => {
  if (typeof window === 'undefined') {
    return;
  }

  window.localStorage.setItem(CONSENT_STORAGE_KEY, state);
};

export const isConsentGranted = () => getConsentState() === CONSENT_GRANTED;

export const initGoogleAnalytics = () => {
  if (!GA_ID || typeof window === 'undefined' || initialized) {
    return;
  }

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = (...args) => {
    window.dataLayer.push(args);
  };

  window.gtag('js', new Date());
  window.gtag('consent', 'default', {
    analytics_storage: 'denied',
    ad_storage: 'denied',
  });
  window.gtag('config', GA_ID, {
    send_page_view: false,
    anonymize_ip: true,
  });

  initialized = true;
};

export const enableAnalytics = () => {
  initGoogleAnalytics();

  if (!window.gtag) {
    return;
  }

  window.gtag('consent', 'update', {
    analytics_storage: 'granted',
  });
};

export const disableAnalytics = () => {
  if (!window.gtag) {
    return;
  }

  window.gtag('consent', 'update', {
    analytics_storage: 'denied',
  });
};

export const trackPageView = (location) => {
  if (
    !isGaEnabled ||
    !isConsentGranted() ||
    typeof window === 'undefined' ||
    !window.gtag
  ) {
    return;
  }

  const path = getPageViewPath(location.pathname, location.search);

  window.gtag('event', 'page_view', {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  });
};
