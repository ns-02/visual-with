import { Dispatch, SetStateAction } from 'react';
import { Dialog, Group, Row } from '@shared/components';
import { Button } from '@shared/components';
import { useTeamManager } from '../hooks/useTeamManager';
import { useWorkspaceStore } from '@core/store/useWorkspaceStore';
import { useUserStore } from '@core/store/useUserStore';

interface TeamInvitationDialogProps {
  open: boolean;
  onOpenChange: Dispatch<SetStateAction<boolean>>;
  onCreate?: (value: string) => void;
}

const TeamInvitationDialog = ({
  open,
  onOpenChange,
}: TeamInvitationDialogProps) => {
  const userId = useUserStore((state) => state.user?.id);
  const membershipData = useWorkspaceStore((state) => state.membershipData);
  const teamData = useWorkspaceStore((state) => state.teamData);

  const invitationData = membershipData
    .filter((item) => item.userId === userId && item.status === 'PENDING')
    .map((membership) => {
      const teamName =
        teamData.find((item) => item.id === membership.teamId)?.name ??
        '알 수 없는 팀';

      return { ...membership, teamName };
    });

  const { onTeamInvitationByUserId } = useTeamManager();

  return (
    <Dialog
      title='초대받은 팀 목록'
      open={open}
      onOpenChange={onOpenChange}
      viewConfirm={false}
    >
      {invitationData.map((item) => (
        <div key={item.teamId}>
          <Group>
            <h4>초대 받음</h4>
          </Group>
          <Group>
            <p>"{item.teamName}"팀의 초대를 수락할까요?</p>
          </Group>
          <Row>
            <Button onClick={() => onTeamInvitationByUserId(item.teamId, true)}>
              수락
            </Button>
            <Button
              onClick={() => onTeamInvitationByUserId(item.teamId, false)}
            >
              거절
            </Button>
          </Row>
        </div>
      ))}
      {invitationData.length === 0 && (
        <Group>
          <p>현재 초대받은 팀이 없습니다.</p>
        </Group>
      )}
    </Dialog>
  );
};

export default TeamInvitationDialog;
