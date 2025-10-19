import './layouts.css'

type Prop = {
  onViewInvite: VoidFunction;
}

function Header({ onViewInvite }: Prop) {
  return (
    <div className="header">
      <span>아이콘</span>
      <span>내용</span>
      <input placeholder="검색"></input>
      <span>
        <button onClick={() => {
          onViewInvite();
        }}>링크 공유</button>
      </span>
    </div>
  )
}

export default Header;