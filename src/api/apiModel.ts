export interface checkIdRequest {
 userId: string;
};

export interface checkIdResponse {
 available: boolean;
};

// 회원가입 요청
export interface SignupRequest {
  userId: string;
  password: string;
  email: string;
  name: string;
};

// 회원가입 응답 (성공)
export interface SignupResponse {
  id: number;
  user_id: string;
};

// 로그인 요청
export interface LoginRequest {
  userId: string;
  password: string;
};

// 로그인 응답 (성공)
export interface LoginResponse {
  userId: string;
  name: string;
  userEmail: string;
  token: string;
  message: string;
};