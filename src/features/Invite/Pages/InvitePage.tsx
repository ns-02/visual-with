import './InvitePage.css'

function InvitePage() {
  return (
    <div className="invite-frame">
      <div className="invite-modal">
        <div className="invite-contents">
          <div>
            초대하기
          </div>
          <br></br>
          <div>
            <span>
              <input type='text' readOnly value="대충 url"></input>
            </span>
            <span>
              <button>링크 복사</button>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InvitePage;
