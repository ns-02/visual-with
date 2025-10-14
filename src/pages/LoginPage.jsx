function LoginPage() {
  return (
    <>
      <div style={{border: "1px solid black"}}>
        <div>
          <h2>로그인</h2>
        </div>
        <form>
          <div>
            <div>
              <input id="useremail" type="text" placeholder="이메일을 입력하세요" required></input>
            </div>
            <div>
              <input id="userpassword" type="password" placeholder="비밀번호를 입력하세요" required></input>
            </div>
            {/* type="button"으로 일부로 전송을 막아놓은 것! 필요시 해제 */}
            <div>
              <button type="button" onClick={() => {
                let useremail = document.getElementById("useremail").value;
                let userpassword = document.getElementById("userpassword").value;

                if (!useremail || !userpassword) {
                  alert("양식이 입력되지 않았습니다.");
                  console.log("양식이 입력되지 않았습니다.");
                  return;
                }

                console.log(`유저 이메일: ${useremail}`);
                console.log(`유저 페스워드: ${userpassword}`);
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