import { useState } from "react";
import { Outlet } from 'react-router-dom'
import LeftMenu from "../../layouts/LeftMenu";
import RightSection from "../../layouts/RightSection";
import MainHeader from "../../layouts/MainHeader";
import MainBody from "../../layouts/MainBody";
import InvitePage from "../../features/invite/pages/InvitePage";
import CreateTeamDialog from "../../features/teamManager/dialogs/CreateTeamDialog";

function MainPage() {
  const [ on, setInvite ] = useState(false);

  return (
    <>
      <LeftMenu onInvite={() => { setInvite(!on); }} />
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