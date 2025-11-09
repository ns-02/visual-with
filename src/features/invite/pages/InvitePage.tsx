import { Dispatch, SetStateAction } from 'react';
import './InvitePage.css'

type Prop = {
  state: boolean;
  setInvite: Dispatch<SetStateAction<boolean>>;
}

function InvitePage({ state, setInvite }: Prop) {
  return (
    <>
    {
      state &&
      <div className="invite-frame">
        <div className="invite-modal">
          <div className="invite-contents">
            <div>
              초대하기
            </div>
            <br></br>
            <div>
              <span>
                <input name="inviteUrl" type='text' readOnly value="대충 url"></input>
              </span>
              <span>
                <button>링크 복사</button>
              </span>
            </div>
            <div>
              <button onClick={() => setInvite(!state)}>확인</button>
            </div>
          </div>
        </div>
      </div>
    }
    </>
  )
}

export default InvitePage;
