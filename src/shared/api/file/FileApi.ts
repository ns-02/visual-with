import { request } from '../baseApi';
import {
  ViewTeamFilesRequest,
  ViewTeamFilesResponse,
  UploadTeamFileRequest,
  UploadTeamFileResponse,
  DownloadTeamFileRequest,
  RenameTeamFileRequest,
  DeleteTeamFileRequest,
} from './FileModel';

export const viewTeamFiles = async ({
  teamId,
}: ViewTeamFilesRequest): Promise<ViewTeamFilesResponse[]> => {
  return await request(`/api/share/list/${teamId}`, { method: 'GET' });
};

export const uploadTeamFile = async ({
  teamId,
  file,
}: UploadTeamFileRequest): Promise<UploadTeamFileResponse> => {
  const formData = new FormData();
  formData.append('file', file);

  return await request(`/api/share/${teamId}`, {
    method: 'POST',
    body: formData,
  });
};

export const downloadTeamFile = async ({
  fileId,
}: DownloadTeamFileRequest): Promise<Blob> => {
  return await request(`/api/share/${fileId}`, {
    method: 'GET',
    responseType: 'blob',
  });
};

export const renameTeamFile = async ({
  fileId,
  newFileName,
}: RenameTeamFileRequest): Promise<void> => {
  return await request(`/api/share/rename/${fileId}`, {
    method: 'PUT',
    body: JSON.stringify({ newFileName }),
  });
};

export const deleteTeamFile = async ({
  fileId,
}: DeleteTeamFileRequest): Promise<void> => {
  return await request(`/api/share/delete/${fileId}`, { method: 'DELETE' });
};
