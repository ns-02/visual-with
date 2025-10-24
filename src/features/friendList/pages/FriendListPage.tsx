import LeftSubject from "../section/LeftSubject";
import RightContents from "../section/RightContents";
import './FriendListPage.css'

type Prop = {
  children: React.ReactNode;
}

function FriendListPage({ children }: Prop) {
  return (
    <div className="friendlist-frame">
      {children}
      <div className="friendlist-body">
        <LeftSubject></LeftSubject>
        <RightContents></RightContents>
      </div>
    </div>
  )
}

export default FriendListPage;
