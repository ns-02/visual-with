import styles from './SelectFriendCard.module.css';
import Avatar from '@shared/components/ui/Avatar';

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
  const containerStyle = selected
    ? styles.container_selected
    : styles.container;

  const friendNameStyle = selected
    ? styles.friendName_selected
    : styles.friendName;

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
