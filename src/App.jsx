import { useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { initGoogleAnalytics, isGaEnabled, trackPageView } from './analytics';
import CourseDeckPage from './pages/CourseDeckPage';
import CourseCatalogPage from './pages/CourseCatalogPage';
import './styles/globals.css';
import './styles/theme.css';

function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    if (!isGaEnabled) {
      return;
    }

    initGoogleAnalytics();
    trackPageView(location);
  }, [location]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <AnalyticsTracker />
      <Routes>
        <Route path="/" element={<CourseCatalogPage />} />
        <Route path="/courses/:courseSlug" element={<CourseDeckPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
