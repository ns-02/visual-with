import styles from './DashboardPage.module.css';
import { Button } from '@shared/components';
import { getIsAdmin } from '@shared/utils/permitUtils';
import { getTeamRuleName } from '@shared/models/Workspace';
import { useCurrentWorkspace } from '@core/hooks/useCurrentWorkspace';
import {
  Bar,
  BarChart,
  Line,
  LineChart,
  Pie,
  PieChart,
  PieSectorDataItem,
  ResponsiveContainer,
  Sector,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { useDashboardStore } from '../store/useDashboardStore';
import { useEffect } from 'react';

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444'];

interface RenderShapeProps extends PieSectorDataItem {
  index: number;
}

interface ChatActivityByTime {
  time: string;
  chats: number;
}

interface DDaySchedules {
  scheduleId: string;
  scheduleTitle: string;
  remainingDays: number;
}

interface RecentlyUploadedFiles {
  fileId: string;
  fileName: string;
  timeAgo: number;
}

interface RecentlyUploadedTodos {
  todoId: string;
  todoTitle: string;
  timeAgo: number;
}

const renderPieShape = (props: RenderShapeProps) => {
  const { index } = props;
  return <Sector {...props} fill={COLORS[index % COLORS.length]} />;
};

function DashboardPage() {
  const { selectTeamName, currentRule, teamId } = useCurrentWorkspace();
  const dashboardData = useDashboardStore((state) => state.dashboardData).find(
    (d) => d.teamId === teamId,
  );
  const updateTodoStatus = useDashboardStore((state) => state.updateTodoStatus);
  const updateFileType = useDashboardStore((state) => state.updateFileType);

  const todoStatusData = dashboardData?.todoStatusData || [];
  const fileTypeData = dashboardData?.fileTypeData || [];
  const monthlyTodoTrends = dashboardData?.monthlyTodoTrends || [];

  const chatActivityByTime: ChatActivityByTime[] = [
    { time: '00-02', chats: 23 },
    { time: '02-04', chats: 7 },
    { time: '04-06', chats: 4 },
    { time: '06-08', chats: 5 },
    { time: '08-10', chats: 41 },
    { time: '10-12', chats: 78 },
    { time: '12-14', chats: 91 },
    { time: '14-16', chats: 105 },
    { time: '16-18', chats: 121 },
    { time: '18-20', chats: 77 },
    { time: '20-22', chats: 45 },
    { time: '22-00', chats: 30 },
  ];

  const dDaySchedules: DDaySchedules[] = [
    {
      scheduleId: '1',
      scheduleTitle: '기획팀 주간 정기 회의',
      remainingDays: 2,
    },
    {
      scheduleId: '2',
      scheduleTitle: '디자인 피드백 세션',
      remainingDays: 3,
    },
  ];

  const recentlyUploadedFiles: RecentlyUploadedFiles[] = [
    {
      fileId: '1',
      fileName: '서비스_기획서_v1.2.pdf',
      timeAgo: 2,
    },
    {
      fileId: '2',
      fileName: '메인_레이아웃_시안.fig',
      timeAgo: 3,
    },
  ];

  const recentlyUploadedTodos: RecentlyUploadedTodos[] = [
    {
      todoId: '1',
      todoTitle: '헤더 컴포넌트 스타일 수정',
      timeAgo: 2,
    },
    {
      todoId: '2',
      todoTitle: '사이드바 전역 상태 연동',
      timeAgo: 3,
    },
  ];

  useEffect(() => {
    if (!teamId) {
      console.error('팀 아이디가 존재하지 않음');
      return;
    }

    updateTodoStatus(teamId);
    updateFileType(teamId);
  }, [updateTodoStatus, updateFileType, teamId]);

  return (
    <div className={styles.dashboard_page}>
      <div className={styles.contents}>
        <div className={styles.team_header}>
          <div className={styles.team_info}>
            <h2>{`${selectTeamName}`}</h2>
            <p>역할: {getTeamRuleName(currentRule)}</p>
            <p>멤버 수: 미구현</p>
          </div>
          {currentRule && getIsAdmin(currentRule) && (
            <div className={styles.team_button_area}>
              <Button>팀 관리</Button>
            </div>
          )}
        </div>

        <div className={styles.dashboard_label}>
          <div>할 일 완료 현황</div>
          <div>파일 유형별 현황</div>
        </div>
        <div className={styles.dashboard_area}>
          <div className='common_card p_8 w_full'>
            <ResponsiveContainer height={300}>
              <PieChart>
                <Pie
                  // innerRadius={160}
                  // outerRadius={200}
                  data={todoStatusData}
                  dataKey='value'
                  shape={renderPieShape}
                />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className='common_card p_8 w_full'>
            <ResponsiveContainer height={300}>
              <PieChart>
                <Pie
                  // innerRadius={160}
                  // outerRadius={200}
                  data={fileTypeData}
                  dataKey='value'
                  shape={renderPieShape}
                />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className={styles.dashboard_label}>
          <div>월별 할 일 완료 추이</div>
          <div>시간별 채팅 활성화</div>
        </div>
        <div className={styles.dashboard_area}>
          <div className='common_card p_8 w_full'>
            <ResponsiveContainer height={300}>
              <LineChart data={monthlyTodoTrends}>
                <XAxis dataKey='month' />
                <YAxis dataKey='todos' />
                <Tooltip />
                <Line dataKey='todos' />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className='common_card p_8 w_full'>
            <ResponsiveContainer height={300}>
              <BarChart data={chatActivityByTime}>
                <XAxis dataKey='time' />
                <YAxis dataKey='chats' />
                <Tooltip />
                <Bar dataKey='chats' />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className={styles.dashboard_label}>
          <div>다가오는 일정</div>
          <div>최근 파일</div>
          <div>최근 할 일</div>
        </div>
        <div style={{ display: 'flex', gap: 12 }}>
          <div style={{ flex: 1 }}>
            {dDaySchedules.map((item) => (
              <div key={item.scheduleId} className='common_card'>
                <div className='common_card_info flex_col'>
                  <p>{item.scheduleTitle}</p>
                  <div className='text_sec_100 d_flex gap_12'>
                    <div>{`${item.remainingDays}일 남음`}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ flex: 1 }}>
            {recentlyUploadedFiles.map((item) => (
              <div key={item.fileId} className='common_card'>
                <div className='common_card_info flex_col'>
                  <p>{item.fileName}</p>
                  <div className='text_sec_100 d_flex gap_12'>
                    <div>{`${item.timeAgo}일 전`}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ flex: 1 }}>
            {recentlyUploadedTodos.map((item) => (
              <div key={item.todoId} className='common_card'>
                <div className='common_card_info flex_col'>
                  <p>{item.todoTitle}</p>
                  <div className='text_sec_100 d_flex gap_12'>
                    <div>{`${item.timeAgo}일 전`}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
