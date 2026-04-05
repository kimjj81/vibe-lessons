import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
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

export default function AnalyticsTracker() {
  const location = useLocation();
  const [consent, setConsent] = useState(() => getConsentState());

  const handleAccept = () => {
    setConsentState(consentStates.granted);
    setConsent(consentStates.granted);
  };

  const handleDeny = () => {
    setConsentState(consentStates.denied);
    setConsent(consentStates.denied);
    disableAnalytics();
  };

  useEffect(() => {
    if (!isGaEnabled || consent !== consentStates.granted) {
      return;
    }

    initGoogleAnalytics();
    enableAnalytics();
    trackPageView(location);
  }, [location, consent]);

  if (consent === consentStates.unknown) {
    return <GaConsentBanner onAccept={handleAccept} onDeny={handleDeny} />;
  }

  return null;
}
