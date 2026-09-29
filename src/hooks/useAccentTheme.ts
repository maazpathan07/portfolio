import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import type { ThemeContextType } from '../context/ThemeContext';

export const useAccentTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useAccentTheme must be used within a ThemeProvider');
  }
  return context;
};
