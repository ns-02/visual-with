import { toast } from '@core/store/useToastStore';
import { useUserStore } from '@core/store/useUserStore';
import { useWorkspaceStore } from '@core/store/useWorkspaceStore';
import { loginUser, signupUser } from '@shared/api/auth/AuthApi';
import { createTeam } from '@shared/api/baseApi';
import { createMembership } from '@shared/models/Workspace';
import { useNavigate } from 'react-router-dom';

export const useDeveloperMananger = () => {
  const setUser = useUserStore((state) => state.setUser);
  const navigate = useNavigate();

  const userId = useUserStore((state) => state.user?.id);
  const userName = useUserStore((state) => state.user?.name);

  const createTeamInStore = useWorkspaceStore(
    (state) => state.createTeamInStore,
  );
  const setSelectTeam = useWorkspaceStore((state) => state.setSelectTeam);
  const addTeamRule = useWorkspaceStore((state) => state.addTeamRule);

  const user1su = {
    userId: 'amu',
    password: '12',
    email: 'amu@test.com',
    name: '아무',
  };

  const user2su = {
    userId: 'ray',
    password: '12',
    email: 'ray@test.com',
    name: '레이',
  };

  const user1lg = {
    userId: 'amu',
    password: '12',
  };

  const masterLogin = async () => {
    const res1 = await signupUser(user1su);
    const res2 = await signupUser(user2su);
    const res3 = await loginUser(user1lg);

    console.log(res1);
    console.log(res2);
    console.log(res3);

    setUser({
      id: res3.userId,
      name: res3.name,
      email: res3.userEmail,
    });
  };

  const masterCreateTeam = async () => {
    if (!userId || !userName) {
      toast.error('유저 아이디 없음');
      return;
    }

    const teamName = '한팀';

    const res = await createTeam({ userId, teamName });
    console.log(res);

    createTeamInStore(res.id, res.teamName);
    addTeamRule(
      createMembership(userId, userName, res.id, 'ADMIN', 'ACCEPTED'),
    );
    setSelectTeam(res.id);
  };

  const mapsToMain = () => {
    navigate('/main');
  };

  return {
    masterLogin,
    masterCreateTeam,
    mapsToMain,
  };
};
