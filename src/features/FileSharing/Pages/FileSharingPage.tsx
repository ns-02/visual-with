import LeftFiles from "../section/LeftFiles";
import RightContents from "../section/RightContents";
import './FileSharingPage.css'

function FileSharingPage() {
  return (
    <div className="file-sharing">
      <LeftFiles></LeftFiles>
      <RightContents></RightContents>
    </div>
  )
}

export default FileSharingPage;
