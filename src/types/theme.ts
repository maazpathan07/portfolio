export type AccentTheme = 'violet' | 'emerald' | 'cyan' | 'amber';

export interface ThemeOption {
  id: AccentTheme;
  name: string;
  color: string;
  lightColor: string;
  glowColor: string;
  emoji: string;
  desc: string;
}

export const THEME_OPTIONS: ThemeOption[] = [
  {
    id: 'violet',
    name: 'Electric Violet',
    color: '#8B5CF6',
    lightColor: '#A78BFA',
    glowColor: 'rgba(139, 92, 246, 0.35)',
    emoji: '🟣',
    desc: 'Signature Luxury Dark (Default)',
  },
  {
    id: 'emerald',
    name: 'Matrix Emerald',
    color: '#10B981',
    lightColor: '#34D399',
    glowColor: 'rgba(16, 185, 129, 0.35)',
    emoji: '🟢',
    desc: 'Cyber Terminal & High-Energy',
  },
  {
    id: 'cyan',
    name: 'Cyber Cyan',
    color: '#06B6D4',
    lightColor: '#22D3EE',
    glowColor: 'rgba(6, 182, 212, 0.35)',
    emoji: '🔵',
    desc: 'Futuristic Tech & Sleek Blue',
  },
  {
    id: 'amber',
    name: 'Sunset Amber',
    color: '#F59E0B',
    lightColor: '#FBBF24',
    glowColor: 'rgba(245, 158, 11, 0.35)',
    emoji: '🟠',
    desc: 'Warm Creative & Bold Accent',
  },
];
