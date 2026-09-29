import React, { useState, useEffect } from 'react';
import { ThemeContext } from './ThemeContext';
import type { AccentTheme } from '../types/theme';

const STORAGE_KEY = 'maaz_portfolio_accent_theme';

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<AccentTheme>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as AccentTheme | null;
      if (saved && ['violet', 'emerald', 'cyan', 'amber'].includes(saved)) {
        return saved;
      }
    } catch {
      // Fallback if localStorage is inaccessible
    }
    return 'violet';
  });

  useEffect(() => {
    // Apply data-accent attribute to root html element
    document.documentElement.setAttribute('data-accent', theme);
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // Ignore storage errors
    }
  }, [theme]);

  const setTheme = (newTheme: AccentTheme) => {
    setThemeState(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
