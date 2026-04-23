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
  House,
} from 'lucide-react';
import { Button, Tooltip } from '@shared/components';

import TeamDropdown from '@features/teamManager/components/TeamDropdown';
import UserDropdown from '@features/userManager/components/UserDropdown';
import InviteTeamDialog from '@features/teamManager/components/InviteTeamDialog';
import Divider from './Divider';
import styles from './Layouts.module.css';
import TooltipItem from './TooltipItem';
import { useToolId } from '@core/hooks/useWorkspaceParams';
import { ToolId } from '@shared/models/Workspace';
import { useRouteManager } from '@core/routes/useRouteManager';
import { useTeamManager } from '@features/teamManager/hooks/useTeamManager';
import { useCurrentWorkspace } from '@core/hooks/useCurrentWorkspace';

interface MenuItem {
  id: ToolId;
  text: string;
  icon: ComponentType<LucideProps>;
}

function LeftMenu() {
  const [isInviteTeamDialogOpen, setIsInviteTeamDialogOpen] = useState(false);
  const toolId = useToolId();
  const { switchTeamWithTool, switchTool } = useRouteManager();
  const { isTeamMember } = useTeamManager();
  const { selectTeamName } = useCurrentWorkspace();

  const topMenuItems: MenuItem[] = [
    {
      id: 'home',
      text: '홈',
      icon: House,
    },
    {
      id: 'team-chat',
      text: '팀 채팅',
      icon: MessagesSquare,
    },
    {
      id: 'files',
      text: '파일 공유',
      icon: FileText,
    },
    {
      id: 'schedule',
      text: '일정 관리',
      icon: Calendar1,
    },
    {
      id: 'todos',
      text: '할 일 목록',
      icon: ListTodo,
    },
  ];

  const middleMenuItems: MenuItem[] = [
    {
      id: 'friends',
      text: '친구 목록',
      icon: Users,
    },
    {
      id: 'direct-chat',
      text: '친구 채팅',
      icon: MessageSquare,
    },
  ];

  const getMenuStyle = (id: ToolId) =>
    `${styles.menu_button} ${id === toolId ? styles.selected : ''}`;

  return (
    <section className={styles.leftmenu}>
      <TeamDropdown
        trigger={
          isTeamMember ? (
            <Button
              text={selectTeamName[0]}
              shape='square'
              className={styles.info_button}
            />
          ) : (
            <Button shape='square' className={styles.info_button}>
              <Plus size={24} />
            </Button>
          )
        }
        onTeamSwitch={switchTeamWithTool}
      />
      {isTeamMember && (
        <>
          <div>
            <Button
              shape='circle'
              className={styles.link_button}
              onClick={() => setIsInviteTeamDialogOpen(true)}
            >
              <Link2 size={20} />
            </Button>
          </div>
          <Divider />
          {topMenuItems.map((item) => (
            <Tooltip
              key={item.id}
              trigger={
                <Button
                  key={item.id}
                  shape='circle'
                  className={getMenuStyle(item.id)}
                  onClick={() => switchTool(item.id)}
                >
                  <item.icon size={24} />
                </Button>
              }
              items={<TooltipItem text={item.text} />}
            />
          ))}
        </>
      )}

      <Divider />
      <div className={styles.middle_menu_container}>
        {middleMenuItems.map((item) => (
          <Tooltip
            key={item.id}
            trigger={
              <Button
                key={item.id}
                shape='circle'
                className={getMenuStyle(item.id)}
                onClick={() => switchTool(item.id)}
              >
                <item.icon size={24} />
              </Button>
            }
            items={<TooltipItem text={item.text} />}
          />
        ))}
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
