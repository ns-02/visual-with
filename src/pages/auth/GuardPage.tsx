import { Link } from "react-router-dom";
import Container from "@components/Container";
import styles from './Auth.module.css';

function GuardPage() {
  return (
    <Container>
      <div className={styles.contents}>
        <h3>로그인 후 이용 가능한 서비스입니다.</h3>
        <br />
        <Link to={"/"}>홈으로</Link>
        <Link to={"/login"}>로그인</Link>
      </div>
    </Container>
  )
}

export default GuardPage;