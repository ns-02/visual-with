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
              <input placeholder="ID를 입력하세요"></input>
            </div>
            <div>
              <input placeholder="비밀번호를 입력하세요"></input>
            </div>
            {/* type="button"으로 일부로 전송을 막아놓은 것! 필요시 해제 */}
            <div>
              <button type="button">로그인</button> 
            </div>
            <div>
              <button type="button">회원가입</button> 
            </div>
          </div>
          
        </form>
      </div>
    </>
  )
}

export default LoginPage;