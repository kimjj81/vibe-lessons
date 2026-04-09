import { useEffect, useState } from 'react';
import GaConsentBanner from './GaConsentBanner';
import {
  consentStates,
  disableAnalytics,
  enableAnalytics,
  getConsentState,
  initGoogleAnalytics,
  isGaEnabled,
  setConsentState,
  trackPageView,
} from '../analytics';

function getWindowLocation() {
  if (typeof window === 'undefined') {
    return { pathname: '/', search: '' };
  }

  return {
    pathname: window.location.pathname,
    search: window.location.search,
  };
}

export default function AnalyticsTracker() {
  const [consent, setConsent] = useState(consentStates.unknown);

  useEffect(() => {
    setConsent(getConsentState());
  }, []);

  useEffect(() => {
    if (!isGaEnabled || consent !== consentStates.granted) {
      return;
    }

    initGoogleAnalytics();
    enableAnalytics();
    trackPageView(getWindowLocation());
  }, [consent]);

  const handleAccept = () => {
    setConsentState(consentStates.granted);
    setConsent(consentStates.granted);
  };

  const handleDeny = () => {
    setConsentState(consentStates.denied);
    setConsent(consentStates.denied);
    disableAnalytics();
  };

  if (consent === consentStates.unknown) {
    return <GaConsentBanner onAccept={handleAccept} onDeny={handleDeny} />;
  }

  return null;
}
