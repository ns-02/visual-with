import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CircleUser } from 'lucide-react';
import { useUserStore } from '@core/store/useUserStore';
import { Button, Skeleton } from '@shared/components';
import { useTeamManager } from '../hooks/useTeamManager';
import { toast } from '@core/store/useToastStore';

const InviteLinkPage = () => {
  const navigate = useNavigate();
  const userId = useUserStore((state) => state.user?.id);
  const isUserBootstrapped = useUserStore((state) => state.isUserBootstrapped);
  const { onAcceptTeamInvitationByURL } = useTeamManager();
  const [isAccepting, setIsAccepting] = useState(false);
  const { teamId, invitationCode } = useParams<{
    teamId: string;
    invitationCode: string;
  }>();

  const handleAcceptInvitation = async () => {
    if (!teamId || !invitationCode) return;

    if (!isUserBootstrapped) return;

    if (!userId) {
      toast.error('로그인 후 초대를 수락할 수 있습니다.');
      navigate('/login');
      return;
    }

    setIsAccepting(true);
    try {
      const accepted = await onAcceptTeamInvitationByURL(
        teamId,
        invitationCode,
      );

      if (accepted) {
        navigate(`/main/${teamId}`);
        return;
      }

      toast.error('초대 수락에 실패했습니다.');
    } finally {
      setIsAccepting(false);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: '16px',
        gap: '8px',
      }}
    >
      <div
        style={{
          backgroundColor: '#f5f5f5',
          width: '280px',
          display: 'flex',
          padding: '16px',
          gap: '12px',
        }}
      >
        <Button shape='square'>
          <CircleUser size={24} />
        </Button>
        <div>
          <p>{`팀 ID: ${teamId}`}</p>
          <p style={{ fontSize: '15px', color: '#555' }}>{`리더: `}</p>
        </div>
      </div>
      <div style={{ textAlign: 'center' }}>
        {!isUserBootstrapped ? (
          <Skeleton
            width={160}
            height={16}
            style={{ margin: '0 auto' }}
          />
        ) : (
          `접속중인 유저 ID: ${userId}`
        )}
      </div>
      <Button
        style={{ backgroundColor: 'aliceblue' }}
        text={isAccepting ? '수락 중...' : '초대 수락하기'}
        onClick={handleAcceptInvitation}
        disabled={isAccepting || !isUserBootstrapped}
      />
    </div>
  );
};

export default InviteLinkPage;
