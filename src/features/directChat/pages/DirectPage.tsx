import DirectContents from '../section/DirectContents';
import DirectWrapper from '../section/DirectWrapper';
import LeftFriends from '../section/LeftFriends';
import RightChats from '../section/RightChats';
import './DirectPage.css'

function DirectPage() {
  return (
    <div className="direct-frame">
      <LeftFriends></LeftFriends>
      <RightChats>
        <DirectContents></DirectContents>
        <DirectWrapper></DirectWrapper>
      </RightChats>
    </div>
  )
}

export default DirectPage;
