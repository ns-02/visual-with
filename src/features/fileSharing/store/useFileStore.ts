import { FileData } from '@features/fileSharing/models/File';
import { fileDataMocks } from '@mocks/FileDataMocks';
import { TeamId } from '@shared/models/Team';
import { create } from 'zustand';
import getFormattedFileSize from '../utils/getFormattedFileSize';
import getFormattedFileType from '../utils/getFormattedFileType';

interface FileState {
  fileData: FileData[];
  isLoading: boolean;
  uploadFile: (file: File, formattedDate: string, teamId: TeamId) => void;
  deleteFile: (fileId: number) => void;
}

export const useFileStore = create<FileState>((set) => ({
  fileData: fileDataMocks || [],
  isLoading: false,

  uploadFile: (file, formattedDate, teamId) =>
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
          teamId,
        },
      ],
    })),

  deleteFile: (fileId) =>
    set((state) => ({
      fileData: state.fileData.filter((item) => item.id !== fileId),
    })),
}));
