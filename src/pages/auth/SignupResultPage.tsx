import { useLocation, useNavigate } from 'react-router-dom';
import styles from './Auth.module.css';
import { Button } from '@shared/components';
import { toast } from '@core/store/useToastStore';
import { useEffect } from 'react';

function SignupResultPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const userId = (location.state as { userId?: string } | null)?.userId ?? null;

  useEffect(() => {
    if (!userId) {
      toast.error('잘못된 접근입니다.');
      navigate('/', { replace: true });
    }
  }, [userId, navigate]);

  if (!userId) {
    return null;
  }

  return (
    <div className={styles.contents}>
      <div className={styles.title_container}>
        <h1 className={styles.title}>회원가입 완료</h1>
      </div>
      <p>{`${userId}님의 회원가입을 환영합니다!`}</p>
      <Button onClick={() => navigate('/login')} variant='auth'>
        로그인
      </Button>
    </div>
  );
}

export default SignupResultPage;
