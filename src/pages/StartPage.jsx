import './StartPage.css'

function StartPage() {

  return (
    <>
      <div className='main'>
        <div className='header'>
          <span className='image-container'>
            <image>로고</image>
          </span>
          <span className='login'>
            <button>회원가입</button>
            <button>로그인</button>
          </span>
        </div>
        <div className='body'>웹 소개</div>
        <div className='footer'>
          <p>팀 소개</p>
          <p>팀 로고(?)</p>
          <p>목원대학교</p>
          <p>이메일</p>
          <p>문의하기: 구글폼</p>
        </div>
      </div>
    </>
  )
}

export default StartPage
