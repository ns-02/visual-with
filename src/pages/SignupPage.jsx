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
              <p>ID</p>
              <input></input>
            </div>
            <div>
              <p>비밀번호</p>
              <input></input>
            </div>
            <div>
              <p>비밀번호 확인</p>
              <input></input>
            </div>
            {/* type="button"으로 일부로 전송을 막아놓은 것! 필요시 해제 */}
            <div>
              <button type="button">회원가입</button> 
            </div>
          </div>
          
        </form>
      </div>
    </>
  )
}

export default SignupPage;