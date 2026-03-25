import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import CourseDeckPage from './pages/CourseDeckPage';
import CourseCatalogPage from './pages/CourseCatalogPage';
import './styles/globals.css';
import './styles/theme.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CourseCatalogPage />} />
        <Route path="/courses/:courseSlug" element={<CourseDeckPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
