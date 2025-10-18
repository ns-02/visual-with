import Header from "../../../Layouts/Header";
import LeftFiles from "../Layouts/LeftFiles";
import RightContents from "../Layouts/RightContents";
import './FileSharingPage.css'

function FileSharingPage() {
  return (
    <div className="file-sharing-frame">
      <Header></Header>
      <div className="file-sharing-body">
        <LeftFiles></LeftFiles>
        <RightContents></RightContents>
      </div>
    </div>
  )
}

export default FileSharingPage;
