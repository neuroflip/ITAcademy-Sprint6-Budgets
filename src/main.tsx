import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter } from "react-router";

import './styles/index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename="/ITAcademy-Sprint6-Budgets">
      <App />
    </BrowserRouter>
  </StrictMode>);