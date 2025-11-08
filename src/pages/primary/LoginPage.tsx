import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Container from "../../components/Container";
import { request } from "../../api/api";
import styles from './Primary.module.css';

function LoginPage() {
  const navigate = useNavigate();
  const [ id, setId ] = useState("");
  const [ password, setPassword ] = useState("");

  const handleLogin = async () => {
    if (!id || !password) {
      alert("양식이 입력되지 않았습니다.");
      return;
    }

    // 서버 요청 및 응답 처리
    const requestMessage = {
      userId: id,
      password
    }

    const res = await request('/api/login', {
      method: 'POST',
      body: JSON.stringify(requestMessage)
    });

    console.log(res);

    if (!res) {
      return;
    }

    navigate("/main");
  }

  return (
    <Container>
      <div className={styles.contents}>
        <div>
          <h2>로그인</h2>
        </div>
        <br />
        <form>
          <div>
            <div>
              <input
                type="text"
                value={id} 
                onChange={(e) => setId(e.target.value)} 
                placeholder="아이디를 입력하세요" required
              ></input>
            </div>
            <div>
              <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="비밀번호를 입력하세요" required
              ></input>
            </div>
            <br />
            <div>
              <button type="button" onClick={handleLogin}>로그인</button> 
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