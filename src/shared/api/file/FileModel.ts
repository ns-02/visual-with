export interface ViewTeamFilesRequest {
  teamId: string;
}

export interface ViewTeamFilesResponse {
  id: number;
  fileName: string;
  filePath: string;
  fileType: string;
  fileSize: number;
  senderId: string;
  createdAt: string;
}

export interface UploadTeamFileRequest {
  teamId: string;
  file: File;
}

export interface UploadTeamFileResponse {
  id: number;
}

export interface DownloadTeamFileRequest {
  fileId: number;
}

export interface RenameTeamFileRequest {
  fileId: number;
  newFileName: string;
}

export interface DeleteTeamFileRequest {
  fileId: number;
}
