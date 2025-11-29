import { useState } from 'react';
import { Plus, Search, Upload } from 'lucide-react';
import HeaderBar from '@components/HeaderBar';
import { useTool } from '@context/ToolContext';
import UploadFileDialog from '../features/fileSharing/dialogs/UploadFileDialog';
import AddScheduleDialog from '../features/schedule/dialogs/AddScheduleDialog';
import AddTodoDialog from '../features/todoList/dialogs/AddTodoDialog';
import AddFriendDialog from '../features/friendList/dialogs/AddFriendDialog';
import HeaderItem from './MainHeaderItemType';
import styles from './Layouts.module.css';

function MainHeader() {
  const { toolId } = useTool();

  const [isUploadFileDialogOpen, setIsUploadFileDialogOpen] = useState(false);
  const [isAddScheduleDialogOpen, setIsAddScheduleDialogOpen] = useState(false);
  const [isAddTodoDialogOpen, setIsAddTodoDialogOpen] = useState(false);
  const [isAddFriendDialogOpen, setIsAddFriendDialogOpen] = useState(false);

  if (!toolId) {
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
    { id: 'direct-chat', label: '친구 채팅' },
  ];

  const headerItem = headerItems.filter(({ id }) => id === toolId);
  const inputIcon = <Search size={16}></Search>;

  return (
    <div className={styles.header}>
      {headerItem.map(({ id, label, button, onClick, icon }) => {
        const ButtonIcon = icon;

        return (
          <HeaderBar
            label={label}
            button={button}
            onClick={onClick}
            key={id}
            inputIcon={inputIcon}
          >
            {ButtonIcon && <ButtonIcon size={16} />}
          </HeaderBar>
        );
      })}
      <UploadFileDialog
        open={isUploadFileDialogOpen}
        onOpenChange={setIsUploadFileDialogOpen}
      />
      <AddScheduleDialog
        open={isAddScheduleDialogOpen}
        onOpenChange={setIsAddScheduleDialogOpen}
      />
      <AddTodoDialog
        open={isAddTodoDialogOpen}
        onOpenChange={setIsAddTodoDialogOpen}
      />
      <AddFriendDialog
        open={isAddFriendDialogOpen}
        onOpenChange={setIsAddFriendDialogOpen}
      />
    </div>
  );
}

export default MainHeader;
