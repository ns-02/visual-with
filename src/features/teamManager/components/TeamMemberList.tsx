import { useWorkspaceStore } from '@core/store/useWorkspaceStore';
import MemberListCard from './MemberListCard';
import { useCurrentWorkspace } from '@core/hooks/useCurrentWorkspace';
import { ReactNode } from 'react';

const TeamMemberList = () => {
  const { teamId } = useCurrentWorkspace();

  const membershipData = useWorkspaceStore((state) => state.membershipData);
  const currentMembershipData = membershipData.filter(
    (item) => item.teamId === teamId && item.status === 'ACCEPTED',
  );

  return (
    <div>
      <MemberListLabel text='멤버 목록' count={currentMembershipData.length} />

      {currentMembershipData.map((item) => (
        <MemberListCard
          key={item.userId}
          id={item.userId}
          name={item.userId}
          description={item.ruleName}
        />
      ))}
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
