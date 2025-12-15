import { useNavigate } from 'react-router-dom';
import { Container } from '@components';
import { AuthButton } from '@components/ui';
import styles from './Auth.module.css';

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <Container>
      <div className={styles.contents}>
        <div className={styles.title_container}>
          <h1 className={styles.title}>404 Not Found</h1>
        </div>
        <p>요청하신 페이지를 찾을 수 없습니다.</p>
        <AuthButton onClick={() => navigate(-1)}>돌아가기</AuthButton>
      </div>
    </Container>
  );
}

export default NotFoundPage;
