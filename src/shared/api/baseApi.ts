import {
  AcceptTeamInvitationByUserIdRequest,
  AcceptTeamInvitationByUserIdResponse,
  AcceptTeamInvitationByURLRequest,
  AcceptTeamInvitationByURLResponse,
  InviteTeamByURLRequest,
  InviteTeamByURLResponse,
  CreateTeamRequest,
  CreateTeamResponse,
  DeleteTeamRequest,
  DeleteTeamResponse,
  InviteTeamByUserIdRequest,
  InviteTeamByUserIdResponse,
  SearchUserRequest,
  SearchUserResponse,
  SelectTeamMemberListRequest,
  SelectTeamMemberListResponse,
  SelectTeamListRequest,
  SelectTeamListResponse,
} from './baseModel';

export class ApiError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.status = status;
  }
}

export const request = async (
  url: string,
  options: RequestInit & { responseType?: 'json' | 'blob' } = {},
) => {
  const { headers, responseType = 'json', ...restOptions } = options;
  const requestHeaders = new Headers(headers);
  if (!(restOptions.body instanceof FormData) && !requestHeaders.has('Content-Type')) {
    requestHeaders.set('Content-Type', 'application/json');
  }

  try {
    const response = await fetch(url, {
      ...restOptions,
      headers: requestHeaders,
    });

    if (!response.ok) {
      let message = 'API 호출 오류';
      try {
        const data: unknown = await response.json();
        if (data && typeof data === 'object' && 'message' in data &&
          typeof data.message === 'string' && data.message) {
          message = data.message;
        }
      } catch {
        // 오류 본문이 비어 있거나 JSON이 아니면 기본 메시지를 사용한다.
      }
      throw new ApiError(message, response.status);
    }

    if (responseType === 'blob') return await response.blob();
    const text = await response.text();
    return text ? JSON.parse(text) : null;
  } catch (e: unknown) {
    if (e instanceof TypeError) {
      throw new Error('네트워크 오류가 발생했습니다.');
    }
    throw e;
  }
};

export const createTeam = async ({
  userId,
  teamName,
}: CreateTeamRequest): Promise<CreateTeamResponse> => {
  return await request('/api/createteam', {
    method: 'POST',
    headers: {
      'X-USER-ID': userId,
    },
    body: JSON.stringify({ teamName }),
  });
};

export const deleteTeam = async ({
  userId,
  teamId,
}: DeleteTeamRequest): Promise<DeleteTeamResponse> => {
  return await request(`/api/teams/${teamId}`, {
    method: 'DELETE',
    headers: {
      'X-USER-ID': userId,
    },
    body: JSON.stringify({ teamId }),
  });
};

export const searchUser = async ({
  userId,
}: SearchUserRequest): Promise<SearchUserResponse> => {
  return await request(`/api/users/${userId}`, {
    method: 'GET',
  });
};

export const inviteTeamByUserId = async ({
  userId,
  invitedUserId,
  teamId,
}: InviteTeamByUserIdRequest): Promise<InviteTeamByUserIdResponse> => {
  return await request(`/api/teams/invitation/${teamId}`, {
    method: 'POST',
    headers: {
      'X-USER-ID': userId,
    },
    body: JSON.stringify({ userId: invitedUserId }),
  });
};

export const acceptTeamInvitationByUserId = async ({
  teamId,
  userId,
}: AcceptTeamInvitationByUserIdRequest): Promise<AcceptTeamInvitationByUserIdResponse> => {
  return await request(`/api/teams/invitation/${teamId}/${userId}`, {
    method: 'PUT',
  });
};

export const inviteTeamByURL = async ({
  teamId,
}: InviteTeamByURLRequest): Promise<InviteTeamByURLResponse> => {
  return await request(`/api/teams/invitation/${teamId}/geturl`, {
    method: 'GET',
  });
};

export const acceptTeamInvitationByURL = async ({
  teamId,
  invitationCode,
  userId,
}: AcceptTeamInvitationByURLRequest): Promise<AcceptTeamInvitationByURLResponse> => {
  return await request(`/api/teams/invitation/${teamId}/${invitationCode}`, {
    method: 'POST',
    body: JSON.stringify({ userId }),
  });
};

export const selectTeamMemberList = async ({
  teamId,
}: SelectTeamMemberListRequest): Promise<SelectTeamMemberListResponse[]> => {
  return await request(`/api/${teamId}/memberlist`, {
    method: 'GET',
  });
};

export const selectTeamList = async ({
  userId,
}: SelectTeamListRequest): Promise<SelectTeamListResponse[]> => {
  return await request(`/api/users/${userId}/teamList`, {
    method: 'GET',
  });
};
