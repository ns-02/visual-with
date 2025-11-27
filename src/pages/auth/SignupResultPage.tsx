import { Link, useLocation } from "react-router-dom";
import { Container } from "@components";
import styles from './Auth.module.css';

function SignupResultPage() {
  const location = useLocation();
  const { userId } = location.state;

  return (
    <Container>
      <div className={styles.contents}>
        <h3>회원가입 완료</h3>
        <p>{`${userId}님의 회원가입을 환영합니다!`}</p>
        <br />
        <Link to={"/"}>홈으로</Link>
        <Link to={"/login"}>로그인</Link>
      </div>
    </Container>
  )
}

export default SignupResultPage;