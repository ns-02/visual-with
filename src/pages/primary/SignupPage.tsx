import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Container from "../../components/Container";
import { checkId, signupUser } from "../../api/api";
import styles from './Primary.module.css';

function SignupPage() {
  const navigate = useNavigate();
  const [ id, setId ] = useState("");
  const [ name, setName ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ checkPassword, setCheckPassword ] = useState("");
  const [ isValid, setIsValid ] = useState(false);

  const handleSignUp = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!id || !password || !checkPassword || !name || !email) {
      alert("양식이 입력되지 않았습니다.");
      return;
    }

    if (password !== checkPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    if (!isValid) {
      alert("사용 가능한 아이디인지 확인해주세요.");
      return;
    }

    try {
      const res = await signupUser({ userId: id, password, email, name });
  
      if (!res) {
        return;
      }
  
      navigate("/signup-result");
    } catch (e) {
      if (e instanceof Error) {
        alert(e.message);
      } else {
        alert("알 수 없는 오류가 발생했습니다.");
      }
    }
  }

  const handleIdCheck = async () => {
    if (!id) {
      alert("아이디를 입력해주세요.");
      return;
    }

    const res = await checkId(id);

    // true: 사용가능, false: 사용불가능
    if (res.available) {
      alert("사용 가능한 아이디입니다.");
      setIsValid(true);
    } else {
      alert("현재 사용 중인 아이디입니다.");
      setIsValid(false);
    }
  }

  return (
    <Container>
      <div className={styles.contents}>
        <div>
          <h2>회원가입</h2>
          <br></br>
        </div>
        <form onSubmit={(e) => handleSignUp(e)}>
          <div>
            <div>
              <label>아이디</label>
              <input name="userId" type="text" value={id} onChange={(e) => {
                setId(e.target.value);
                setIsValid(false);
              }}/>
              <button type="button" onClick={handleIdCheck}>중복확인</button>
            </div>
            <div>
              <label>비밀번호</label>
              <input name="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div>
              <label>비밀번호 확인</label>
              <input name="passwordConfirm" type="password" value={checkPassword} onChange={(e) => setCheckPassword(e.target.value)}/>
            </div>
            <div>
              <label>이름</label>
              <input name="name" type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
            </div>
            <div>
              <label>이메일</label>
              <input name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
            </div>
            <br />
            <div>
              <button type="submit">회원가입</button>
            </div>
            <br />
            <div>
              <Link to={"/login"}>로그인</Link> 
            </div>
            <div>
              <Link to={"/"}>홈으로 돌아가기</Link> 
            </div>
          </div>
        </form>
      </div>
    </Container>
  )
}

export default SignupPage;