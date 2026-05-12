import { useEffect } from 'react';
import { useSettingsStore } from '../store/useSettingsStore';

export const useSettingsManager = () => {
  const theme = useSettingsStore((state) => state.theme);
  const fontSize = useSettingsStore((state) => state.fontSize);
  const layoutSize = useSettingsStore((state) => state.layoutSize);
  const layoutDensity = useSettingsStore((state) => state.layoutDensity);
  const pushSettings = useSettingsStore((state) => state.pushSettings);

  useEffect(() => {
    const root = window.document.documentElement;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const applyTheme = () => {
      const isDark =
        theme === 'dark' || (theme === 'system' && mediaQuery.matches);
      root.setAttribute('data-theme', isDark ? 'dark' : 'light');
    };

    applyTheme();

    if (theme === 'system') {
      mediaQuery.addEventListener('change', applyTheme);
      return () => mediaQuery.removeEventListener('change', applyTheme);
    }
  }, [theme]);

  return { theme, fontSize, layoutSize, layoutDensity, pushSettings };
};
