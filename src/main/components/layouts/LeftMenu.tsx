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
import { Button, Tooltip } from '@components/ui';
import { ToolId } from '@models/ToolId';
import TeamDropdown from '@features/teamManager/ui/TeamDropdown';
import UserDropdown from '@features/userManager/ui/UserDropdown';
import InviteTeamDialog from '@features/teamManager/dialogs/InviteTeamDialog';
import Divider from '../ui/Divider';
import styles from './Layouts.module.css';
import TooltipItem from '../ui/TooltipItem';
import { getPathFromToolId } from '@routes/routeMap';

interface MenuItem {
  id: ToolId;
  text: string;
  icon: ComponentType<LucideProps>;
  onTeam: boolean;
}

function LeftMenu() {
  const [isInviteTeamDialogOpen, setIsInviteTeamDialogOpen] = useState(false);
  const { selectTeamId, selectTeamName, isTeamMember } = useTeam();
  const [selectItemId, setSelectItemId] = useState<ToolId | null>(null);

  const topMenuItems: MenuItem[] = [
    {
      id: 'team-chat',
      text: '팀 채팅',
      icon: MessagesSquare,
      onTeam: true,
    },
    {
      id: 'files',
      text: '파일 공유',
      icon: FileText,
      onTeam: true,
    },
    {
      id: 'schedule',
      text: '일정 관리',
      icon: Calendar1,
      onTeam: true,
    },
    {
      id: 'todos',
      text: '할 일 목록',
      icon: ListTodo,
      onTeam: true,
    },
  ];

  const middleMenuItems: MenuItem[] = [
    {
      id: 'friends',
      text: '친구 목록',
      icon: Users,
      onTeam: false,
    },
    {
      id: 'direct-chat',
      text: '친구 채팅',
      icon: MessageSquare,
      onTeam: false,
    },
  ];

  const handleMenuClick = (id: ToolId) => {
    setSelectItemId(id);
  };

  const getMenuStyle = (id: ToolId) => {
    const isItemSelected = id === selectItemId ? true : false;
    return `${styles.menu_button} ${isItemSelected && styles.selected}`;
  };

  const DropdownTrigger = isTeamMember ? (
    <Button
      text={selectTeamName[0]}
      shape='square'
      className={styles.info_button}
    />
  ) : (
    <Button shape='square' className={styles.info_button}>
      <Plus size={24} />
    </Button>
  );

  const renderMenuItems = (items: MenuItem[]) => {
    const renderMenuItem = (item: MenuItem) => (
      <Button
        key={item.id}
        to={getPathFromToolId({
          id: item.id,
          onTeam: item.onTeam,
          selectTeamId,
        })}
        shape='circle'
        className={getMenuStyle(item.id)}
      >
        <item.icon size={24} />
      </Button>
    );

    return items.map((item) => (
      <Tooltip
        key={item.id}
        trigger={renderMenuItem(item)}
        items={<TooltipItem text={item.text} />}
        onClick={() => handleMenuClick(item.id)}
      />
    ));
  };

  const renderTeamMemberContainer = isTeamMember && (
    <>
      <div>
        <Button
          shape='circle'
          className={styles.link_button}
          onCustomClick={() => setIsInviteTeamDialogOpen(true)}
        >
          <Link2 size={20} />
        </Button>
      </div>
      <Divider />
      {renderMenuItems(topMenuItems)}
    </>
  );

  return (
    <section className={styles.leftmenu}>
      <TeamDropdown trigger={DropdownTrigger} />
      {renderTeamMemberContainer}
      <Divider />
      <div className={styles.middle_menu_container}>
        {renderMenuItems(middleMenuItems)}
      </div>
      <Divider />
      <UserDropdown />
      <InviteTeamDialog
        open={isInviteTeamDialogOpen}
        onOpenChange={setIsInviteTeamDialogOpen}
      />
    </section>
  );
}

export default LeftMenu;
