import { userDataMocks } from '@mocks/UserDataMocks';
import { create } from 'zustand';

interface UserState {
  userId: string | null;
  setUserId: (value: string) => void;
  userName: string | null;
  setUserName: (value: string) => void;
  userEmail: string | null;
  setUserEmail: (value: string) => void;
  nickname: string | null;
  setNickname: (value: string) => void;
}

export const useUserStore = create<UserState>((set) => ({
  userId: userDataMocks.userId,
  userName: userDataMocks.userName,
  userEmail: userDataMocks.userEmail,
  nickname: userDataMocks.nickname,
  // userId: null,
  // userName: null,
  // userEmail: null,
  // nickname: null,

  setUserId: (value) => set({ userId: value }),

  setUserName: (value) => set({ userName: value }),

  setUserEmail: (value) => set({ userEmail: value }),

  setNickname: (value) => set({ nickname: value }),
}));
