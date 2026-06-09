import { useEffect } from 'react';
import { useTeamId } from '@core/hooks/useWorkspaceParams';
import { useUserStore } from '@core/store/useUserStore';
import { useWorkspaceStore } from '@core/store/useWorkspaceStore';
import { useNavigate } from 'react-router-dom';

export const useTeamAccessGuard = () => {
  const teamId = useTeamId();
  const navigate = useNavigate();
  const membershipData = useWorkspaceStore((state) => state.membershipData);
  const userId = useUserStore((state) => state.user?.id);

  const isMember = membershipData.some(
    (item) =>
      item.teamId === teamId &&
      item.userId === userId &&
      item.status === 'ACCEPTED',
  );

  useEffect(() => {
    if (!isMember) {
      alert('잘못된 접근입니다.');

      if (window.history.length > 1) {
        navigate(-1);
      } else {
        navigate('/main', { replace: true });
      }
    }
  }, [isMember, navigate]);
};
