import Header from "../../../layouts/Header";
import LeftFiles from "../layouts/LeftFiles";
import RightContents from "../layouts/RightContents";
import './FileSharingPage.css'

function FileSharingPage() {
  return (
    <div className="filesharingframe">
      <Header></Header>
      <div className="filesharingbody">
        <LeftFiles></LeftFiles>
        <RightContents></RightContents>
      </div>
    </div>
  )
}

export default FileSharingPage;
