import { User } from 'lucide-react';
import { Button } from '@components/ui';
import { SelectFriendCardProps } from '..';
import styles from './SelectFriendCard.module.css';
import Avatar from '@components/ui/Avatar';

const SelectFriendCard = ({
  name,
  chat,
  selected,
  onSelect,
}: SelectFriendCardProps) => {
  const containerStyle = selected
    ? styles.container_selected
    : styles.container;

  const handleCardSelect = () => {
    if (onSelect) onSelect();
  };

  return (
    <div className={containerStyle} onClick={handleCardSelect}>
      <Avatar />
      <div>
        <p>{name}</p>
        <p style={{ fontSize: '15px', color: '#555' }}>{chat}</p>
      </div>
    </div>
  );
};

export default SelectFriendCard;
