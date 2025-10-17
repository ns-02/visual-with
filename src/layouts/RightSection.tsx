import ChatWrapper from '../components/ChatWrapper';
import Contents from '../components/Contents';
import Header from './Header';
import './layouts.css'

function RightSection() {
  return (
    <section className="rightsection">
      <Header></Header>
      <Contents></Contents>
      <ChatWrapper></ChatWrapper>
    </section>
  )
}

export default RightSection;