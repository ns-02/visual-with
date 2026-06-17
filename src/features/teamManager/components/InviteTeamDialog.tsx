import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import { Copy, MailPlus, Search } from 'lucide-react';
import { Dialog, DialogInput } from '@shared/components';
import { Button } from '@shared/components';
import styles from './InviteTeamDialog.module.css';
import { useTeamManager } from '../hooks/useTeamManager';
import InviteMemberCard from './InviteMemberCard';

interface InviteTeamDialogProps {
  open: boolean;
  onOpenChange: Dispatch<SetStateAction<boolean>>;
  onCreate?: (value: string) => void;
}

interface UserResult {
  userId: string;
  userName: string;
  userEmail: string;
}

const InviteTeamDialog = ({ open, onOpenChange }: InviteTeamDialogProps) => {
  const { onSearchUser, onInviteTeamByUserId, onInviteTeamByURL } =
    useTeamManager();
  const [invitedUserId, setInvitedUserId] = useState('');
  const [inviteUrl, setInviteUrl] = useState('');
  const [activeTab, setActiveTab] = useState('tab1');
  const [userResult, setUserResult] = useState<UserResult | null>(null);

  useEffect(() => {
    if (!open) return;

    const loadInviteUrl = async () => {
      const url = await onInviteTeamByURL();
      setInviteUrl(url ?? '');
    };

    void loadInviteUrl();
  }, [open, onInviteTeamByURL]);

  // 유저 검색
  const handleSearchUser = async () => {
    if (!invitedUserId) {
      alert('유저 아이디를 입력해주세요.');
      return;
    }
    const nextUserResult = await onSearchUser(invitedUserId);
    setUserResult(nextUserResult);
  };

  const handleCopyInviteUrl = async () => {
    if (!inviteUrl) {
      alert('초대 링크를 불러오지 못했습니다.');
      return;
    }
    await navigator.clipboard.writeText(inviteUrl);
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
      viewCansel={false}
      viewConfirm={false}
    >
      <Tabs.Root value={activeTab} onValueChange={setActiveTab}>
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
            <DialogInput value={inviteUrl} readOnly={true} />
            <Button onClick={handleCopyInviteUrl}>
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

          {userResult && (
            <div
              className='gap_6 mt_8'
              style={{
                backgroundColor: 'aliceblue',
                borderRadius: '12px',
                padding: '8px',
                justifyContent: 'center',
              }}
            >
              <InviteMemberCard
                name={userResult.userName}
                description={userResult.userEmail}
              >
                <Button
                  text='초대'
                  className='bg_blue_400'
                  onClick={handleInviteTeamByUserId}
                >
                  <MailPlus size={16} />
                </Button>
              </InviteMemberCard>
            </div>
          )}
        </Tabs.Content>
      </Tabs.Root>
    </Dialog>
  );
};

export default InviteTeamDialog;
