import { Link, useNavigate } from 'react-router-dom';
import { Container } from '@shared/components';
import styles from './Auth.module.css';
import { AuthButton } from '@shared/components/ui';

function GuardPage() {
  const navigate = useNavigate();

  return (
    <Container
      outerButton={
        <Link className={styles.link} to={'/'}>
          ← 홈으로 돌아가기
        </Link>
      }
    >
      <div className={styles.contents}>
        <div className={styles.title_container}>
          <h1 className={styles.title}>접근 제한</h1>
        </div>
        <p>로그인 후 이용 가능한 서비스입니다.</p>
        <AuthButton onClick={() => navigate('/login')}>로그인</AuthButton>
      </div>
    </Container>
  );
}

export default GuardPage;
