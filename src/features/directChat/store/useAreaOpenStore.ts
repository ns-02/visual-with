import { create } from 'zustand';

interface AreaOpenState {
  isAreaOpen: boolean;
  toggleAreaOpen: () => void;
}

export const useAreaOpenStore = create<AreaOpenState>((set) => ({
  isAreaOpen: false,
  toggleAreaOpen: () => set((state) => ({ isAreaOpen: !state.isAreaOpen })),
}));
