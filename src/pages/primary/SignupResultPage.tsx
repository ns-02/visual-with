import { Link } from "react-router-dom";
import Container from "../../components/Container";
import './css/SignupResultPage.css';

function SignupResultPage() {
  return (
    <Container>
      <div className="signup-result">
        <h3>회원가입을 환영합니다!</h3>
        <br />
        <Link to={"/"}>홈으로</Link>
        <Link to={"/login"}>로그인</Link>
      </div>
    </Container>
  )
}

export default SignupResultPage;