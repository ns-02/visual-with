import { create } from 'zustand';
import { BaseFileData, DirectFileData } from '@shared/models/Workspace';

interface DirectFileState {
  fileData: DirectFileData[];
  isLoading: boolean;
  currentFile: DirectFileData | null;
  progress: number;
  uploadFile: () => void;
  deleteFile: (fileId: number) => void;
  setIsLoading: (isLoading: boolean) => void;
  setCurrentFile: (fileData: BaseFileData | null, friendId: string) => void;
  setProgress: (progress: number) => void;
  increaseProgress: () => void;
}

export const useDirectFileStore = create<DirectFileState>((set) => ({
  fileData: [],
  isLoading: false,
  currentFile: null,
  progress: 0,

  uploadFile: () =>
    set((state) => {
      if (!state.currentFile) return state;

      return {
        fileData: [...state.fileData, state.currentFile],
        currentFile: null,
      };
    }),

  deleteFile: (fileId) =>
    set((state) => ({
      fileData: state.fileData.filter((item) => item.id !== fileId),
    })),

  setIsLoading: (value) => set({ isLoading: value }),

  setCurrentFile: (fileData, friendId) => {
    if (!fileData) {
      set({ currentFile: null });
      return;
    }

    set((state) => ({
      currentFile: {
        ...fileData,
        id: state.fileData.reduce((max, item) => Math.max(max, item.id), 0) + 1,
        friendId,
      },
    }));
  },

  setProgress: (nextProgress) => set({ progress: nextProgress }),

  increaseProgress: () => set((state) => ({ progress: state.progress + 10 })),
}));
