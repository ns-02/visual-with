import { Dispatch, SetStateAction, useState } from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import { Copy, Search } from 'lucide-react';
import { Dialog, DialogInput } from '@shared/components';
import { Button } from '@shared/components';
import styles from './InviteTeamDialog.module.css';
import { useTeamManager } from '../hooks/useTeamManager';

interface InviteTeamDialogProps {
  open: boolean;
  onOpenChange: Dispatch<SetStateAction<boolean>>;
  onCreate?: (value: string) => void;
}

const InviteTeamDialog = ({ open, onOpenChange }: InviteTeamDialogProps) => {
  const { onSearchUser, onInviteTeamByUserId } = useTeamManager();
  const [invitedUserId, setInvitedUserId] = useState('');

  // 유저 검색
  const handleSearchUser = async () => {
    if (!invitedUserId) {
      alert('유저 아이디를 입력해주세요.');
      return;
    }
    await onSearchUser(invitedUserId);
  };

  // ID 기반 유저 초대
  const handleInviteTeamByUserId = async () => {
    if (!invitedUserId) {
      alert('유저 아이디를 입력해주세요.');
      return;
    }
    await onInviteTeamByUserId(invitedUserId);
    setInvitedUserId('');
    onOpenChange(false);
  };

  return (
    <Dialog
      title='팀 초대'
      open={open}
      onOpenChange={onOpenChange}
      confirmText='초대하기'
      onConfirm={handleInviteTeamByUserId}
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
          <div className='mb_10'>
            <p>초대 링크</p>
            <p style={{ color: '#666' }}>
              아래 링크를 복사하여 팀원을 초대하세요.
            </p>
          </div>
          <div className='d_flex gap_6'>
            <DialogInput
              value='https://example.com/invite/개발팀/abc123'
              readOnly={true}
            />
            <Button>
              <Copy size={16} />
            </Button>
          </div>
        </Tabs.Content>
        <Tabs.Content value='tab2'>
          <div className='mb_10'>
            <p>팀원 ID 검색</p>
            <p style={{ color: '#666' }}>
              아이디를 입력하여 팀원을 초대하세요.
            </p>
          </div>
          <div className='d_flex gap_6'>
            <DialogInput
              placeholder='팀원의 ID를 검색하세요'
              value={invitedUserId}
              setValue={(e) => setInvitedUserId(e.target.value)}
            />
            <Button onClick={handleSearchUser}>
              <Search size={16} />
            </Button>
          </div>
        </Tabs.Content>
      </Tabs.Root>
    </Dialog>
  );
};

export default InviteTeamDialog;
