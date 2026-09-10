import { useState, useEffect } from 'react';

export type ThemeMode = 'light' | 'dark';

export function useTheme() {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('aslam_theme') as ThemeMode;
      if (saved) return saved;
      // Default to light (GEAR 5 / CLOUD WORLD as requested by user)
      return 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('aslam_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return { theme, toggleTheme, setTheme };
}
