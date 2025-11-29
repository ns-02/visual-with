import * as Tabs from '@radix-ui/react-tabs';
import { Copy, Search } from 'lucide-react';
import { Dialog, Group, DialogInput, Row } from '@components/dialogs';
import { Button } from '@components/ui';
import { TeamDialogProps } from '..';
import styles from './InviteTeamDialog.module.css';

const InviteTeamDialog = ({ open, onOpenChange }: TeamDialogProps) => {
  return (
    <Dialog
      title='팀 초대'
      open={open}
      onOpenChange={onOpenChange}
      viewButton={false}
    >
      <Tabs.Root>
        <Tabs.List style={{ display: 'flex', width: 360, marginBottom: 12 }}>
          <Tabs.Trigger className={styles.trigger} value='tab1' asChild>
            <Button text='초대 링크' />
          </Tabs.Trigger>
          <Tabs.Trigger className={styles.trigger} value='tab2' asChild>
            <Button text='친구 ID' />
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value='tab1'>
          <Group>
            <p>초대 링크</p>
            <p style={{ color: '#666' }}>
              아래 링크를 복사하여 팀원을 초대하세요.
            </p>
          </Group>
          <Row>
            <DialogInput
              value='https://example.com/invite/개발팀/abc123'
              readOnly={true}
            />
            <Button>
              <Copy size={16} />
            </Button>
          </Row>
        </Tabs.Content>
        <Tabs.Content value='tab2'>
          <Group>
            <p>팀원 ID 검색</p>
            <p style={{ color: '#666' }}>
              아이디를 입력하여 팀원을 초대하세요.
            </p>
          </Group>
          <Row>
            <DialogInput placeholder='팀원의 ID를 검색하세요' />
            <Button>
              <Search size={16} />
            </Button>
          </Row>
        </Tabs.Content>
      </Tabs.Root>
    </Dialog>
  );
};

export default InviteTeamDialog;
