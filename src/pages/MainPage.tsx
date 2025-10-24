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

enum Tool {
    TeamChat, Files, Schedule, Todos, Friends, DirectChat
  }

function MainPage() {
  const [ onInvite, setInvite ] = useState(false);
  const [ viewTool, setTool ] = useState<Tool>(Tool.TeamChat);

  const renderTools = () => {
    switch (viewTool) {
      case Tool.TeamChat:
        return <ChatPage />;
      case Tool.Files:
        return <FileSharingPage />;
      case Tool.Schedule:
        return <SchedulePage />;
      case Tool.Todos:
        return <TodoListPage />;
      case Tool.Friends:
        return <FriendListPage />;
      case Tool.DirectChat:
        return <DirectPage />;
      default:
        return <ChatPage />;
    }
  }

  return (
    <div className="main">
      <LeftMenu setTool={setTool}></LeftMenu>
      <RightSection>
        <MainHeader onViewInvite={() => {
            setInvite(!onInvite);
          }}></MainHeader>
        <MainBody>
          { renderTools() }
        </MainBody>
        
      </RightSection>
      <InvitePage state={onInvite} setInvite={setInvite}></InvitePage>
    </div>
  )
}

export default MainPage;