import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

type Theme = 'light' | 'dark';
type FontSize = 'normal' | 'large' | 'xlarge';
type Contrast = 'normal' | 'high';

interface ThemeState {
  theme: Theme;
  toggleTheme: () => void;
  fontSize: FontSize;
  cycleFontSize: () => void;
  fontSizeLabel: string;
  contrast: Contrast;
  toggleContrast: () => void;
}

const ThemeContext = createContext<ThemeState | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === 'undefined') return 'light';
    const saved = localStorage.getItem('pa-theme') as Theme | null;
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  const [fontSize, setFontSize] = useState<FontSize>(() => {
    if (typeof window === 'undefined') return 'normal';
    return (localStorage.getItem('pa-fontsize') as FontSize) || 'normal';
  });

  const [contrast, setContrast] = useState<Contrast>(() => {
    if (typeof window === 'undefined') return 'normal';
    return (localStorage.getItem('pa-contrast') as Contrast) || 'normal';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
    localStorage.setItem('pa-theme', theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute('data-fontsize', fontSize);
    localStorage.setItem('pa-fontsize', fontSize);
  }, [fontSize]);

  useEffect(() => {
    document.documentElement.setAttribute('data-contrast', contrast);
    localStorage.setItem('pa-contrast', contrast);
  }, [contrast]);

  const cycleFontSize = () =>
    setFontSize((f) => (f === 'normal' ? 'large' : f === 'large' ? 'xlarge' : 'normal'));

  const value: ThemeState = {
    theme,
    toggleTheme: () => setTheme((t) => (t === 'light' ? 'dark' : 'light')),
    fontSize,
    cycleFontSize,
    fontSizeLabel: fontSize === 'normal' ? 'A' : fontSize === 'large' ? 'A+' : 'A++',
    contrast,
    toggleContrast: () => setContrast((c) => (c === 'normal' ? 'high' : 'normal')),
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
}
