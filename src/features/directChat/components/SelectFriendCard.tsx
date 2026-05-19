import Avatar from '@shared/components/Avatar';

const SelectFriendCard = ({
  name,
  chat,
  selected,
  onSelect,
}: {
  name?: string;
  chat?: string;
  selected?: boolean;
  onSelect?: () => void;
}) => {
  const containerStyle = `common_card_info cursor_pointer ${selected ? 'bg_pink_200' : 'bg_sub'}`;

  const friendNameStyle = selected ? 'text_pri_50' : 'text_sec_50';

  const handleCardSelect = () => {
    if (onSelect) onSelect();
  };

  return (
    <div className={containerStyle} onClick={handleCardSelect}>
      <Avatar />
      <div>
        <p className={friendNameStyle}>{name}</p>
        <p style={{ fontSize: '15px', color: '#555' }}>{chat}</p>
      </div>
    </div>
  );
};

export default SelectFriendCard;
