import { User } from 'lucide-react';
import Button from '../../../../components/ui/Button';
import styles from './SelectFriendCard.module.css';

interface Props {
  name?: string;
  chat?: string;
  selected?: boolean;
}

const SelectFriendCard = ({ name, chat, selected }: Props) => {
  const containerStyle = selected ? styles.container_selected : styles.container;

  return (
    <div className={containerStyle}>
      <Button shape='circle' icon={User} iconSize={24} />
      <div>
        <p>{name}</p>
        <p style={{ fontSize: "15px", color: "#555" }} >{chat}</p>
      </div>
    </div>
  )
}

export default SelectFriendCard;