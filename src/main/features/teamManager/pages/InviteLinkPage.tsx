import { useParams } from "react-router-dom";
import { CircleUser } from "lucide-react";
import { Container } from "@components";
import { Button } from "@components/ui";

const InviteLinkPage = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <Container>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ backgroundColor: "#f9f9f9", width: "280px", display: "flex", padding: "16px", gap: "12px" }}>
          <Button shape='square'>
            <CircleUser size={24} />
          </Button>
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