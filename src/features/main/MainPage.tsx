import { useUserStore } from '@core/store/useUserStore';
import { useWorkspaceStore } from '@core/store/useWorkspaceStore';
import { useRouteManager } from '@core/routes/useRouteManager';
import { ChevronRight, Users } from 'lucide-react';
import styles from './Layouts.module.css';

function MainPage() {
  const user = useUserStore((state) => state.user);
  const teams = useWorkspaceStore((state) => state.teamData);
  const memberships = useWorkspaceStore((state) => state.membershipData);
  const isReady = useWorkspaceStore((state) => state.isWorkspaceBootstrapped);
  const hasError = useWorkspaceStore(
    (state) => state.isWorkspaceBootstrapError,
  );
  const { switchTeamWithTool } = useRouteManager();
  const joinedTeams = teams.filter((team) =>
    memberships.some(
      (member) =>
        member.teamId === team.id &&
        member.userId === user?.id &&
        member.status === 'ACCEPTED',
    ),
  );

  return (
    <div className={styles.main_page}>
      <div className={styles.contents}>
        <h1>
          {user?.nickname || user?.name
            ? `${user.nickname || user.name}님, 환영합니다`
            : '환영합니다'}
        </h1>
        <p className={styles.main_description}>함께할 팀을 선택해 주세요.</p>
        <h2 className={styles.teams_heading}>내 팀</h2>
        {!isReady ? (
          <p className={styles.main_description}>
            팀 목록을 불러오는 중입니다.
          </p>
        ) : hasError ? (
          <p className={styles.main_description}>
            팀 목록을 불러오지 못했습니다.
          </p>
        ) : joinedTeams.length === 0 ? (
          <p className={styles.main_empty}>아직 소속된 팀이 없습니다.</p>
        ) : (
          <div className={styles.team_grid}>
            {joinedTeams.map((team) => (
              <button
                key={team.id}
                className={styles.team_card}
                onClick={() => switchTeamWithTool(team.id)}
              >
                <span className={styles.team_icon}>
                  <Users size={20} />
                </span>
                <span className={styles.team_name}>{team.name}</span>
                <ChevronRight size={20} aria-hidden='true' />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default MainPage;
