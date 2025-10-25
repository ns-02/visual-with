import './Section.css'

type Prop = {
  children: React.ReactNode;
}


function RightChats({ children }: Prop) {
  return (
    <div className="right-chats">
      {children}
    </div>
  )
}

export default RightChats;