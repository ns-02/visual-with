import { toast } from '@core/store/useToastStore';
import { useUserStore } from '@core/store/useUserStore';
import { getMe } from '@shared/api/auth/AuthApi';
import { useEffect } from 'react';

export const useUserBootstrap = () => {
  const setUser = useUserStore((state) => state.setUser);
  const setUserBootstrapped = useUserStore(
    (state) => state.setUserBootstrapped,
  );

  useEffect(() => {
    let cancelled = false;

    const loadUser = async () => {
      setUserBootstrapped(false);

      try {
        const res = await getMe();

        if (!cancelled) {
          setUser({ id: res.userId, name: res.name, email: '' });
        }
      } catch (e) {
        toast.error(`${e}`);
      } finally {
        if (!cancelled) {
          setUserBootstrapped(true);
        }
      }
    };

    loadUser();

    return () => {
      cancelled = true;
    };
  }, [setUser, setUserBootstrapped]);
};
