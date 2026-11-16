import { useCallback, useRef } from 'react';
import { useTeamId } from '@core/hooks/useWorkspaceParams';
import { useUserStore } from '@core/store/useUserStore';
import { useWorkspaceStore } from '@core/store/useWorkspaceStore';
import { toast } from '@core/store/useToastStore';
import {
  viewTeamFiles,
  uploadTeamFile,
  downloadTeamFile,
  renameTeamFile,
  deleteTeamFile,
} from '@shared/api/file/FileApi';
import { TeamFileData } from '@shared/models/Workspace';
import { formatDate, formatTimeAgo } from '@shared/utils/formatDate';
import {
  getFormattedFileSize,
  getFormattedFileType,
} from '@shared/utils/formatFile';
import { useTeamFileStore } from '../store/useTeamFileStore';

export const useTeamFileManager = () => {
  const teamId = useTeamId();
  const pendingFiles = useRef(new Set<number>());

  const refreshFiles = useCallback(async () => {
    if (!teamId) return false;
    const requestId = Symbol();
    useTeamFileStore.setState((state) => ({
      listRequests: { ...state.listRequests, [teamId]: requestId },
    }));
    try {
      const files = await viewTeamFiles({ teamId });
      if (useTeamFileStore.getState().listRequests[teamId] !== requestId)
        return false;
      if (!Array.isArray(files)) throw new Error('잘못된 파일 목록 응답');
      const members = useWorkspaceStore.getState().membershipData;
      useTeamFileStore.getState().loadFiles(
        teamId,
        files.map((item) => ({
          id: item.id,
          teamId,
          fileName: item.fileName,
          fileType: getFormattedFileType(item.fileType),
          fileSize: getFormattedFileSize(item.fileSize),
          authorId: item.senderId,
          authorName:
            members.find(
              (member) =>
                member.teamId === teamId && member.userId === item.senderId,
            )?.userName || item.senderId,
          date: formatDate(new Date(item.createdAt)),
          timeAgo: formatTimeAgo(item.createdAt),
        })),
      );
      return true;
    } catch {
      if (useTeamFileStore.getState().listRequests[teamId] === requestId) {
        toast.error('파일 목록을 불러오지 못했습니다. 다시 시도해 주세요.');
      }
      return false;
    }
  }, [teamId]);

  const loadAndUploadFile = async (file: File | undefined) => {
    if (!file || !teamId || useTeamFileStore.getState().isLoading) return;
    const user = useUserStore.getState().user;
    const currentFile: TeamFileData = {
      id: 0,
      teamId,
      fileName: file.name,
      fileSize: getFormattedFileSize(file.size),
      fileType: getFormattedFileType(file.type),
      authorId: user?.id ?? '',
      authorName: user?.name ?? '',
      date: formatDate(),
    };
    useTeamFileStore.setState({ isLoading: true, currentFile });
    try {
      await uploadTeamFile({ teamId, file });
      await refreshFiles();
    } catch {
      toast.error('파일을 업로드하지 못했습니다.');
    } finally {
      if (useTeamFileStore.getState().currentFile === currentFile) {
        useTeamFileStore.setState({ isLoading: false, currentFile: null });
      }
    }
  };

  const downloadFile = async (file: TeamFileData) => {
    if (pendingFiles.current.has(file.id)) return;
    pendingFiles.current.add(file.id);
    try {
      const blob = await downloadTeamFile({ fileId: file.id });
      const url = URL.createObjectURL(blob);
      const anchor = document.createElement('a');
      try {
        anchor.href = url;
        anchor.download = file.fileName;
        document.body.appendChild(anchor);
        anchor.click();
      } finally {
        anchor.remove();
        setTimeout(() => URL.revokeObjectURL(url), 0);
      }
    } catch {
      toast.error('파일을 다운로드하지 못했습니다.');
    } finally {
      pendingFiles.current.delete(file.id);
    }
  };

  const mutateFile = async (
    fileId: number,
    action: () => Promise<void>,
    errorMessage: string,
  ) => {
    if (!teamId || pendingFiles.current.has(fileId)) return false;
    pendingFiles.current.add(fileId);
    try {
      await action();
      await refreshFiles();
      return true;
    } catch {
      toast.error(errorMessage);
      return false;
    } finally {
      pendingFiles.current.delete(fileId);
    }
  };

  const renameFile = (fileId: number, newFileName: string) =>
    mutateFile(
      fileId,
      () => renameTeamFile({ fileId, newFileName }),
      '파일 이름을 변경하지 못했습니다.',
    );

  const deleteFile = (fileId: number) =>
    mutateFile(
      fileId,
      () => deleteTeamFile({ fileId }),
      '파일을 삭제하지 못했습니다.',
    );

  return {
    refreshFiles,
    loadAndUploadFile,
    downloadFile,
    renameFile,
    deleteFile,
  };
};
