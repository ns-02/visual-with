import { useTeamId } from '@core/hooks/useWorkspaceParams';
import { useTeamFileStore } from '../store/useTeamFileStore';
import { useFileManager } from '../../../shared/hooks/useFileManager';

export const useTeamFileManager = () => {
  const teamId = useTeamId();
  const actions = {
    uploadFile: useTeamFileStore((state) => state.uploadFile),
    setIsLoading: useTeamFileStore((state) => state.setIsLoading),
    setCurrentFile: useTeamFileStore((state) => state.setCurrentFile),
    setProgress: useTeamFileStore((state) => state.setProgress),
    increaseProgress: useTeamFileStore((state) => state.increaseProgress),
  };

  return useFileManager(teamId, actions);
};
