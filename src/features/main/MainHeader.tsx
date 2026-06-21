import { useState } from 'react';
import { File, LucideProps, Plus, Search, Upload } from 'lucide-react';
import { Button, Input } from '@shared/components';

import UploadFileDialog from '../fileSharing/components/UploadFileDialog';
import AddScheduleDialog from '../schedule/components/AddScheduleDialog';
import AddTodoDialog from '../todoList/components/AddTodoDialog';
import AddFriendDialog from '../friendList/components/AddFriendDialog';
import styles from './Layouts.module.css';
import { useDirectChatStore } from '@features/chat/store/useDirectChatStore';
import { useToolId } from '@core/hooks/useWorkspaceParams';
import { ToolId } from '@shared/models/Workspace';

interface HeaderItem {
  id: ToolId;
  label: string;
  button?: string;
  onClick?: () => void | undefined;
  icon?: React.ComponentType<LucideProps>;
}

function MainHeader() {
  const toolId = useToolId();
  const toggleAreaOpen = useDirectChatStore((state) => state.toggleAreaOpen);

  const [isUploadFileDialogOpen, setIsUploadFileDialogOpen] = useState(false);
  const [isAddScheduleDialogOpen, setIsAddScheduleDialogOpen] = useState(false);
  const [isAddTodoDialogOpen, setIsAddTodoDialogOpen] = useState(false);
  const [isAddFriendDialogOpen, setIsAddFriendDialogOpen] = useState(false);

  if (!toolId || toolId === 'home') {
    return;
  }

  const headerItems: HeaderItem[] = [
    { id: 'team-chat', label: '팀 채팅' },
    {
      id: 'files',
      label: '파일 공유',
      button: '업로드',
      icon: Upload,
      onClick: () => setIsUploadFileDialogOpen(true),
    },
    {
      id: 'schedule',
      label: '일정 관리',
      button: '일정 추가',
      icon: Plus,
      onClick: () => setIsAddScheduleDialogOpen(true),
    },
    {
      id: 'todos',
      label: '할 일 목록',
      button: '할 일 추가',
      icon: Plus,
      onClick: () => setIsAddTodoDialogOpen(true),
    },
    {
      id: 'friends',
      label: '친구 목록',
      button: '친구 추가',
      icon: Plus,
      onClick: () => setIsAddFriendDialogOpen(true),
    },
    {
      id: 'direct-chat',
      label: '친구 채팅',
      button: '파일 목록',
      icon: File,
      onClick: () => toggleAreaOpen(),
    },
  ];

  const headerItem = headerItems.filter(({ id }) => id === toolId);

  return (
    <div className={styles.header}>
      {headerItem.map(({ id, label, button, onClick, icon }) => {
        const ButtonIcon = icon;

        return (
          <div key={id} className={styles.header_inner}>
            <div className={styles.label}>
              <span>{label}</span>
            </div>
            <div className={styles.rsection}>
              <Input value='' placeholder='검색' sizeMode='fixed'>
                <Search size={16} />
              </Input>
              {button && onClick && (
                <Button
                  text={button}
                  className={styles.button_primary}
                  onClick={onClick}
                >
                  {ButtonIcon && <ButtonIcon size={16} />}
                </Button>
              )}
            </div>
          </div>
        );
      })}
      {isUploadFileDialogOpen && (
        <UploadFileDialog
          open={isUploadFileDialogOpen}
          onOpenChange={setIsUploadFileDialogOpen}
        />
      )}
      {isAddScheduleDialogOpen && (
        <AddScheduleDialog
          open={isAddScheduleDialogOpen}
          onOpenChange={setIsAddScheduleDialogOpen}
        />
      )}
      {isAddTodoDialogOpen && (
        <AddTodoDialog
          open={isAddTodoDialogOpen}
          onOpenChange={setIsAddTodoDialogOpen}
        />
      )}
      {isAddFriendDialogOpen && (
        <AddFriendDialog
          open={isAddFriendDialogOpen}
          onOpenChange={setIsAddFriendDialogOpen}
        />
      )}
    </div>
  );
}

export default MainHeader;
