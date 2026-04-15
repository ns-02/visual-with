import { useTeamStore } from '@core/store/useTeamStore';
import { useFileStore } from '../store/useFileStore';
import { formatDate } from '@shared/utils/formatDate';

export const useFileManager = () => {
  const selectTeamId = useTeamStore((state) => state.selectTeamId);
  const uploadFile = useFileStore((state) => state.uploadFile);
  const setIsLoading = useFileStore((state) => state.setIsLoading);
  const setCurrentFile = useFileStore((state) => state.setCurrentFile);

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const loadAndUploadFile = async (file: File | undefined) => {
    if (!file || !selectTeamId) return;

    setIsLoading(true);
    setCurrentFile(file, formatDate(), selectTeamId);
    await delay(3000);
    setIsLoading(false);
    setCurrentFile(null, formatDate(), selectTeamId);
    uploadFile(file, formatDate(), selectTeamId);
  };

  return { loadAndUploadFile };
};
