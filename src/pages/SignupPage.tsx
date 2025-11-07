import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Container from "../components/Container";
import './css/SignupPage.css';
import { request } from "../api/api";

function SignupPage() {
  const navigate = useNavigate();
  const [ id, setId ] = useState("");
  const [ name, setName ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ checkPassword, setCheckPassword ] = useState("");

  const handleSignUp = async () => {
    if (!id || !password || !checkPassword) {
      alert("양식이 입력되지 않았습니다.");
      return;
    }

    if (password !== checkPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    // 서버 요청 및 응답 처리
    const requestMessage = {
      userId: id,
      password,
      email,
      name
    }

    const res = request('/api/register', {
      method: 'POST',
      body: JSON.stringify(requestMessage)
    });

    console.log(res)

    if (!res) {
      return;
    }

    navigate("/signup-result");
  }

  return (
    <Container>
      <div className="signup">
        <div>
          <h2>회원가입</h2>
          <br></br>
        </div>
        <form>
          <div>
            <div>
              <p>아이디</p>
              <input type="text" value={id} onChange={(e) => setId(e.target.value)}/>
            </div>
            <div>
              <p>비밀번호</p>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div>
              <p>비밀번호 확인</p>
              <input type="password" value={checkPassword} onChange={(e) => setCheckPassword(e.target.value)}/>
            </div>
            <div>
              <p>이름</p>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
            </div>
            <div>
              <p>이메일</p>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
            </div>
            <br />
            <div>
              <button type="button" onClick={handleSignUp}>회원가입</button>
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