import { Search } from 'lucide-react';
import { Dialog, Group, Input, Row } from '@components/dialogs';
import { Button } from '@components/ui';
import { AddFriendDialogProps } from '../types';

const AddFriendDialog = ({ open, onOpenChange }: AddFriendDialogProps) => {
  const confirmButton = <Button text='친구 추가' />;

  return (
    <Dialog
      title='친구 추가'
      open={open}
      onOpenChange={onOpenChange}
      confirmButton={confirmButton}
    >
      <Group>
        <p>친구 ID 검색</p>
      </Group>
      <Row>
        <Input placeholder='친구의 ID를 검색하세요' />
        <Button>
          <Search size={16} />
        </Button>
      </Row>
    </Dialog>
  );
};

export default AddFriendDialog;
