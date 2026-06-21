import { useFriendId } from '@core/hooks/useWorkspaceParams';
import { useFileManager } from '../../../shared/hooks/useFileManager';
import { useDirectFileStore } from '../store/useDirectFileStore';

export const useDirectFileManager = () => {
  const friendId = useFriendId();
  const actions = {
    uploadFile: useDirectFileStore((state) => state.uploadFile),
    setIsLoading: useDirectFileStore((state) => state.setIsLoading),
    setCurrentFile: useDirectFileStore((state) => state.setCurrentFile),
    setProgress: useDirectFileStore((state) => state.setProgress),
    increaseProgress: useDirectFileStore((state) => state.increaseProgress),
  };

  return useFileManager(friendId, actions);
};
