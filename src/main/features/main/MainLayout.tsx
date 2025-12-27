import { Outlet } from 'react-router-dom';
import LeftMenu from './layouts/LeftMenu';
import RightSection from './layouts/RightSection';
import MainHeader from './layouts/MainHeader';
import MainBody from './layouts/MainBody';

function MainLayout() {
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
  );
}

export default MainLayout;
