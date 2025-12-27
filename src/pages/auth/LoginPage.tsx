import { FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@core/context/AuthContext';
import { useUser } from '@core/context/UserContext';
import { Container } from '@components';
import { loginUser } from '@shared/api/api';
import { AuthButton, AuthInput } from '@components/ui';
import styles from './Auth.module.css';

function LoginPage() {
  const { setIsLoggedin } = useAuth();
  const { setUserId, setUserName, setUserEmail } = useUser();

  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!id || !password) {
      alert('양식이 입력되지 않았습니다.');
      return;
    }

    try {
      const res = await loginUser({ userId: id, password });

      if (res.message !== 'ok') {
        return;
      }

      setIsLoggedin(true);
      setUserId(res.userId);
      setUserName(res.name);
      setUserEmail(res.userEmail);

      navigate('/main');
    } catch (e) {
      if (e instanceof Error) {
        alert(e.message);
      } else {
        alert('알 수 없는 오류가 발생했습니다.');
      }
    }
  };

  return (
    <Container
      outerButton={
        <Link className={styles.link} to={'/'}>
          ← 홈으로 돌아가기
        </Link>
      }
    >
      <form className={styles.login_form} onSubmit={(e) => handleLogin(e)}>
        <div className={styles.title_container}>
          <h1 className={styles.title}>로그인</h1>
        </div>
        <AuthInput
          name='userId'
          type='text'
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder='아이디를 입력하세요'
        />
        <AuthInput
          name='password'
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='비밀번호를 입력하세요'
        />
        <AuthButton type='submit'>로그인</AuthButton>

        <div className={styles.bottom_field}>
          <p>계정이 없으신가요?</p>
          <Link className={`${styles.link} ${styles.link_auth}`} to={'/signup'}>
            회원가입
          </Link>
        </div>
      </form>
    </Container>
  );
}

export default LoginPage;
