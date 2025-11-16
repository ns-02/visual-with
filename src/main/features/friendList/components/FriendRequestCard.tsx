import { Check, User, X } from 'lucide-react';
import Button from '../../../../components/ui/Button';
import styles from './FriendRequestCard.module.css';

interface Props {
  name?: string;
  description?: string;
}

const FriendRequestCard = ({ name, description }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.info_contents}>
        <Button shape='circle' icon={User} iconSize={24} />
        <div>
          <p>{name}</p>
          <p style={{ fontSize: "15px", color: "#555" }} >{description}</p>
        </div>
      </div>
      <div className={styles.navigation}>
        <Button text='수락' icon={Check} iconSize={16} />
        <Button text='거절' icon={X} iconSize={16} />
      </div>
    </div>
  )
}

export default FriendRequestCard;