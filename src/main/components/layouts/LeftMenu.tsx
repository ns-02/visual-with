import { useState, ComponentType } from 'react';
import {
  LucideProps,
  Calendar1,
  FileText,
  Link2,
  ListTodo,
  LogOut,
  MessageSquare,
  MessagesSquare,
  Plus,
  Users,
} from 'lucide-react';
import { useTeam } from '@context/TeamContext';
import { Button } from '@components/ui';
import { ToolId } from '@models/ToolId';
import Divider from '../ui/Divider';
import TeamDropdown from '../../features/teamManager/ui/TeamDropdown';
import InviteTeamDialog from '../../features/teamManager/dialogs/InviteTeamDialog';
import LogoutDialog from '../../features/misc/dialogs/LogoutDialog';
import styles from './Layouts.module.css';

interface MenuItem {
  id: ToolId;
  icon: ComponentType<LucideProps>;
  path?: string;
}

function LeftMenu() {
  const [isInviteTeamDialogOpen, setIsInviteTeamDialogOpen] = useState(false);
  const [isLogoutDialogOpen, setIsLogoutDialogOpen] = useState(false);
  const { selectTeamName, isTeamMember } = useTeam();

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

  const triggerElement = isTeamMember ? (
    <Button text={selectTeamName[0]} shape='square' />
  ) : (
    <Button shape='square'>
      <Plus size={24} />
    </Button>
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
          <TeamDropdown triggerElement={triggerElement} />
        </div>
        <LogoutDialog
          open={isLogoutDialogOpen}
          onOpenChange={setIsLogoutDialogOpen}
        />
        <Divider />
        {renderMenuItems(middleMenuItems)}
        <Divider />
        <div>
          <Button
            onCustomClick={() => setIsLogoutDialogOpen(true)}
            shape='circle'
          >
            <bottomMenuItem.icon size={24} />
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.leftmenu}>
      <div>
        <TeamDropdown triggerElement={triggerElement} />
      </div>
      <InviteTeamDialog
        open={isInviteTeamDialogOpen}
        onOpenChange={setIsInviteTeamDialogOpen}
      />
      <LogoutDialog
        open={isLogoutDialogOpen}
        onOpenChange={setIsLogoutDialogOpen}
      />
      <div>
        <Button
          onCustomClick={() => setIsInviteTeamDialogOpen(true)}
          shape='circle'
        >
          <Link2 size={24} />
        </Button>
      </div>
      <Divider />
      {renderMenuItems(topMenuItems)}
      <Divider />
      {renderMenuItems(middleMenuItems)}
      <Divider />
      <div>
        <Button
          onCustomClick={() => setIsLogoutDialogOpen(true)}
          shape='circle'
        >
          <bottomMenuItem.icon size={24} />
        </Button>
      </div>
    </section>
  );
}

export default LeftMenu;
