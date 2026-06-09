import { useUserStore } from '@core/store/useUserStore';
import { getMe } from '@shared/api/auth/AuthApi';
import { useEffect } from 'react';

export const useUserBootstrap = () => {
  const setUser = useUserStore((state) => state.setUser);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const res = await getMe();

        setUser({ id: res.userId, name: res.name, email: '' });

        console.log(res);
      } catch (e) {
        console.error(e);
      }
    };

    loadUser();
  }, [setUser]);
};
