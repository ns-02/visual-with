import { useState } from "react";
import Header from "../layouts/Header";
import LeftMenu from "../layouts/LeftMenu";
import RightSection from "../layouts/RightSection";
import ChatPage from '../features/teamChat/pages/ChatPage';
import FileSharingPage from '../features/fileSharing/pages/FileSharingPage';
import InvitePage from "../features/invite/pages/InvitePage";
import SchedulePage from '../features/schedule/pages/SchedulePage';
import TodoListPage from '../features/todoList/pages/TodoListPage';
import './css/MainPage.css';

function MainPage() {
  const [ isViewInvite, setIsViewInvite ] = useState(false);

  return (
    <div className="main">
      <LeftMenu></LeftMenu>
      <RightSection>
        {/* <ChatPage>
          <Header onViewInvite={() => {
            setIsViewInvite(!isViewInvite);
          }}></Header>
        </ChatPage> */}
        {/* <FileSharingPage>
          <Header onViewInvite={() => {
            setIsViewInvite(!isViewInvite);
          }}></Header>
        </FileSharingPage> */}
        {/* <SchedulePage>
          <Header onViewInvite={() => {
            setIsViewInvite(!isViewInvite);
          }}></Header>
        </SchedulePage> */}
        <TodoListPage>
          <Header onViewInvite={() => {
            setIsViewInvite(!isViewInvite);
          }}></Header>
        </TodoListPage>
      </RightSection>
      <InvitePage isViewInvite={isViewInvite} setIsViewInvite={setIsViewInvite}></InvitePage>
    </div>
  )
}

export default MainPage;