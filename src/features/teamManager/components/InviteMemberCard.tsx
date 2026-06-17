import Avatar from '@shared/components/Avatar';
import { ReactNode } from 'react';

interface InviteMemberCardProps {
  id?: string;
  name?: string;
  description?: string;
  children?: ReactNode;
}

const InviteMemberCard = ({
  name,
  description,
  children,
}: InviteMemberCardProps) => {
  return (
    <div className='common_card' style={{ marginBottom: 0 }}>
      <div className='common_card_info'>
        <Avatar />
        <div>
          <p>{name}</p>
          <p className='text_sec_100'>{description}</p>
        </div>
      </div>
      <div className='common_card_nav'>{children}</div>
    </div>
  );
};

export default InviteMemberCard;
