import { createContext, useContext, useState } from 'react';

type AuthContextType = {
  isLoggedin: boolean;
  setIsLoggedin: (value: boolean) => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isLoggedin, setIsLoggedin] = useState<boolean>(false);

  return (
    <AuthContext.Provider value={{ isLoggedin, setIsLoggedin }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const v = useContext(AuthContext);
  if (!v)
    throw new Error('useAuth는 반드시 AuthProvider 내부에서 사용해야 합니다.');
  return v;
}
