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
  const delayTimerRef = useRef<NodeJS.Timeout | null>(null);

  const runProgress = async () => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (delayTimerRef.current) clearTimeout(delayTimerRef.current);

    setProgress(0);

    const intervalId = setInterval(() => {
      increaseProgress();
    }, 0.3 * 1000);

    timerRef.current = intervalId;

    return new Promise<void>((resolve) => {
      const timeoutId = setTimeout(() => {
        clearInterval(intervalId);
        if (timerRef.current === intervalId) timerRef.current = null;

        delayTimerRef.current = null;
        resolve();
      }, 3000);

      delayTimerRef.current = timeoutId;
    });
  };

  const loadAndUploadFile = async (file: File | undefined) => {
    if (!file || !selectTeamId) return;

    setIsLoading(true);
    setCurrentFile(file, formatDate(), selectTeamId);
    await runProgress();
    setIsLoading(false);
    setCurrentFile(null, formatDate(), selectTeamId);
    uploadFile(file, formatDate(), selectTeamId);
  };

  return { loadAndUploadFile };
};
