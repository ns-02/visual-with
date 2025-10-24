import { useState } from "react";
import LeftMenu from "../layouts/LeftMenu";
import RightSection from "../layouts/RightSection";
import MainHeader from "../layouts/MainHeader";
import MainBody from "../layouts/MainBody";
import ChatPage from '../features/teamChat/pages/ChatPage';
import FileSharingPage from '../features/fileSharing/pages/FileSharingPage';
import InvitePage from "../features/invite/pages/InvitePage";
import SchedulePage from '../features/schedule/pages/SchedulePage';
import TodoListPage from '../features/todoList/pages/TodoListPage';
import FriendListPage from "../features/friendList/pages/FriendListPage";
import DirectPage from "../features/directChat/pages/DirectPage";
import './css/MainPage.css';

type Tool = 'team-chat' | 'files' | 'schedule' | 'todos' | 'friends' | 'direct-chat'

function MainPage() {
  const [ on, setInvite ] = useState(false);
  const [ viewTool, setTool ] = useState<Tool>('team-chat');

  const renderTools = () => {
    switch (viewTool) {
      case 'team-chat':
        return <ChatPage />;
      case 'files':
        return <FileSharingPage />;
      case 'schedule':
        return <SchedulePage />;
      case 'todos':
        return <TodoListPage />;
      case 'friends':
        return <FriendListPage />;
      case 'direct-chat':
        return <DirectPage />;
      default:
        return <ChatPage />;
    }
  }

  return (
    <div className="main">
      <LeftMenu setTool={setTool} onInvite={() => { setInvite(!on); }} ></LeftMenu>
      <RightSection>
        <MainHeader viewTool={viewTool} />
        <MainBody>
          { renderTools() }
        </MainBody>
        
      </RightSection>
      <InvitePage state={on} setInvite={setInvite}></InvitePage>
    </div>
  )
}

export default MainPage;