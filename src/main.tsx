import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import { applyTheme, getInitialTheme } from './theme';
import './styles/tokens.css';
import './styles/global.css';

// Set the theme before the first paint so the page doesn't flash.
applyTheme(getInitialTheme());

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
