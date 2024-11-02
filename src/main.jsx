import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import Shop from './components/Shop';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Shop />
    <Footer />
  </StrictMode>,
);
