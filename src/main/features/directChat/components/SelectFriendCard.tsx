import { User } from 'lucide-react';
import Button from '../../../../components/ui/Button';
import styles from './SelectFriendCard.module.css';
import { SelectFriendCardProps } from '../types';

const SelectFriendCard = ({ name, chat, selected }: SelectFriendCardProps) => {
  const containerStyle = selected ? styles.container_selected : styles.container;

  return (
    <div className={containerStyle}>
      <Button shape='circle'>
        <User size={24} />
      </Button>
      <div>
        <p>{name}</p>
        <p style={{ fontSize: "15px", color: "#555" }} >{chat}</p>
      </div>
    </div>
  )
}

export default SelectFriendCard;