import { FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CheckBox, Container } from '@shared/components';
import { checkId, signupUser } from '@shared/api/auth/AuthApi';
import { Button, AuthInput } from '@shared/components';
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
      alert('양식이 입력되지 않았습니다.');
      return;
    }

    if (password !== checkPassword) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    if (!isValid) {
      alert('사용 가능한 아이디인지 확인해주세요.');
      return;
    }

    if (!agreedToTerms) {
      alert('개인정보 처리방침에 동의해주세요.');
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
        alert(e.message);
      } else {
        alert('알 수 없는 오류가 발생했습니다.');
      }
    }
  };

  const handleIdCheck = async () => {
    if (!id) {
      // alert('아이디를 입력해주세요.');
      toast.error('아이디를 입력해주세요.');
      return;
    }

    const res = await checkId({ userId: id });

    if (res.available) {
      alert('사용 가능한 아이디입니다.');
      setIsValid(true);
    } else {
      alert('현재 사용 중인 아이디입니다.');
      setIsValid(false);
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
      <form className={styles.signup_form} onSubmit={(e) => handleSignUp(e)}>
        <div className={styles.title_container}>
          <h1 className={styles.title}>회원가입</h1>
        </div>
        <AuthInput
          name='name'
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='이름을 입력하세요'
        />
        <div className={styles.id_field}>
          <AuthInput
            name='userId'
            type='text'
            value={id}
            onChange={(e) => {
              setId(e.target.value);
              setIsValid(false);
            }}
            placeholder='아이디를 입력하세요'
          />
          <Button type='button' onClick={handleIdCheck} variant='auth'>
            중복확인
          </Button>
        </div>
        <AuthInput
          name='email'
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='이메일을 입력하세요'
        />
        <AuthInput
          name='password'
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='비밀번호를 입력하세요'
        />
        <AuthInput
          name='passwordConfirm'
          type='password'
          value={checkPassword}
          onChange={(e) => setCheckPassword(e.target.value)}
          placeholder='비밀번호를 다시 입력하세요'
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
    </Container>
  );
}

export default SignupPage;
