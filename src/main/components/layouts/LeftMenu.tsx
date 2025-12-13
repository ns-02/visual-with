import { useState, ComponentType } from 'react';
import {
  LucideProps,
  Calendar1,
  FileText,
  Link2,
  ListTodo,
  MessageSquare,
  MessagesSquare,
  Plus,
  Users,
} from 'lucide-react';
import { useTeam } from '@context/TeamContext';
import { Button } from '@components/ui';
import { ToolId } from '@models/ToolId';
import TeamDropdown from '@features/teamManager/ui/TeamDropdown';
import UserDropdown from '@features/userManager/ui/UserDropdown';
import InviteTeamDialog from '@features/teamManager/dialogs/InviteTeamDialog';
import Divider from '../ui/Divider';
import styles from './Layouts.module.css';

interface MenuItem {
  id: ToolId;
  icon: ComponentType<LucideProps>;
  path?: string;
}

function LeftMenu() {
  const [isInviteTeamDialogOpen, setIsInviteTeamDialogOpen] = useState(false);
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

  const UserTrigger = <Button text='김' shape='circle' />;

  const TeamTrigger = isTeamMember ? (
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

  const renderTeamMemberContainer = isTeamMember && (
    <>
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
    </>
  );

  return (
    <section className={styles.leftmenu}>
      <TeamDropdown trigger={TeamTrigger} />
      {renderTeamMemberContainer}
      <Divider />
      <div className={styles.middle_menu_container}>
        {renderMenuItems(middleMenuItems)}
      </div>
      <Divider />
      <UserDropdown trigger={UserTrigger} />
      <InviteTeamDialog
        open={isInviteTeamDialogOpen}
        onOpenChange={setIsInviteTeamDialogOpen}
      />
    </section>
  );
}

export default LeftMenu;
