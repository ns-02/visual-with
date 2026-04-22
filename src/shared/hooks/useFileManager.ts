import { formatDate } from '@shared/utils/formatDate';
import { useRef } from 'react';

interface FileManagerActions {
  uploadFile: (file: File, date: string, id: string) => void;
  setIsLoading: (isLoading: boolean) => void;
  setCurrentFile: (file: File | null, date: string, id: string) => void;
  setProgress: (progress: number) => void;
  increaseProgress: () => void;
}

export const useFileManager = (
  id: string | null,
  actions: FileManagerActions,
) => {
  const {
    uploadFile,
    setIsLoading,
    setCurrentFile,
    setProgress,
    increaseProgress,
  } = actions;
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
    if (!file || !id) return;

    setIsLoading(true);
    setCurrentFile(file, formatDate(), id);
    await runProgress();
    setIsLoading(false);
    setCurrentFile(null, formatDate(), id);
    uploadFile(file, formatDate(), id);
  };

  return { loadAndUploadFile };
};
