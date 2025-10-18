import Container from "../Components/Container";
import './css/SignupResultPage.css';

function SignupResultPage() {
  return (
    <Container>
      <div className="signup-result">
        <h3>회원가입을 환영합니다!</h3>
        <button>시작하기</button>
      </div>
    </Container>
  )
}

export default SignupResultPage;