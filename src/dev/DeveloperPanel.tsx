import { useDeveloperMananger } from './useDeveloperManager';

export default function DeveloperPanel() {
  const { masterLogin, masterCreateTeam, mapsToMain } = useDeveloperMananger();

  return (
    <div style={{ display: 'flex', gap: '12px' }}>
      <button onClick={() => masterLogin()}>마스터 로그인</button>
      <button onClick={() => masterCreateTeam()}>마스터 팀 생성</button>
      <button onClick={() => mapsToMain()}>메인</button>
    </div>
  );
}
