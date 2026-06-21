import { FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '@shared/api/auth/AuthApi';
import { Button } from '@shared/components';
import styles from './Auth.module.css';
import { useUserStore } from '@core/store/useUserStore';
import { toast } from '@core/store/useToastStore';

function LoginPage() {
  const setUser = useUserStore((state) => state.setUser);

  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!id || !password) {
      toast.error('양식이 입력되지 않았습니다.');
      return;
    }

    try {
      const res = await loginUser({ userId: id, password });

      if (res.message !== 'ok') {
        return;
      }

      setUser({
        id: res.userId,
        name: res.name,
        email: res.userEmail,
      });

      navigate('/main');
    } catch (e) {
      if (e instanceof Error) {
        toast.error(e.message);
      } else {
        toast.error('알 수 없는 오류가 발생했습니다.');
      }
    }
  };

  return (
    <form className={styles.login_form} onSubmit={(e) => handleLogin(e)}>
      <div className={styles.title_container}>
        <h1 className={styles.title}>로그인</h1>
      </div>
      <input
        name='userId'
        className={styles.auth_input}
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder='아이디를 입력하세요'
        autoComplete='off'
      />
      <input
        name='password'
        type='password'
        className={styles.auth_input}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='비밀번호를 입력하세요'
        autoComplete='off'
      />
      <Button type='submit' variant='auth'>
        로그인
      </Button>

      <div className={styles.bottom_field}>
        <p>계정이 없으신가요?</p>
        <Link className={`${styles.link} ${styles.link_auth}`} to={'/signup'}>
          회원가입
        </Link>
      </div>
    </form>
  );
}

export default LoginPage;
