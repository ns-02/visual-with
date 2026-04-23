import { useNavigate } from 'react-router-dom';
import { Container } from '@shared/components';
import { Button } from '@shared/components';
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
        <Button onClick={() => navigate(-1)} variant='auth'>
          돌아가기
        </Button>
      </div>
    </Container>
  );
}

export default NotFoundPage;
