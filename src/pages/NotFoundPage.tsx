import Container from "../components/Container";
import './css/NotFoundPage.css';

function NotFoundPage() {
  return (
    <Container>
      <div className="not-found">
        <h3>요청하신 페이지를 찾을 수 없습니다.</h3>
        <button>돌아가기</button>
      </div>
    </Container>
  )
}

export default NotFoundPage;