import { useEffect, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import AlertDialog from '@shared/components/AlertDialog';
import type DialogProps from '@shared/components';

// 1. 메타데이터 정의: Storybook에 컴포넌트를 등록하고 open 상태 제어판을 설정
const meta: Meta<typeof AlertDialog> = {
  title: 'Common/AlertDialog',
  component: AlertDialog,
  argTypes: {
    // open 속성을 제어판에 노출 (다이얼로그 상태를 수동으로 제어 가능)
    open: { control: 'boolean' },
    // onOpenChange 함수 호출을 Action 탭에서 확인 가능
    onOpenChange: { action: 'onOpenChange triggered' },
  },
};
export default meta;

type Story = StoryObj<typeof AlertDialog>;

// 2. 렌더링 템플릿: 최소한의 상태 관리 로직과 테스트용 버튼 추가
const Template = (args: DialogProps) => {
  // Storybook의 Args에서 받은 open 상태를 관리
  const [isOpen, setIsOpen] = useState(args.open ?? false);

  // Args.open 값이 변경될 때 내부 상태 업데이트
  useEffect(() => {
    setIsOpen(args.open ?? false);
  }, [args.open]);

  return (
    <>
      {/* 💡 테스트용 Trigger: 이 버튼으로 Dialog를 열 수 있습니다. */}
      <button onClick={() => setIsOpen(true)}>다이얼로그 열기</button>

      {/* CDialog 렌더링: Storybook Args와 내부 상태를 연결 */}
      <AlertDialog
        {...args}
        open={isOpen}
        onOpenChange={(newOpen) => {
          setIsOpen(newOpen);
          args.onOpenChange?.(newOpen);
        }}
      >
        {/* Dialog 내부에 들어갈 더미 내용물 (필수) */}
        <p>이것은 Dialog의 내용입니다.</p>
      </AlertDialog>
    </>
  );
};

// 3. Story 정의: 기본 상태는 닫힘
export const Default: Story = {
  render: Template,
  args: {
    open: false,
    // dialogInfo의 더미 데이터 설정 필요
    title: '테스트 다이얼로그',
  },
};
