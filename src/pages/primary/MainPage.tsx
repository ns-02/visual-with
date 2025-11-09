import { useRef, useState } from "react";
import { Outlet } from 'react-router-dom'
import LeftMenu, { Tool } from "../../layouts/LeftMenu";
import RightSection from "../../layouts/RightSection";
import MainHeader from "../../layouts/MainHeader";
import MainBody from "../../layouts/MainBody";
import InvitePage from "../../features/invite/pages/InvitePage";
import usePath from "../../hooks/usePath";

interface PathIdList {
  id: Tool;
  path: string;
}

function MainPage() {
  const [ on, setInvite ] = useState(false);
  const [ path ] = usePath();  

  const pathIdList: PathIdList[] = [
    { id: 'team-chat', path: 'teamchat' },
    { id: 'files', path: 'filesharing' },
    { id: 'schedule', path: 'schedule' },
    { id: 'todos', path: 'todolist' },
    { id: 'friends', path: 'friendlist' },
    { id: 'direct-chat', path: 'directchat' },
  ];

  const toolId = pathIdList.filter((item) => path === item.path)[0]?.id;

  return (
    <>
      <LeftMenu onInvite={() => { setInvite(!on); }} ></LeftMenu>
      <RightSection>
        <MainHeader toolId={toolId as Tool} />
        <MainBody>
          <Outlet />
        </MainBody>
      </RightSection>
      <InvitePage state={on} setInvite={setInvite}></InvitePage>
    </>
  )
}

export default MainPage;