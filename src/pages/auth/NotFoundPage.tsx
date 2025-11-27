import { useNavigate } from "react-router-dom";
import { Container } from "@components";
import styles from './Auth.module.css';

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <Container>
      <div className={styles.contents}>
        <h3>요청하신 페이지를 찾을 수 없습니다.</h3>
        <button onClick={() => navigate(-1)}>돌아가기</button>
      </div>
    </Container>
  )
}

export default NotFoundPage;