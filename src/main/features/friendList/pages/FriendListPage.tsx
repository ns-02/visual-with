import FriendContents from '../section/FriendContents';
import styles from './FriendListPage.module.css';

function FriendListPage() {
  return (
    <div className={styles.page}>
      <FriendContents></FriendContents>
    </div>
  );
}

export default FriendListPage;
