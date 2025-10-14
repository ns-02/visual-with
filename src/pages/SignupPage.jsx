function SignupPage() {
  return (
    <>
      <div style={{border: "1px solid black"}}>
        <div>
          <h2>회원가입</h2>
        </div>
        <form>
          <div>
            <div>
              <p>이메일</p>
              <input id="useremail" type="text"></input>
            </div>
            <div>
              <p>비밀번호</p>
              <input id="userpassword" type="password"></input>
            </div>
            <div>
              <p>비밀번호 확인</p>
              <input id="checkuserpassword" type="password"></input>
            </div>
            {/* type="button"으로 일부로 전송을 막아놓은 것! 필요시 해제 */}
            <div>
              <button type="button" onClick={() => {
                let useremail = document.getElementById("useremail").value;
                let userpassword = document.getElementById("userpassword").value;
                let checkuserpassword = document.getElementById("checkuserpassword").value;

                if (!useremail || !userpassword || !checkuserpassword) {
                  alert("양식이 입력되지 않았습니다.");
                  console.log("양식이 입력되지 않았습니다.");
                  return;
                }

                if (userpassword !== checkuserpassword) {
                  alert("비밀번호가 일치하지 않습니다.");
                  console.log("비밀번호가 일치하지 않습니다.");
                  return;
                }

                console.log(`유저 이메일: ${useremail}`);
                console.log(`유저 페스워드: ${userpassword}`);
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