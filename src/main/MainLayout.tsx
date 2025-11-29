import { Outlet } from 'react-router-dom';
import LeftMenu from './components/layouts/LeftMenu';
import RightSection from './components/layouts/RightSection';
import MainHeader from './components/layouts/MainHeader';
import MainBody from './components/layouts/MainBody';

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
