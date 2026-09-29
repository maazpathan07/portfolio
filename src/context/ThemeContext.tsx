import { createContext } from 'react';
import type { AccentTheme } from '../types/theme';

export interface ThemeContextType {
  theme: AccentTheme;
  setTheme: (theme: AccentTheme) => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
