import { Outlet } from 'react-router-dom'
import { LeftMenu, MainBody, MainHeader, RightSection } from './layouts';

function MainPage() {
  return (
    <>
      <LeftMenu />
      <RightSection>
        <MainHeader />
        <MainBody>
          <Outlet />
        </MainBody>
      </RightSection>
    </>
  )
}

export default MainPage;