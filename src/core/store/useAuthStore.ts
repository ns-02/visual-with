import { create } from 'zustand';

interface AuthState {
  isLoggedin: boolean;
  setIsLoggedin: (value: boolean) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isLoggedin: false,
  setIsLoggedin: (value) => set({ isLoggedin: value }),
}));
