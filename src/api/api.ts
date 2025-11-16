export const request = async (url: string, options = {}) => {
  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const json = await response.json();

    if (!response.ok) {
      const errorMessage = json.message || 'API 호출 오류';
      alert(errorMessage);
      throw new Error(json.message || 'API 호출 오류');  
    }

    return json;
  }
  catch (e: any) {
    if (e instanceof TypeError) {
      alert('네트워크 오류가 발생했습니다.');
      throw e;
    }
    throw e;
  }
};

export const loginUser = async (userId: string, password: string) => {
  return await request('/api/login', {
    method: 'POST',
    body: JSON.stringify({ userId, password })
  });
};

export const checkId = async (userId: string) => {
  return await request('/api/checkid', {
    method: 'POST',
    body: JSON.stringify({ userId })
  });
};

interface SignupModel {
  userId: string;
  password: string;
  email: string;
  name: string;
};

export const signupUser = async (
  { userId, password, email, name }: SignupModel
) => {
  return await request('/api/register', {
    method: 'POST',
    body: JSON.stringify({ userId, password, email, name })
  });
};