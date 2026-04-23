import { create } from 'zustand';
import {
  getFormattedFileSize,
  getFormattedFileType,
} from '@shared/utils/formatFile';
import { DirectFileData } from '@shared/models/Workspace';

interface DirectFileState {
  fileData: DirectFileData[];
  isLoading: boolean;
  currentFile: DirectFileData | null;
  progress: number;
  uploadFile: (file: File, formattedDate: string, friendId: string) => void;
  deleteFile: (fileId: number) => void;
  setIsLoading: (isLoading: boolean) => void;
  setCurrentFile: (
    file: File | null,
    formattedDate: string,
    friendId: string,
  ) => void;
  setProgress: (progress: number) => void;
  increaseProgress: () => void;
}

export const useDirectFileStore = create<DirectFileState>((set) => ({
  fileData: [],
  isLoading: false,
  currentFile: null,
  progress: 0,

  uploadFile: (file, formattedDate, friendId) =>
    set((state) => ({
      fileData: [
        ...state.fileData,
        {
          id:
            state.fileData.reduce((max, item) => Math.max(max, item.id), 0) + 1,
          fileName: file.name,
          fileSize: getFormattedFileSize(file.size),
          fileType: getFormattedFileType(file.type),
          date: formattedDate,
          uploader: '아무개',
          timeAgo: '오늘',
          friendId,
        },
      ],
    })),

  deleteFile: (fileId) =>
    set((state) => ({
      fileData: state.fileData.filter((item) => item.id !== fileId),
    })),

  setIsLoading: (value) => set({ isLoading: value }),

  setCurrentFile: (file, formattedDate, friendId) => {
    if (!file) {
      set({ currentFile: null });
      return;
    }

    set((state) => ({
      currentFile: {
        id: state.fileData.reduce((max, item) => Math.max(max, item.id), 0) + 1,
        fileName: file.name,
        fileSize: getFormattedFileSize(file.size),
        fileType: getFormattedFileType(file.type),
        date: formattedDate,
        uploader: '아무개',
        timeAgo: '오늘',
        friendId,
      },
    }));
  },

  setProgress: (nextProgress) => set({ progress: nextProgress }),

  increaseProgress: () => set((state) => ({ progress: state.progress + 10 })),
}));
