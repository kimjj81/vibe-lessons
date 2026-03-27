const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim();

let initialized = false;

export const isGaEnabled = Boolean(GA_ID);

const getPageViewPath = (pathname = '/', search = '') => `${pathname}${search}`;

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
  window.gtag('config', GA_ID, {
    send_page_view: false,
  });

  initialized = true;
};

export const trackPageView = (location) => {
  if (!isGaEnabled || typeof window === 'undefined' || !window.gtag) {
    return;
  }

  const path = getPageViewPath(location.pathname, location.search);

  window.gtag('event', 'page_view', {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  });
};
