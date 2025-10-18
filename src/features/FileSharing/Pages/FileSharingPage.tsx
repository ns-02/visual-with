import Header from "../../../Layouts/Header";
import LeftFiles from "../Layouts/LeftFiles";
import RightContents from "../Layouts/RightContents";
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
