import { useWorkspaceStore } from '@core/store/useWorkspaceStore';
import { useUserStore } from '@core/store/useUserStore';
import { Dispatch, SetStateAction, useState } from 'react';
import { Dialog, Group, DialogInput } from '@shared/components/dialogs';
import { useTodoStore } from '../store/useTodoStore';

interface AddTodoDialogProps {
  open: boolean;
  onOpenChange: Dispatch<SetStateAction<boolean>>;
}

const AddTodoDialog = ({ open, onOpenChange }: AddTodoDialogProps) => {
  const addTodo = useTodoStore((state) => state.addTodo);
  const selectTeamId = useWorkspaceStore((state) => state.selectTeamId);
  const userId = useUserStore((state) => state.user?.id);
  const userName = useUserStore((state) => state.user?.name);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleAddTodo = () => {
    if (!title || !selectTeamId || !userId || !userName) return;

    addTodo({
      title,
      description: description || undefined,
      teamId: selectTeamId,
      authorId: userId,
      authorName: userName,
    });
    setTitle('');
    setDescription('');
    onOpenChange(false);
  };

  return (
    <Dialog
      title='할 일 추가'
      open={open}
      onOpenChange={onOpenChange}
      confirmText='추가'
      onConfirm={handleAddTodo}
    >
      <Group>
        <label>제목</label>
        <DialogInput
          placeholder='할 일 제목을 입력하세요'
          value={title}
          setValue={(e) => setTitle(e.target.value)}
        />
      </Group>
      <Group>
        <label>내용</label>
        <DialogInput
          placeholder='할 일을 입력하세요'
          value={description}
          setValue={(e) => setDescription(e.target.value)}
        />
      </Group>
    </Dialog>
  );
};

export default AddTodoDialog;
