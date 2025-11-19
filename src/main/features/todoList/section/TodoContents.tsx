import { useState } from 'react';
import { Circle, CircleCheckBig } from 'lucide-react';
import TodoListCard from '../components/TodoListCard';
import TodoListLabel from '../components/TodoListLabel';
import styles from './TodoListSection.module.css'

interface TodoItems {
  id: number;
  title?: string;
  description?: string;
  checked?: boolean;
}

function RightContents() {
  // const [ checked, setChecked ] = useState(false);

  const progressItems: TodoItems[] = [
    { id: 1, title: '프로젝트 기획안 작성', description: '클라이언트 미팅 준비', checked: false },
    { id: 2, title: '디자인 시안 검토', description: '팀원들과 피드백 공유', checked: false },
    { id: 3, title: '코드 리뷰 진행', description: 'PR 3건 확인 필요', checked: false },
  ];

  const completedItems: TodoItems[] = [
    { id: 1, title: '업무 진척도 검토', description: '한 주간 핵심 지표 점검', checked: true },
    { id: 2, title: '프로젝트 회의록', description: '팀의 회의 내용 및 아이템 관리', checked: true },
  ];

  const [progressData, setProgressData] = useState<TodoItems[]>(progressItems);
  const [completedData, setCompletedData] = useState<TodoItems[]>(completedItems);

  const handleProgCheckBoxClick = (id: number) => {
    const nextData = progressData.map((item) => item.id === id ? {...item, checked: !item.checked} : item);
    setProgressData(nextData);
  }

  const handleCompCheckBoxClick = (id: number) => {
    const nextData = completedData.map((item) => item.id === id ? {...item, checked: !item.checked} : item);
    setCompletedData(nextData);
  }

  return (
    <div className={styles.contents}>
      <TodoListLabel text='진행 중' count={3} >
        <Circle size={16} />
      </TodoListLabel>
      {
        progressData.map((item) => {
          return (
            <TodoListCard title={item.title} description={item.description} checked={item.checked} onClick={() => handleProgCheckBoxClick(item.id)} />
          )
        })
      }
      <TodoListLabel text='완료' count={2} >
        <CircleCheckBig size={16} />
      </TodoListLabel>
      {
        completedData.map((item) => {
          return (
            <TodoListCard title={item.title} description={item.description} checked={item.checked} onClick={() => handleCompCheckBoxClick(item.id)} />
          )
        })
      }
    </div>
  )
}

export default RightContents;