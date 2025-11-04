import { Link } from 'react-router-dom';
import './css/StartPage.css'

function StartPage() {

  return (
    <>
      <div className='start-layout'>
        <div className='header'>
          <span className='image-container'>
            로고
          </span>
          <span className='login'>
            <Link to={"/signup"}>회원가입</Link>
            <Link to={"/login"}>로그인</Link>
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

export default StartPage;
