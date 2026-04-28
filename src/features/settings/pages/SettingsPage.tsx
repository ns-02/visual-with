import * as Tabs from '@radix-ui/react-tabs';
import styles from './SettingsLayout.module.css';

function SettingsPage() {
  return (
    <div className={styles.setting_root}>
      <div className={styles.setting_header}>
        <h3>설정</h3>
        <p>앱의 전반적인 설정을 관리합니다.</p>
      </div>

      <Tabs.Root defaultValue='notifications'>
        <Tabs.List className={styles.setting_nav_container}>
          <div className={styles.setting_nav}>
            <Tabs.Trigger value='notifications' className={styles.trigger}>
              알림
            </Tabs.Trigger>
            <Tabs.Trigger value='theme' className={styles.trigger}>
              테마
            </Tabs.Trigger>
            <Tabs.Trigger value='account' className={styles.trigger}>
              계정
            </Tabs.Trigger>
            <Tabs.Trigger value='profiles' className={styles.trigger}>
              프로필
            </Tabs.Trigger>
          </div>
        </Tabs.List>
        <Tabs.Content value='notifications' className={styles.setting_view}>
          <div className={styles.setting_content}>
            <p>팀 채팅 알림 [on / off ]</p>
            <p>개인 채팅 알림 [on / off ]</p>
            <p>파일 공유 알림 [on / off ]</p>
            <p>할 일 목록 알림 [on / off ] (기본값: off)</p>
            <p>일정 등록 알림 [on / off ]</p>
            <p>남은 일정 알림 [on / off ]</p>
            <p>팀 초대 알림 [on / off ]</p>
            <p>친구 요청 알림 [on / off ]</p>
          </div>
        </Tabs.Content>
        <Tabs.Content value='theme' className={styles.setting_view}>
          <div className={styles.setting_content}>
            <p>테마 변경: [▼ 라이트 테마]</p>
            <p>폰트 크기: [▼ 보통]</p>
            <p>레이아웃 밀도: [▼ 보통]</p>
            <p>레이아웃 크기: [▼ 보통]</p>
          </div>
        </Tabs.Content>
        <Tabs.Content value='account' className={styles.setting_view}>
          <div className={styles.setting_content}>
            <p>비밀번호 변경</p>
            <p>로그아웃</p>
            <p>회원 탈퇴</p>
          </div>
        </Tabs.Content>
        <Tabs.Content value='profiles' className={styles.setting_view}>
          <div className={styles.setting_content}>
            <p>프로필 이미지 변경</p>
            <p>프로필 닉네임 변경</p>
            <p>프로필 이름 변경</p>
          </div>
        </Tabs.Content>
      </Tabs.Root>
    </div>
  );
}

export default SettingsPage;
