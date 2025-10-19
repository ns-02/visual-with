import LeftFiles from "../Layouts/LeftFiles";
import RightContents from "../Layouts/RightContents";
import './FileSharingPage.css'

type Prop = {
  children: React.ReactNode;
}

function FileSharingPage({ children }: Prop) {
  return (
    <div className="file-sharing-frame">
      {children}
      <div className="file-sharing-body">
        <LeftFiles></LeftFiles>
        <RightContents></RightContents>
      </div>
    </div>
  )
}

export default FileSharingPage;
