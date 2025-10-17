import { useState } from "react";

function SignupPage() {
  const [ id, setId ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ checkPassword, setCheckPassword ] = useState("");

  return (
    <>
      <div style={{border: "1px solid black"}}>
        <div>
          <h2>회원가입</h2>
        </div>
        <form>
          <div>
            <div>
              <p>아이디</p>
              <input type="text" value={id} onChange={(e) => setId(e.target.value)}></input>
            </div>
            <div>
              <p>비밀번호</p>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
            </div>
            <div>
              <p>비밀번호 확인</p>
              <input type="password" value={checkPassword} onChange={(e) => setCheckPassword(e.target.value)}></input>
            </div>
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
    </>
  )
}

export default SignupPage;