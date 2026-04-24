import { useUserStore } from '@core/store/useUserStore';
import { BaseFileData } from '@shared/models/Workspace';
import { formatDate } from '@shared/utils/formatDate';
import {
  getFormattedFileSize,
  getFormattedFileType,
} from '@shared/utils/formatFile';
import { useRef } from 'react';

interface FileManagerActions {
  uploadFile: () => void;
  setIsLoading: (isLoading: boolean) => void;
  setCurrentFile: (fileData: BaseFileData | null, id: string) => void;
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
  const userId = useUserStore((state) => state.user?.id);
  const userName = useUserStore((state) => state.user?.name);
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
    if (!file || !id || !userId || !userName) return;

    setIsLoading(true);
    setCurrentFile(
      {
        id: 0,
        fileName: file.name,
        fileSize: getFormattedFileSize(file.size),
        fileType: getFormattedFileType(file.type),
        date: formatDate(),
        authorId: userId,
        authorName: userName,
        timeAgo: '오늘',
      },
      id,
    );
    await runProgress();
    setIsLoading(false);
    uploadFile();
  };

  return { loadAndUploadFile };
};
