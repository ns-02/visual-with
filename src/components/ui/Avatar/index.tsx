import { User } from 'lucide-react';
import styles from './Avatar.module.css';

const Avatar = () => {
  return (
    <div className={styles.container}>
      <User size={24} />
    </div>
  );
};

export default Avatar;
