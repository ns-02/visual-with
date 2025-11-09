import { useState } from "react";
import { Outlet } from 'react-router-dom'
import LeftMenu from "../../layouts/LeftMenu";
import RightSection from "../../layouts/RightSection";
import MainHeader from "../../layouts/MainHeader";
import MainBody from "../../layouts/MainBody";
import InvitePage from "../../features/invite/pages/InvitePage";

function MainPage() {
  const [ on, setInvite ] = useState(false);

  return (
    <>
      <LeftMenu onInvite={() => { setInvite(!on); }} ></LeftMenu>
      <RightSection>
        <MainHeader />
        <MainBody>
          <Outlet />
        </MainBody>
      </RightSection>
      <InvitePage state={on} setInvite={setInvite}></InvitePage>
    </>
  )
}

export default MainPage;