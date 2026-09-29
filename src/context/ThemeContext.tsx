import React, { createContext, useContext, useState, useEffect } from 'react';
import type { AccentTheme } from '../types/theme';

interface ThemeContextType {
  theme: AccentTheme;
  setTheme: (theme: AccentTheme) => void;
}

const STORAGE_KEY = 'maaz_portfolio_accent_theme';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

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

export const useAccentTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useAccentTheme must be used within a ThemeProvider');
  }
  return context;
};
