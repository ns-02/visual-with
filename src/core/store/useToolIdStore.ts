import { ToolId } from '@shared/models/ToolId';
import { create } from 'zustand';

interface ToolIdState {
  toolId: ToolId | null;
  setToolId: (id: ToolId | null) => void;
}

export const useToolIdStore = create<ToolIdState>((set) => ({
  toolId: null,
  setToolId: (id) => set({ toolId: id }),
}));
