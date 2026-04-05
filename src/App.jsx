import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './router/AppRoutes';
import './styles/globals.css';
import './styles/theme.css';

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
