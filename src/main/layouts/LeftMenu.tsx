import { useState } from 'react';
import { Calendar1, FileText, Link2, ListTodo, LogOut, MessageSquare, MessagesSquare, Plus, Users } from 'lucide-react';
import { useTeam } from '../../context/TeamContext';
import Button from '../../components/ui/Button';
import Divider from '../../components/ui/Divider';
import SelectTeamDropdown from '../features/teamManager/components/SelectTeamDropdown';
import InviteTeamDialog from '../features/teamManager/dialogs/InviteTeamDialog';
import LogoutDialog from '../features/misc/dialogs/LogoutDialog';
import MenuItem from './LeftMenuItemType';
import styles from './Layouts.module.css'

function LeftMenu() {
  const [isInviteTeamDialogOpen, setIsInviteTeamDialogOpen] = useState(false);
  const [isLogoutDialogOpen, setIsLogoutDialogOpen] = useState(false);
  const { selectTeamData, isTeamMember } = useTeam();

  const topMenuItems: MenuItem[] = [
    { id: 'team-chat', icon: MessagesSquare, path: 'teamchat' },
    { id: 'files', icon: FileText, path: 'filesharing' },
    { id: 'schedule', icon: Calendar1, path: 'schedule' },
    { id: 'todos', icon: ListTodo, path: 'todolist' },
  ];

  const middleMenuItems: MenuItem[] = [
    { id: 'friends', icon: Users, path: 'friendlist' },
    { id: 'direct-chat', icon: MessageSquare, path: 'directchat' },
  ];

  const bottomMenuItem: MenuItem = { id: 'log-out', icon: LogOut };

  const triggerElement = (
    isTeamMember ?
    <Button text={selectTeamData?.name?.[0]} shape="square" /> :
    <Button shape="square"><Plus size={24} /></Button>
  );

  const renderMenuItems = (items: MenuItem[]) => {
    return items.map((item) => (
      <Button key={item.id} to={item.path} shape='circle'>
        <item.icon size={24} />
      </Button>
    ));
  };

  // 팀에 소속되지 않은 경우
  if (!isTeamMember) {
    return (
      <section className={styles.leftmenu}>
        <div>
          <SelectTeamDropdown 
            triggerElement={triggerElement}
          />
        </div>
        <LogoutDialog open={isLogoutDialogOpen} onOpenChange={setIsLogoutDialogOpen} />
        <Divider />
        {renderMenuItems(middleMenuItems)}
        <Divider />
        <div>
          <Button onCustomClick={() => setIsLogoutDialogOpen(true)} shape='circle'>
            <bottomMenuItem.icon size={24} />
          </Button>
        </div>
      </section>
    )
  }

  return (
    <section className={styles.leftmenu}>
      <div>
        <SelectTeamDropdown 
          triggerElement={triggerElement}
        />
      </div>
      <InviteTeamDialog open={isInviteTeamDialogOpen} onOpenChange={setIsInviteTeamDialogOpen} />
      <LogoutDialog open={isLogoutDialogOpen} onOpenChange={setIsLogoutDialogOpen} />
      <div>
        <Button onCustomClick={() => setIsInviteTeamDialogOpen(true)} shape='circle'>
          <Link2 size={24} />
        </Button>
      </div>
      <Divider />
      {renderMenuItems(topMenuItems)}
      <Divider />
      {renderMenuItems(middleMenuItems)}
      <Divider />
      <div>
        <Button onCustomClick={() => setIsLogoutDialogOpen(true)} shape='circle'>
          <bottomMenuItem.icon size={24} />
        </Button>
      </div>
    </section>
  )
}

export default LeftMenu;