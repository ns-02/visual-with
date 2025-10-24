import { useState } from "react";
import Header from "../layouts/Header";
import LeftMenu from "../layouts/LeftMenu";
import RightSection from "../layouts/RightSection";
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
        <ChatPage>
          <Header onViewInvite={() => {
            setInvite(!onInvite);
          }}></Header>
        </ChatPage>
        {/* <FileSharingPage>
          <Header onViewInvite={() => {
            setInvite(!onInvite);
          }}></Header>
        </FileSharingPage> */}
        {/* <SchedulePage>
          <Header onViewInvite={() => {
            setInvite(!onInvite);
          }}></Header>
        </SchedulePage> */}
        {/* <TodoListPage>
          <Header onViewInvite={() => {
            setInvite(!onInvite);
          }}></Header>
        </TodoListPage> */}
        {/* <FriendListPage>
          <Header onViewInvite={() => {
            setInvite(!onInvite);
          }}></Header>
        </FriendListPage> */}
        {/* <DirectPage>
          <Header onViewInvite={() => {
            setInvite(!onInvite);
          }}></Header>
        </DirectPage> */}
      </RightSection>
      <InvitePage state={onInvite} setInvite={setInvite}></InvitePage>
    </div>
  )
}

export default MainPage;