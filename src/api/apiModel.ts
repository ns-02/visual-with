export interface checkIdRequest {
 userId: string;
};

export interface checkIdResponse {
 available: boolean;
};

export interface SignupRequest {
  userId: string;
  password: string;
  email: string;
  name: string;
};

export interface SignupResponse {
  id: number;
  userId: string;
  email: string;
  name: string;
};

export interface LoginRequest {
  userId: string;
  password: string;
};

export interface LoginResponse {
  username: string;
  token: string;
  message: string;
};