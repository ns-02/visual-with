import * as Tabs from '@radix-ui/react-tabs';
import styles from './SettingsLayout.module.css';

function SettingsPage() {
  return (
    <div className={styles.setting_root}>
      <h2>설정 페이지입니다.</h2>

      <Tabs.Root defaultValue='notifications'>
        <Tabs.List>
          <Tabs.Trigger value='notifications'>알림</Tabs.Trigger>
          <Tabs.Trigger value='theme'>테마</Tabs.Trigger>
          <Tabs.Trigger value='account'>계정</Tabs.Trigger>
          <Tabs.Trigger value='profiles'>프로필</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value='notifications'>
          <p>팀 채팅 알림 [on / off ]</p>
          <p>개인 채팅 알림 [on / off ]</p>
          <p>파일 공유 알림 [on / off ]</p>
          <p>할 일 목록 알림 [on / off ] (기본값: off)</p>
          <p>일정 등록 알림 [on / off ]</p>
          <p>남은 일정 알림 [on / off ]</p>
          <p>팀 초대 알림 [on / off ]</p>
          <p>친구 요청청 알림 [on / off ]</p>
        </Tabs.Content>
        <Tabs.Content value='theme'>
          <p>테마 변경: [▼ 라이트 테마]</p>
          <p>폰트 크기: [▼ 보통]</p>
          <p>레이아웃 밀도: [▼ 보통]</p>
          <p>레이아웃 크기: [▼ 보통]</p>
        </Tabs.Content>
        <Tabs.Content value='account'>
          <p>비밀번호 변경</p>
          <p>로그아웃</p>
          <p>회원 탈퇴</p>
        </Tabs.Content>
        <Tabs.Content value='profiles'>
          <p>프로필 이미지 변경</p>
          <p>프로필 닉네임 변경</p>
          <p>프로필 이름 변경</p>
        </Tabs.Content>
      </Tabs.Root>
    </div>
  );
}

export default SettingsPage;
