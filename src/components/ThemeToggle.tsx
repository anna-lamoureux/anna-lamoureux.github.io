import { useState } from 'react';
import { applyTheme, getInitialTheme, saveTheme, type Theme } from '../theme';
import './ThemeToggle.css';

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z" />
    </svg>
  );
}

/** Switches between light and dark and remembers the choice. Shows the theme you'd switch to. */
export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const next: Theme = theme === 'light' ? 'dark' : 'light';

  function toggle() {
    setTheme(next);
    applyTheme(next);
    saveTheme(next);
  }

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-label={`Switch to ${next} theme`}
      title={`Switch to ${next} theme`}
    >
      {next === 'dark' ? <MoonIcon /> : <SunIcon />}
    </button>
  );
}
