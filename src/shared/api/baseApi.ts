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
} from './baseModel';

export const request = async (url: string, options = {}) => {
  const { headers, ...restOptions } = options as {
    headers?: Record<string, string>;
  };

  try {
    const response = await fetch(url, {
      ...restOptions,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
    });
    const text = await response.text();
    const data = text ? JSON.parse(text) : null;

    if (!response.ok) {
      throw new Error(data?.message || 'API 호출 오류');
    }

    return data;
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
