import FriendContents from '../layouts/FriendContents';
import styles from './FriendListPage.module.css';

function FriendListPage() {
  return (
    <div className={styles.page}>
      <FriendContents></FriendContents>
    </div>
  );
}

export default FriendListPage;
