import { Check, User, X } from 'lucide-react';
import Button from '@components/ui/Button';
import { FriendListCardProps } from '../types';
import styles from './FriendRequestCard.module.css';

const FriendRequestCard = ({ name, description, onAccept, onReject }: FriendListCardProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.info_contents}>
        <Button shape='circle'>
          <User size={24} />
        </Button>
        <div>
          <p>{name}</p>
          <p style={{ fontSize: "15px", color: "#555" }} >{description}</p>
        </div>
      </div>
      <div className={styles.navigation}>
        <Button text='수락' onCustomClick={onAccept}>
          <Check size={16} />
        </Button>
        <Button text='거절' onCustomClick={onReject}>
          <X size={16} />
        </Button>
      </div>
    </div>
  )
}

export default FriendRequestCard;