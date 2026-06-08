import { request } from '../baseApi';
import {
  LoginRequest,
  LoginResponse,
  checkIdRequest,
  checkIdResponse,
  SignupRequest,
  SignupResponse,
} from './apiModel';

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
