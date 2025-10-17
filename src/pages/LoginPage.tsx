import { useState } from "react";

function LoginPage() {
  const [ id, setId ] = useState("");
  const [ password, setPassword ] = useState("");

  return (
    <>
      <div style={{border: "1px solid black"}}>
        <div>
          <h2>로그인</h2>
        </div>
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
            {/* type="button"으로 일부로 전송을 막아놓은 것! 필요시 해제 */}
            <div>
              <button type="button" onClick={() => {
                if (!id || !password) {
                  alert("양식이 입력되지 않았습니다.");
                  console.log("양식이 입력되지 않았습니다.");
                  return;
                }

                console.log(`유저 아이디: ${id}`);
                console.log(`유저 페스워드: ${password}`);
                console.log("로그인");
              }}>로그인</button> 
            </div>
            <div>
              <button type="button" onClick={() => {
                console.log("회원가입");
              }}>회원가입</button> 
            </div>
          </div>
          
        </form>
      </div>
    </>
  )
}

export default LoginPage;