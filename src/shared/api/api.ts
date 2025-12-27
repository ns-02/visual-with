import {
  checkIdRequest,
  checkIdResponse,
  CreateTeamRequest,
  CreateTeamResponse,
  LoginRequest,
  LoginResponse,
  SignupRequest,
  SignupResponse,
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
    const json = await response.json();

    if (!response.ok) {
      throw new Error(json.message || 'API 호출 오류');
    }

    return json;
  } catch (e: any) {
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
