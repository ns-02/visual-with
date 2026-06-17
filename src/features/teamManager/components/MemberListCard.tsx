import Avatar from '@shared/components/Avatar';

interface MemberListCardProps {
  id?: string;
  name?: string;
  description?: string;
}

const MemberListCard = ({ name, description }: MemberListCardProps) => {
  return (
    <div className='common_card'>
      <div className='common_card_info'>
        <Avatar />
        <div>
          <p>{name}</p>
          <p className='text_sec_100'>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default MemberListCard;
