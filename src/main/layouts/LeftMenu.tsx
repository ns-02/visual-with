import { useState } from 'react';
import { Calendar1, FileText, Link2, ListTodo, LogOut, MessageSquare, MessagesSquare, Users } from 'lucide-react';
import Button from '../../components/ui/Button';
import styles from './Layouts.module.css'
import SelectTeamDropdown from '../features/teamManager/components/SelectTeamDropdown';
import InviteTeamDialog from '../features/teamManager/dialogs/InviteTeamDialog';
import LogoutDialog from '../features/misc/dialogs/LogoutDialog';

export type Tool = 'team-chat' | 'files' | 'schedule' | 'todos' | 'friends' | 'direct-chat' | 'log-out'

interface NavItem {
  id: Tool;
  icon: typeof MessagesSquare;
  path?: string;
}

function Divider() {
  return (
    <hr style={{ marginTop: 8, marginBottom: 8, width: "100%" }}></hr>
  );
}

function LeftMenu() {
  const [isInviteTeamDialogOpen, setIsInviteTeamDialogOpen] = useState(false);
  const [isLogoutDialogOpen, setIsLogoutDialogOpen] = useState(false);
  const [isTeamMember, setIsTeamMember] = useState(true);

  const topNavItems: NavItem[] = [
    { id: 'team-chat', icon: MessagesSquare, path: 'teamchat' },
    { id: 'files', icon: FileText, path: 'filesharing' },
    { id: 'schedule', icon: Calendar1, path: 'schedule' },
    { id: 'todos', icon: ListTodo, path: 'todolist' },
  ];

  const middleNavItems: NavItem[] = [
    { id: 'friends', icon: Users, path: 'friendlist' },
    { id: 'direct-chat', icon: MessageSquare, path: 'directchat' },
  ];

  const bottomNavItem: NavItem = { id: 'log-out', icon: LogOut };

  const triggerElement = (
    <Button text={"개"} shape="square" />
  )

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
        {
          middleNavItems.map((item) => {
            return (
              <div key={item.id}>
                <Button to={item.path} shape='circle'>
                  <item.icon size={24} />
                </Button>
              </div>
            )
          })
        }
        <Divider />
        <div>
          <Button onCustomClick={() => setIsLogoutDialogOpen(true)} shape='circle'>
            <bottomNavItem.icon size={24} />
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
      {
        topNavItems.map((item) => {
          return (
            <div key={item.id}>
              <Button to={item.path} shape='circle'>
                <item.icon size={24} />
              </Button>
            </div>
          )
        })
      }
      <Divider />
      {
        middleNavItems.map((item) => {
          return (
            <div key={item.id}>
              <Button to={item.path} shape='circle'>
                <item.icon size={24} />
              </Button>
            </div>
          )
        })
      }
      <Divider />
      <div>
        <Button onCustomClick={() => setIsLogoutDialogOpen(true)} shape='circle'>
          <bottomNavItem.icon size={24} />
        </Button>
      </div>
    </section>
  )
}

export default LeftMenu;