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
