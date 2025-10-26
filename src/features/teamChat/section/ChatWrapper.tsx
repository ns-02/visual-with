import { Plus, Send } from 'lucide-react';
import ChatFooter from '../../../components/ChatFooter';
import './Section.css'

function ChatWrapper() {
  return (
    <div className="chat-wrapper">
      <ChatFooter 
        button1=''
        button2=''
        icon1={Plus}
        icon2={Send}
        onClick1={() => {}}
        onClick2={() => {}}
      />
    </div>
  )
}

export default ChatWrapper;