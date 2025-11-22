import { useParams } from "react-router-dom";
import Container from "../../../../components/Container";
import Button from "../../../../components/ui/Button";
import { CircleUser } from "lucide-react";

const InviteLinkPage = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <Container>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ backgroundColor: "#f9f9f9", width: "280px", display: "flex", padding: "16px", gap: "12px" }}>
          <Button shape='square' icon={CircleUser} iconSize={24} />
          <div>
            <p>{`ㅇㅇ팀`}</p>
            <p style={{ fontSize: "15px", color: "#555" }} >{`리더: ㅇㅇㅇ`}</p>
          </div>
        </div>
        <p style={{ textAlign: "center" }}>{`url: ${id}`}</p>
        <button>초대 수락하기</button>
      </div>
    </Container>
  )
}

export default InviteLinkPage;