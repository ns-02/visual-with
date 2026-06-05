import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CircleUser } from 'lucide-react';
import { useUserStore } from '@core/store/useUserStore';
import { Container } from '@shared/components';
import { Button } from '@shared/components';
import { useTeamManager } from '../hooks/useTeamManager';

const InviteLinkPage = () => {
  const navigate = useNavigate();
  const userId = useUserStore((state) => state.user?.id);
  const userName = useUserStore((state) => state.user?.name);
  const { onAcceptTeamInvitationByURL } = useTeamManager();
  const [isAccepting, setIsAccepting] = useState(false);
  const { teamId, invitationCode } = useParams<{
    teamId: string;
    invitationCode: string;
  }>();

  const handleAcceptInvitation = async () => {
    if (!teamId || !invitationCode) return;

    if (!userId) {
      alert('로그인 후 초대를 수락할 수 있습니다.');
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

      alert('초대 수락에 실패했습니다.');
    } finally {
      setIsAccepting(false);
    }
  };

  return (
    <Container>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div
          style={{
            backgroundColor: '#f9f9f9',
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
            <p>{`ㅇㅇ팀`}</p>
            <p style={{ fontSize: '15px', color: '#555' }}>{`리더: ㅇㅇㅇ`}</p>
            <p style={{ fontSize: '15px', color: '#555' }}>
              {`접속중인 유저: ` + userId + `, ` + userName}
            </p>
          </div>
        </div>
        <p style={{ textAlign: 'center' }}>
          {`team: ${teamId}, code: ${invitationCode}`}
        </p>
        <Button
          text={isAccepting ? '수락 중...' : '초대 수락하기'}
          onClick={handleAcceptInvitation}
          disabled={isAccepting}
        />
      </div>
    </Container>
  );
};

export default InviteLinkPage;
