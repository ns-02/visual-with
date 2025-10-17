import Header from "../../../layouts/Header";
import LeftFiles from "../layouts/LeftFiles";
import RightFileContents from "../layouts/RightFileContents";
import './FileSharingPage.css'

function FileSharingPage() {
  return (
    <div className="filesharingframe">
      <Header></Header>
      <div className="filesharingbody">
        <LeftFiles></LeftFiles>
        <RightFileContents></RightFileContents>
      </div>
    </div>
  )
}

export default FileSharingPage;
