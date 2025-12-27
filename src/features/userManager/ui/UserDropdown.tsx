import { useEffect, useState } from 'react';
import { DropdownMenu } from 'radix-ui';
import { Button, Dropdown, Item } from '@shared/components/ui';
import { useUser } from '@core/contexts/UserContext';
import LogoutDialog from '../dialogs/LogoutDialog';
import styles from './UserDropdownItems.module.css';

const UserDropdown = () => {
  const [isLogoutDialogOpen, setIsLogoutDialogOpen] = useState(false);
  const [triggerText, setTriggerText] = useState<string | undefined>();
  const { userName } = useUser();

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
      <DropdownMenu.Item asChild>
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
