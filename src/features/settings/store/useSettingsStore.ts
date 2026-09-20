import { create } from 'zustand';
import { PUSH_ITEMS, type PushKey } from '@features/settings/consts/pushItems';
import { persist } from 'zustand/middleware';

const createDefaultPushSettings = (): Record<PushKey, boolean> =>
  PUSH_ITEMS.reduce(
    (acc, { key, defaultEnabled }) => {
      acc[key] = defaultEnabled;
      return acc;
    },
    {} as Record<PushKey, boolean>,
  );

interface SettingsState {
  theme: string;
  fontSize: string;
  layoutSize: 'small' | 'medium' | 'large';
  layoutDensity: 'narrow' | 'medium' | 'wide';
  pushSettings: Record<PushKey, boolean>;
  setTheme: (theme: string) => void;
  setFontSize: (fontSize: string) => void;
  setLayoutSize: (layoutSize: 'small' | 'medium' | 'large') => void;
  setLayoutDensity: (layoutDensity: 'narrow' | 'medium' | 'wide') => void;
  setPushSettings: (pushSettings: Record<PushKey, boolean>) => void;
  resetPushSettings: () => void;
}

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      theme: 'light',
      fontSize: 'medium',
      layoutSize: 'medium',
      layoutDensity: 'medium',
      pushSettings: createDefaultPushSettings(),
      setTheme: (theme) => set({ theme }),
      setFontSize: (fontSize) => set({ fontSize }),
      setLayoutSize: (layoutSize) => set({ layoutSize }),
      setLayoutDensity: (layoutDensity) => set({ layoutDensity }),
      setPushSettings: (pushSettings) => set({ pushSettings }),
      resetPushSettings: () => set({ pushSettings: createDefaultPushSettings() }),
    }),
    {
      name: 'settings-storage',
      partialize: (state) => ({
        theme: state.theme,
        fontSize: state.fontSize,
        layoutSize: state.layoutSize,
        layoutDensity: state.layoutDensity,
        pushSettings: state.pushSettings,
      }),
    },
  ),
);
