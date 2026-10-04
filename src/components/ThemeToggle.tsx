import { useState } from 'react';
import { applyTheme, getInitialTheme, saveTheme, type Theme } from '../theme';
import './ThemeToggle.css';

/** Switches between light and dark and remembers the choice. */
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
    >
      <span className="theme-toggle-icon" aria-hidden="true" />
      {next}
    </button>
  );
}
