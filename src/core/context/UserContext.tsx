import { createContext, useContext, useState } from 'react';

export type UserContextType = {
  userId: string | null;
  setUserId: (value: string) => void;
  userName: string | null;
  setUserName: (value: string) => void;
  userEmail: string | null;
  setUserEmail: (value: string) => void;
  nickname: string | null;
  setNickname: (value: string) => void;
  updateNickName: (value: string) => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [userId, setUserId] = useState<string | null>(null);
  const [userName, setUserName] = useState<string | null>(null);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [nickname, setNickname] = useState<string | null>(null);

  const updateNickName = () => {
    console.log('서버 호출하고 닉네임 변경됨');
  };

  return (
    <UserContext.Provider
      value={{
        userId,
        setUserId,
        userName,
        setUserName,
        userEmail,
        setUserEmail,
        nickname,
        setNickname,
        updateNickName,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export function useUser() {
  const v = useContext(UserContext);
  if (!v)
    throw new Error('useUser는 반드시 UserProvider 내부에서 사용해야 합니다.');
  return v;
}
