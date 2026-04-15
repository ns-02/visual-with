import { useTeamStore } from '@core/store/useTeamStore';
import { useFileStore } from '../store/useFileStore';
import { formatDate } from '@shared/utils/formatDate';
import { useRef } from 'react';

export const useFileManager = () => {
  const selectTeamId = useTeamStore((state) => state.selectTeamId);
  const uploadFile = useFileStore((state) => state.uploadFile);
  const setIsLoading = useFileStore((state) => state.setIsLoading);
  const setCurrentFile = useFileStore((state) => state.setCurrentFile);
  const setProgress = useFileStore((state) => state.setProgress);
  const increaseProgress = useFileStore((state) => state.increaseProgress);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const runProgress = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    setProgress(0);

    const intervalId = setInterval(() => {
      increaseProgress();
    }, 0.3 * 1000);

    timerRef.current = intervalId;

    setTimeout(() => {
      clearInterval(intervalId);
      if (timerRef.current === intervalId) {
        timerRef.current = null;
      }
    }, 3 * 1000);
  };

  const loadAndUploadFile = async (file: File | undefined) => {
    if (!file || !selectTeamId) return;

    setIsLoading(true);
    setCurrentFile(file, formatDate(), selectTeamId);
    runProgress();
    await delay(3000);
    setIsLoading(false);
    setCurrentFile(null, formatDate(), selectTeamId);
    uploadFile(file, formatDate(), selectTeamId);
  };

  return { loadAndUploadFile };
};
