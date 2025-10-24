import { useState } from "react";
import Container from "../components/Container";
import './css/SignupPage.css';

function SignupPage() {
  const [ id, setId ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ checkPassword, setCheckPassword ] = useState("");

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
              <input type="text"></input>
            </div>
            <div>
              <p>이메일</p>
              <input type="email"></input>
            </div>
            <br></br>
            {/* type="button"으로 일부로 전송을 막아놓은 것! 필요시 해제 */}
            <div>
              <button type="button" onClick={() => {
                if (!id || !password || !checkPassword) {
                  alert("양식이 입력되지 않았습니다.");
                  console.log("양식이 입력되지 않았습니다.");
                  return;
                }

                if (password !== checkPassword) {
                  alert("비밀번호가 일치하지 않습니다.");
                  console.log("비밀번호가 일치하지 않습니다.");
                  return;
                }

                console.log(`유저 아이디: ${id}`);
                console.log(`유저 페스워드: ${password}`);
                console.log("회원가입");
                

                // 회원가입 완료를 알리는 페이지를 따로 만들어야하나?
              }}>회원가입</button> 
            </div>
          </div>
        </form>
      </div>
    </Container>
  )
}

export default SignupPage;