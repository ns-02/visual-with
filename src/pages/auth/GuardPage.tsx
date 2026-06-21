import { Link, useNavigate } from 'react-router-dom';
import styles from './Auth.module.css';
import { Button } from '@shared/components';

type GuardPageType = 'login' | 'team';

function GuardPage({ type }: { type: GuardPageType }) {
  const navigate = useNavigate();

  return (
    <div className={styles.auth_layout}>
      <span></span>
      <div className={styles.auth_container}>
        <div className={styles.contents}>
          <div className={styles.title_container}>
            <h1 className={styles.title}>접근 제한</h1>
          </div>
          {type === 'login' && (
            <>
              <p>로그인 후 이용 가능한 서비스입니다.</p>
              <Button
                variant='auth'
                onClick={() => navigate('/login', { replace: true })}
              >
                로그인
              </Button>
            </>
          )}
          {type === 'team' && (
            <>
              <p>팀이 존재하지 않거나, 소속되지 않았습니다.</p>
              <Button
                variant='auth'
                onClick={() => navigate('/main', { replace: true })}
              >
                메인 화면으로
              </Button>
            </>
          )}
        </div>
      </div>

      <Link className={styles.link} to={'/'} replace={true}>
        ← 홈으로 돌아가기
      </Link>
    </div>
  );
}

export default GuardPage;
