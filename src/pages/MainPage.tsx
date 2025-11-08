import { useState } from "react";
import { Outlet } from 'react-router-dom'
import LeftMenu, { Tool } from "../layouts/LeftMenu";
import RightSection from "../layouts/RightSection";
import MainHeader from "../layouts/MainHeader";
import MainBody from "../layouts/MainBody";
import InvitePage from "../features/invite/pages/InvitePage";
import './css/MainPage.css';

function MainPage() {
  const [ on, setInvite ] = useState(false);
  const [ viewTool, setTool ] = useState<Tool>('team-chat');

  return (
    <div className="main">
      <LeftMenu setTool={setTool} onInvite={() => { setInvite(!on); }} ></LeftMenu>
      <RightSection>
        <MainHeader viewTool={viewTool} />
        <MainBody>
          <Outlet />
        </MainBody>
      </RightSection>
      <InvitePage state={on} setInvite={setInvite}></InvitePage>
    </div>
  )
}

export default MainPage;