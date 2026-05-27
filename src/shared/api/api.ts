import {
  AddTodoRequest,
  AddTodoResponse,
  checkIdRequest,
  checkIdResponse,
  CreateTeamRequest,
  CreateTeamResponse,
  DeleteTeamRequest,
  DeleteTeamResponse,
  DeleteTodoRequest,
  InviteTeamByUserIdRequest,
  InviteTeamByUserIdResponse,
  LoginRequest,
  LoginResponse,
  SearchUserRequest,
  SearchUserResponse,
  SignupRequest,
  SignupResponse,
  UpdateTodoCompleteRequest,
  UpdateTodoContentRequest,
  ViewTodoRequest,
  ViewTodoResponse,
} from './apiModel';

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

export const loginUser = async ({
  userId,
  password,
}: LoginRequest): Promise<LoginResponse> => {
  return await request('/api/login', {
    method: 'POST',
    body: JSON.stringify({ userId, password }),
  });
};

export const checkId = async ({
  userId,
}: checkIdRequest): Promise<checkIdResponse> => {
  return await request('/api/checkid', {
    method: 'POST',
    body: JSON.stringify({ userId }),
  });
};

export const signupUser = async ({
  userId,
  password,
  email,
  name,
}: SignupRequest): Promise<SignupResponse> => {
  return await request('/api/register', {
    method: 'POST',
    body: JSON.stringify({ userId, password, email, name }),
  });
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

export const viewTodo = async ({
  teamId,
}: ViewTodoRequest): Promise<ViewTodoResponse> => {
  return await request(`/api/todo/${teamId}`, {
    method: 'GET',
  });
};

export const addTodoFetch = async (
  addRequest: AddTodoRequest,
): Promise<AddTodoResponse> => {
  return await request(`/api/todo`, {
    method: 'POST',
    body: JSON.stringify(addRequest),
  });
};

export const updateTodoContentFetch = async (
  updateRequest: UpdateTodoContentRequest,
): Promise<void> => {
  return await request(`/api/todo/update`, {
    method: 'PUT',
    body: JSON.stringify(updateRequest),
  });
};

export const updateTodoCompleteFetch = async (
  updateRequest: UpdateTodoCompleteRequest,
): Promise<void> => {
  return await request(`/api/todo/complete`, {
    method: 'PUT',
    body: JSON.stringify(updateRequest),
  });
};

export const deleteTodoFetch = async (
  deleteRequest: DeleteTodoRequest,
): Promise<void> => {
  return await request(`/api/todo/delete`, {
    method: 'DELETE',
    body: JSON.stringify(deleteRequest),
  });
};
