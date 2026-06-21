import { FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CheckBox } from '@shared/components';
import { checkId, signupUser } from '@shared/api/auth/AuthApi';
import { Button } from '@shared/components';
import styles from './Auth.module.css';
import PrivacyPolicyModal from './PrivacyPolicyModal';
import { toast } from '@core/store/useToastStore';

function SignupPage() {
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  const handleSignUp = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!id || !password || !checkPassword || !name || !email) {
      toast.error('양식이 입력되지 않았습니다.');
      return;
    }

    if (password !== checkPassword) {
      toast.error('비밀번호가 일치하지 않습니다.');
      return;
    }

    if (!isValid) {
      toast.error('사용 가능한 아이디인지 확인해주세요.');
      return;
    }

    if (!agreedToTerms) {
      toast.error('개인정보 처리방침에 동의해주세요.');
      return;
    }

    try {
      const res = await signupUser({ userId: id, password, email, name });

      if (!res) {
        return;
      }

      navigate('/signup-result', { state: { userId: res.user_id } });
    } catch (e) {
      if (e instanceof Error) {
        toast.error(e.message);
      } else {
        toast.error('알 수 없는 오류가 발생했습니다.');
      }
    }
  };

  const handleIdCheck = async () => {
    if (!id) {
      toast.error('아이디를 입력해주세요.');
      return;
    }

    const res = await checkId({ userId: id });

    if (res.available) {
      toast.success('사용 가능한 아이디입니다.');
      setIsValid(true);
    } else {
      toast.error('현재 사용 중인 아이디입니다.');
      setIsValid(false);
    }
  };

  return (
    <>
      <form className={styles.signup_form} onSubmit={(e) => handleSignUp(e)}>
        <div className={styles.title_container}>
          <h1 className={styles.title}>회원가입</h1>
        </div>
        <input
          name='name'
          className={styles.auth_input}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='이름을 입력하세요'
          autoComplete='off'
        />
        <div className={styles.id_field}>
          <input
            name='userId'
            className={styles.auth_input}
            value={id}
            onChange={(e) => {
              setId(e.target.value);
              setIsValid(false);
            }}
            placeholder='아이디를 입력하세요'
            autoComplete='off'
          />
          <Button type='button' onClick={handleIdCheck} variant='auth'>
            중복확인
          </Button>
        </div>
        <input
          name='email'
          type='email'
          className={styles.auth_input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='이메일을 입력하세요'
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
        <input
          name='passwordConfirm'
          type='password'
          className={styles.auth_input}
          value={checkPassword}
          onChange={(e) => setCheckPassword(e.target.value)}
          placeholder='비밀번호를 다시 입력하세요'
          autoComplete='off'
        />

        <div className={styles.terms_field}>
          <CheckBox
            id='terms'
            checked={agreedToTerms}
            onCheckedChange={() => setAgreedToTerms(!agreedToTerms)}
            style={{ width: '12px', height: '12px' }}
          />
          <label htmlFor='terms'>개인정보 처리방침에 동의합니다</label>

          <button
            type='button'
            className={styles.terms_link}
            onClick={() => setShowPrivacyModal(true)}
          >
            내용 보기
          </button>
        </div>

        <Button type='submit' variant='auth'>
          회원가입
        </Button>

        <div className={styles.bottom_field}>
          <p>이미 계정이 있으신가요?</p>
          <Link className={`${styles.link} ${styles.link_auth}`} to={'/login'}>
            로그인
          </Link>
        </div>
      </form>

      {showPrivacyModal && (
        <PrivacyPolicyModal onClose={() => setShowPrivacyModal(false)} />
      )}
    </>
  );
}

export default SignupPage;
