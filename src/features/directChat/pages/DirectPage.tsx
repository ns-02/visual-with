import DirectContents from '../section/DirectContents';
import DirectWrapper from '../section/DirectWrapper';
import './DirectPage.css'

type Prop = {
  children: React.ReactNode;
}

function DirectPage({ children }: Prop) {
  return (
    <div className="direct-frame">
      {children}
      <DirectContents></DirectContents>
      <DirectWrapper></DirectWrapper>
    </div>
  )
}

export default DirectPage;
