import { Dispatch, SetStateAction, useState } from 'react';
import './InvitePage.css'

// type Prop = {
//   isViewInvite: boolean;
// }

type Prop = {
  isViewInvite: boolean;
  setIsViewInvite: Dispatch<SetStateAction<boolean>>;
}

function InvitePage({ isViewInvite, setIsViewInvite }: Prop) {
  return (
    <>
    {
      isViewInvite &&
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
            <div>
              <button onClick={() => setIsViewInvite(!isViewInvite)}>확인</button>
            </div>
          </div>
        </div>
      </div>
    }
    </>
  )
}

export default InvitePage;
