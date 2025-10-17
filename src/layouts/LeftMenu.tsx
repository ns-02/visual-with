import { useState } from 'react';
import './layouts.css'

function LeftMenu() {
  const [ isViewTool, setIsViewTool ] = useState(true);
  const [ isViewTeam, setIsViewTeam ] = useState(false);

  return (
    <>
      <section className='leftmenu'>
        <div>
          <button onClick={() => {
            setIsViewTool(!isViewTool);
            setIsViewTeam(!isViewTeam);
          }}>토글 버튼</button>
        </div>
        <br></br>
        {
          isViewTool && 
          <div className='tool'>
            <div>
              <button>도구 1</button>
            </div>
            <div>
              <button>도구 2</button>
            </div>
            <div>
              <button>도구 3</button>
            </div>
            <div>
              <button>도구 4</button>
            </div>
          </div>
        }
        {
          isViewTeam && 
          <div className='team'>
            <div>
              <button>팀 1</button>
            </div>
            <div>
              <button>팀 2</button>
            </div>
            <div>
              <button>팀 3</button>
            </div>
            <div>
              <button>팀 4</button>
            </div>
          </div>
        }
        
      </section>
    </>
  )
}

export default LeftMenu;