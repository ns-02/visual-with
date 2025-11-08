import { Link } from 'react-router-dom';
import styles from './HomePage.module.css'

function HomePage() {

  return (
    <div className={styles.home}>
      <div className={styles.header}>
        <span className={styles['left-container']}>
          {/* <span>로고</span> */}
          <span>Visual With</span>
        </span>
        <span className={styles['right-container']}>
          <Link to={"/signup"}>회원가입</Link>
          <Link to={"/login"}>로그인</Link>
        </span>
      </div>
      <div className={styles.body}>
        <p>웹 소개</p>
      </div>
      <div className={styles.footer}>
        <span>Team 404</span>
        <span>정보</span>
        {/* <p>팀 소개</p>
        <p>팀 로고</p>
        <p>목원대학교</p>
        <p>이메일</p>
        <p>문의하기: 구글폼</p> */}
      </div>
    </div>
  )
}

export default HomePage;
