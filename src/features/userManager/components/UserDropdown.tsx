import { useEffect, useState } from 'react';
import { DropdownMenu } from 'radix-ui';
import { Button, Dropdown, ListItem } from '@shared/components';
import LogoutDialog from './LogoutDialog';
import styles from './UserDropdownItems.module.css';
import { useUserStore } from '@core/store/useUserStore';

const UserDropdown = ({ onSettingsClick }: { onSettingsClick: () => void }) => {
  const [isLogoutDialogOpen, setIsLogoutDialogOpen] = useState(false);
  const [triggerText, setTriggerText] = useState<string | undefined>();
  const userName = useUserStore((state) => state.user?.name);

  const renderUserName = () => {
    if (!userName) return '로그인되지 않음';
    return userName;
  };

  useEffect(() => {
    if (!userName) return;

    setTriggerText(userName[0]);
  }, [userName]);

  return (
    <>
      <Dropdown
        align='end'
        side='right'
        trigger={
          <Button
            text={triggerText}
            shape='circle'
            className={styles.button_primary}
          />
        }
      >
        <DropdownMenu.Item asChild>
          <ListItem text={renderUserName()} />
        </DropdownMenu.Item>
        <DropdownMenu.Separator className={styles.separator} />
        <DropdownMenu.Item asChild>
          <ListItem text='내 프로필' />
        </DropdownMenu.Item>
        <DropdownMenu.Item asChild onClick={onSettingsClick}>
          <ListItem text='설정' />
        </DropdownMenu.Item>
        <DropdownMenu.Separator className={styles.separator} />
        <DropdownMenu.Item onSelect={() => setIsLogoutDialogOpen(true)} asChild>
          <ListItem text='로그아웃' />
        </DropdownMenu.Item>
      </Dropdown>

      {isLogoutDialogOpen && (
        <LogoutDialog
          open={isLogoutDialogOpen}
          onOpenChange={setIsLogoutDialogOpen}
        />
      )}
    </>
  );
};

export default UserDropdown;
