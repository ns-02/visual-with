import { FileData } from '@features/fileSharing/models/File';
import { fileDataMocks } from '@mocks/FileDataMocks';
import { create } from 'zustand';
import getFormattedFileSize from '../utils/getFormattedFileSize';
import getFormattedFileType from '../utils/getFormattedFileType';

interface FileState {
  fileData: FileData[];
  uploadFile: (file: File, formattedDate: string) => void;
  deleteFile: (fileId: number) => void;
}

export const useFileStore = create<FileState>((set) => ({
  fileData: fileDataMocks || [],

  uploadFile: (file, formattedDate) =>
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
        },
      ],
    })),

  deleteFile: (fileId) =>
    set((state) => ({
      fileData: state.fileData.filter((item) => item.id !== fileId),
    })),
}));
