import { fileDataMocks } from '@mocks/FileDataMocks';
import { create } from 'zustand';
import { BaseFileData, TeamFileData, TeamId } from '@shared/models/Workspace';

interface TeamFileState {
  fileData: TeamFileData[];
  isLoading: boolean;
  currentFile: TeamFileData | null;
  progress: number;
  uploadFile: () => void;
  deleteFile: (fileId: number) => void;
  setIsLoading: (isLoading: boolean) => void;
  setCurrentFile: (fileData: BaseFileData | null, teamId: TeamId) => void;
  setProgress: (progress: number) => void;
  increaseProgress: () => void;
}

export const useTeamFileStore = create<TeamFileState>((set) => ({
  fileData: fileDataMocks || [],
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

  setCurrentFile: (fileData, teamId) => {
    if (!fileData) {
      set({ currentFile: null });
      return;
    }

    set((state) => ({
      currentFile: {
        ...fileData,
        id: state.fileData.reduce((max, item) => Math.max(max, item.id), 0) + 1,
        teamId,
      },
    }));
  },

  setProgress: (nextProgress) => set({ progress: nextProgress }),

  increaseProgress: () => set((state) => ({ progress: state.progress + 10 })),
}));
