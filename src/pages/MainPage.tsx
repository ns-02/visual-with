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


function MainPage() {
  const [ onInvite, setInvite ] = useState(false);

  return (
    <div className="main">
      <LeftMenu></LeftMenu>
      <RightSection>
        <MainHeader onViewInvite={() => {
            setInvite(!onInvite);
          }}></MainHeader>
        <MainBody>
          {/* <ChatPage /> */}
          <FileSharingPage />
          {/* <SchedulePage /> */}
          {/* <TodoListPage /> */}
          {/* <FriendListPage /> */}
          {/* <DirectPage /> */}
        </MainBody>
        
      </RightSection>
      <InvitePage state={onInvite} setInvite={setInvite}></InvitePage>
    </div>
  )
}

export default MainPage;