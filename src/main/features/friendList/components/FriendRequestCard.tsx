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
        <Button shape='circle'>
          <User size={24} />
        </Button>
        <div>
          <p>{name}</p>
          <p style={{ fontSize: "15px", color: "#555" }} >{description}</p>
        </div>
      </div>
      <div className={styles.navigation}>
        <Button text='수락'>
          <Check size={16} />
        </Button>
        <Button text='거절'>
          <X size={16} />
        </Button>
      </div>
    </div>
  )
}

export default FriendRequestCard;