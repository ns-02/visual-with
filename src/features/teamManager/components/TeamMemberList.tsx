import { useWorkspaceStore } from '@core/store/useWorkspaceStore';
import { useCurrentWorkspace } from '@core/hooks/useCurrentWorkspace';
import { ReactNode } from 'react';
import { Avatar, InfoCard } from '@shared/components';

const TeamMemberList = () => {
  const { teamId } = useCurrentWorkspace();

  const membershipData = useWorkspaceStore((state) => state.membershipData);
  const currentMembershipData = membershipData.filter(
    (item) => item.teamId === teamId && item.status === 'ACCEPTED',
  );

  return (
    <div>
      <MemberListLabel text='멤버 목록' count={currentMembershipData.length} />

      <div className='card_list'>
        {currentMembershipData.map((item) => (
          <InfoCard
            key={item.userId}
            title={item.userName}
            content={item.ruleName}
            iconElement={<Avatar />}
          />
        ))}
      </div>
    </div>
  );
};

const MemberListLabel = ({
  text,
  count,
  children,
}: {
  text?: string;
  count?: number;
  children?: ReactNode;
}) => {
  if (text === '친구 요청' && !count) {
    return null;
  }

  return (
    <div className='common_card_label'>
      {children}
      <span>{text}</span>
      <span className='text_sec_200'>{count}</span>
    </div>
  );
};

export default TeamMemberList;
