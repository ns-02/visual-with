import DirectContents from '../section/DirectContents';
import DirectWrapper from '../section/DirectWrapper';
import './DirectPage.css'

function DirectPage() {
  return (
    <div className="direct-frame">
      <DirectContents></DirectContents>
      <DirectWrapper></DirectWrapper>
    </div>
  )
}

export default DirectPage;
