import { Search } from "lucide-react";
import Dialog from "../../../../components/dialogs/Dialog";
import Input from "../../../../components/dialogs/ui/Input";
import Group from "../../../../components/dialogs/ui/Group";
import Row from "../../../../components/dialogs/ui/Row";
import Button from "../../../../components/ui/Button";
import LocalDialogProps from "../../../../types/LocalDialogProps";

const AddFriendDialog = ({ open, onOpenChange }: LocalDialogProps) => {
  return (
    <Dialog
      title="친구 추가"
      btnName="친구 추가"
      open={open} 
      onOpenChange={onOpenChange}
    >
      <Group>
        <p>친구 ID 검색</p>
      </Group>
      <Row>
        <Input placeholder="친구의 ID를 검색하세요" />
        <Button>
          <Search size={16} />
        </Button>
      </Row>
    </Dialog>
  )
}

export default AddFriendDialog;