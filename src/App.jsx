import { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import GaConsentBanner from './components/GaConsentBanner';
import {
  consentStates,
  disableAnalytics,
  enableAnalytics,
  getConsentState,
  initGoogleAnalytics,
  isGaEnabled,
  setConsentState,
  trackPageView,
} from './analytics';
import CourseDeckPage from './pages/CourseDeckPage';
import CourseCatalogPage from './pages/CourseCatalogPage';
import CourseOverviewPage from './pages/CourseOverviewPage';
import './styles/globals.css';
import './styles/theme.css';

function AnalyticsTracker() {
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

export default function App() {
  return (
    <BrowserRouter>
      <AnalyticsTracker />
      <Routes>
        <Route path="/" element={<CourseCatalogPage />} />
        <Route path="/courses/:courseSlug/overview" element={<CourseOverviewPage />} />
        <Route path="/courses/:courseSlug" element={<CourseDeckPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
