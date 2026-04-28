import { useEffect, useState } from 'react';
import { DropdownMenu } from 'radix-ui';
import { Button, Dropdown, Item } from '@shared/components';
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

  const trigger = (
    <Button
      text={triggerText}
      shape='circle'
      className={styles.button_primary}
    />
  );

  const dropdownItems = (
    <>
      <DropdownMenu.Item asChild>
        <Item type='list' text={renderUserName()} />
      </DropdownMenu.Item>
      <DropdownMenu.Separator className={styles.separator} />
      <DropdownMenu.Item asChild>
        <Item type='list' text='내 프로필' />
      </DropdownMenu.Item>
      <DropdownMenu.Item asChild onClick={onSettingsClick}>
        <Item type='list' text='설정' />
      </DropdownMenu.Item>
      <DropdownMenu.Separator className={styles.separator} />
      <DropdownMenu.Item onSelect={() => setIsLogoutDialogOpen(true)} asChild>
        <Item type='list' text='로그아웃' />
      </DropdownMenu.Item>
    </>
  );

  return (
    <>
      <Dropdown
        align='end'
        side='right'
        trigger={trigger}
        items={dropdownItems}
      />
      <LogoutDialog
        open={isLogoutDialogOpen}
        onOpenChange={setIsLogoutDialogOpen}
      />
    </>
  );
};

export default UserDropdown;
