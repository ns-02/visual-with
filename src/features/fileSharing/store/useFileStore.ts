import { FileData } from '@features/fileSharing/models/File';
import { fileDataMocks } from '@mocks/FileDataMocks';
import { create } from 'zustand';
import getFormattedFileSize from '../utils/getFormattedFileSize';
import getFormattedFileType from '../utils/getFormattedFileType';

interface FileState {
  files: FileData[];
  uploadFile: (file: File, formattedDate: string) => void;
  deleteFile: (fileId: number) => void;
}

export const useFileStore = create<FileState>((set) => ({
  files: fileDataMocks || [],

  uploadFile: (file, formattedDate) =>
    set((state) => ({
      files: [
        ...state.files,
        {
          id: state.files.reduce((max, item) => Math.max(max, item.id), 0) + 1,
          fileName: file.name,
          fileSize: getFormattedFileSize(file.size),
          fileType: getFormattedFileType(file.type),
          date: formattedDate,
          uploader: '아무개',
          timeAgo: '오늘',
        },
      ],
    })),

  deleteFile: (fileId) =>
    set((state) => ({
      files: state.files.filter((item) => item.id !== fileId),
    })),
}));
