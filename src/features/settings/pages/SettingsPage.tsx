import * as Tabs from '@radix-ui/react-tabs';
import { useCallback, useState } from 'react';
import {
  Avatar,
  Button,
  LabeledRadioGroup,
  type LabeledRadioGroupOption,
  Switch,
} from '@shared/components';
import styles from './SettingsLayout.module.css';
import { useUserStore } from '@core/store/useUserStore';

const THEME_OPTIONS: LabeledRadioGroupOption[] = [
  { value: 'light', label: '라이트' },
  { value: 'dark', label: '다크' },
  { value: 'system', label: '시스템' },
];

const FONT_SIZE_OPTIONS: LabeledRadioGroupOption[] = [
  { value: 'smail', label: '작게' },
  { value: 'medium', label: '보통' },
  { value: 'large', label: '크게' },
];

const LAYOUT_SIZE_OPTIONS: LabeledRadioGroupOption[] = [
  { value: 'smail', label: '작게' },
  { value: 'medium', label: '보통' },
  { value: 'large', label: '크게' },
];

const LAYOUT_DENSITY_OPTIONS: LabeledRadioGroupOption[] = [
  { value: 'narrow', label: '좁게' },
  { value: 'medium', label: '보통' },
  { value: 'wide', label: '넓게' },
];

const PUSH_ITEMS = [
  { key: 'teamChat', label: '팀 채팅 알림', defaultEnabled: true },
  { key: 'directChat', label: '친구 채팅 알림', defaultEnabled: true },
  { key: 'fileShare', label: '파일 공유 알림', defaultEnabled: true },
  { key: 'todo', label: '할 일 목록 알림', defaultEnabled: false },
  { key: 'calendarCreated', label: '일정 등록 알림', defaultEnabled: true },
  { key: 'calendarReminder', label: '남은 일정 알림', defaultEnabled: true },
  { key: 'teamInvite', label: '팀 초대 알림', defaultEnabled: true },
  { key: 'friendRequest', label: '친구 요청 알림', defaultEnabled: true },
] as const;

type PushKey = (typeof PUSH_ITEMS)[number]['key'];

type PushSettings = Record<PushKey, boolean>;

function SettingsPage() {
  const user = useUserStore((state) => state.user);
  const [theme, setTheme] = useState('light');
  const [fontSize, setFontSize] = useState('medium');
  const [layoutSize, setLayoutSize] = useState('medium');
  const [layoutDensity, setLayoutDensity] = useState('medium');
  const [pushSettings, setPushSettings] = useState<PushSettings>(
    PUSH_ITEMS.reduce((acc, { key, defaultEnabled }) => {
      acc[key] = defaultEnabled;
      return acc;
    }, {} as PushSettings),
  );

  const setPush = useCallback((key: PushKey, enabled: boolean) => {
    setPushSettings((prev) => ({ ...prev, [key]: enabled }));
  }, []);

  return (
    <div className={styles.setting_root}>
      <div className={styles.setting_header}>
        <h3>설정</h3>
        <p>앱의 전반적인 설정을 관리합니다.</p>
      </div>

      <Tabs.Root defaultValue='pushes'>
        <Tabs.List className={styles.setting_nav_container}>
          <div className={styles.setting_nav}>
            <Tabs.Trigger value='pushes' className={styles.trigger}>
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
        <Tabs.Content value='pushes' className={styles.setting_view}>
          <div className={styles.setting_content}>
            {PUSH_ITEMS.map(({ key, label }) => (
              <div key={key} className={styles.setting_item}>
                <label htmlFor={`push-${key}`}>{label}</label>
                <Switch
                  id={`push-${key}`}
                  checked={pushSettings[key]}
                  onCheckedChange={(checked) => setPush(key, checked)}
                />
              </div>
            ))}
          </div>
        </Tabs.Content>
        <Tabs.Content value='theme' className={styles.setting_view}>
          <div className={styles.setting_content}>
            <div className={styles.setting_items_row}>
              <p>테마</p>
              <LabeledRadioGroup
                value={theme}
                onValueChange={setTheme}
                options={THEME_OPTIONS}
              />
            </div>
            <div className={styles.setting_items_row}>
              <p>폰트 크기</p>
              <LabeledRadioGroup
                value={fontSize}
                onValueChange={setFontSize}
                options={FONT_SIZE_OPTIONS}
              />
            </div>
            <div className={styles.setting_items_row}>
              <p>레이아웃 크기</p>
              <LabeledRadioGroup
                value={layoutSize}
                onValueChange={setLayoutSize}
                options={LAYOUT_SIZE_OPTIONS}
              />
            </div>
            <div className={styles.setting_items_row}>
              <p>레이아웃 밀도</p>
              <LabeledRadioGroup
                value={layoutDensity}
                onValueChange={setLayoutDensity}
                options={LAYOUT_DENSITY_OPTIONS}
              />
            </div>
          </div>
        </Tabs.Content>
        <Tabs.Content value='account' className={styles.setting_view}>
          <div className={styles.setting_content}>
            <div className={styles.setting_item}>
              <Button style={{ backgroundColor: '#e0f4ff' }}>
                비밀번호 변경
              </Button>
            </div>
            <div className={styles.setting_item}>
              <Button style={{ backgroundColor: '#e0f4ff' }}>로그아웃</Button>
            </div>
            <div className={styles.setting_item}>
              <Button style={{ backgroundColor: '#ffecf5', color: '#d4183d' }}>
                회원 탈퇴
              </Button>
            </div>
          </div>
        </Tabs.Content>
        <Tabs.Content value='profiles' className={styles.setting_view}>
          <div className={styles.setting_content}>
            <div className={styles.setting_item}>
              <Avatar />
              <Button style={{ backgroundColor: '#e0f4ff' }}>바꾸기</Button>
            </div>
            <div className={styles.setting_item}>
              <p>이름</p>
              {user?.name}
            </div>
            <div className={styles.setting_item}>
              <p>이메일</p>
              {user?.email}
            </div>
            <div className={styles.setting_item}>
              <p>닉네임</p>
              {user?.nickname}
            </div>
            <div className={styles.setting_item}>
              <p>상태 메시지</p>
              <p style={{ color: '#777' }}>구현 예정</p>
            </div>
          </div>
        </Tabs.Content>
      </Tabs.Root>
    </div>
  );
}

export default SettingsPage;
