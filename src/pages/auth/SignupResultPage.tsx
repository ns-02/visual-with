import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Container } from '@shared/components';
import styles from './Auth.module.css';
import { Button } from '@shared/components';

function SignupResultPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { userId } = location.state;

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
          <h1 className={styles.title}>회원가입 완료</h1>
        </div>
        <p>{`${userId}님의 회원가입을 환영합니다!`}</p>
        <Button onClick={() => navigate('/login')} variant='auth'>
          로그인
        </Button>
      </div>
    </Container>
  );
}

export default SignupResultPage;
