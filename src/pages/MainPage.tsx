import Header from "../components/Header";
import ChatWrapper from "../components/ChatWrapper";
import LeftMenu from "../components/LeftMenu";
import './MainPage.css'
import Contents from "../components/Contents";

function MainPage() {
  return (
    <>
      <LeftMenu></LeftMenu>
      <section className="rightcontents">
        <Header></Header>
        <Contents></Contents>
        <ChatWrapper></ChatWrapper>
      </section>
    </>
  )
}

export default MainPage;