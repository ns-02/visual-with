import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@context/AuthContext";
import { useUser } from "@context/UserContext";
import { Container } from "@components";
import { loginUser } from "@api/api";
import styles from './Auth.module.css';

function LoginPage() {
  const {setIsLoggedin} = useAuth();
  const {setUserId, setUserName, setUserEmail} = useUser();

  const navigate = useNavigate();
  const [ id, setId ] = useState("");
  const [ password, setPassword ] = useState("");

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!id || !password) {
      alert("양식이 입력되지 않았습니다.");
      return;
    }

    try {
      const res = await loginUser({userId: id, password});

      if (res.message !== "ok") {
        return;
      }

      setIsLoggedin(true);

      navigate("/main");
    } catch (e) {
      if (e instanceof Error) {
        alert(e.message);
      } else {
        alert("알 수 없는 오류가 발생했습니다.");
      }
    }
  }

  return (
    <Container>
      <div className={styles.contents}>
        <div>
          <h2>로그인</h2>
        </div>
        <br />
        <form onSubmit={(e) => handleLogin(e)}>
          <div>
            <div>
              <input
                name="userId"
                type="text"
                value={id} 
                onChange={(e) => setId(e.target.value)} 
                placeholder="아이디를 입력하세요" required
              ></input>
            </div>
            <div>
              <input 
                name="password"
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="비밀번호를 입력하세요" required
              ></input>
            </div>
            <br />
            <div>
              <button type="submit">로그인</button> 
            </div>
            <br />
            <div>
              <Link to={"/signup"}>회원가입</Link>
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

export default LoginPage;