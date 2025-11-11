import styles from './FriendListSection.module.css'

function FriendContents() {
  return (
    <div className={styles.contents}>
      <span>친구 요청</span>
      <div>
        <span>정보 1</span>
      </div>
      <div>
        <span>정보 2</span>
      </div>
      <div>
        <span>정보 3</span>
      </div>
      <br></br>
      <span>친구 목록</span>
      <div>
        <span>정보 1</span>
      </div>
      <div>
        <span>정보 2</span>
      </div>
      <div>
        <span>정보 3</span>
      </div>
    </div>
  )
}

export default FriendContents;