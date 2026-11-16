import { create } from 'zustand';
import { TeamFileData } from '@shared/models/Workspace';

interface TeamFileState {
  fileData: TeamFileData[];
  isLoading: boolean;
  currentFile: TeamFileData | null;
  listRequests: Record<string, symbol>;
  loadFiles: (teamId: string, files: TeamFileData[]) => void;
  reset: () => void;
}

export const useTeamFileStore = create<TeamFileState>((set) => ({
  fileData: [],
  isLoading: false,
  currentFile: null,
  listRequests: {},
  loadFiles: (teamId, files) =>
    set((state) => ({
      fileData: [
        ...state.fileData.filter((item) => item.teamId !== teamId),
        ...files,
      ],
    })),
  reset: () =>
    set({
      fileData: [],
      isLoading: false,
      currentFile: null,
      listRequests: {},
    }),
}));
