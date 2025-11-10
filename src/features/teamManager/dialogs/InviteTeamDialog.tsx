import { Dispatch, SetStateAction } from "react";
import Dialog from "../../../components/dialogs/Dialog";
import Input from "../../../components/dialogs/ui/Input";
import Group from "../../../components/dialogs/ui/Group";
import Button from "../../../components/ui/Button";
import { Copy } from "lucide-react";
import Row from "../../../components/dialogs/ui/Row";

interface Props {
  open: boolean;
  onOpenChange: Dispatch<SetStateAction<boolean>>;
}

const InviteTeamDialog = ({ open, onOpenChange }: Props) => {
  return (
    <Dialog
      title="팀 초대"
      open={open} 
      onOpenChange={onOpenChange}
      viewButton={false}
    >
      <Group><p>[ 게스트 초대 (v) ] [ 유저 초대 ]</p></Group>
      <Group>
        <p>초대 링크</p>
        <p style={{ color: '#666' }}>아래 링크를 복사하여 팀원을 초대하세요.</p>
      </Group>
      <Row>
        <Input value="https://example.com/invite/개발팀/abc123" readOnly={true} />
        <Button icon={Copy} iconSize={16} />
      </Row>
    </Dialog>
  )
}

export default InviteTeamDialog;