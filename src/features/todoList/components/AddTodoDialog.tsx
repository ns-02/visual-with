import { useUserStore } from '@core/store/useUserStore';
import { Dispatch, SetStateAction, useState } from 'react';
import { Dialog, DialogInput } from '@shared/components';
import { useTodoStore } from '../store/useTodoStore';
import { useWorkspaceParams } from '@core/hooks/useWorkspaceParams';
import { addTodoFetch } from '@shared/api/api';

interface AddTodoDialogProps {
  open: boolean;
  onOpenChange: Dispatch<SetStateAction<boolean>>;
}

const AddTodoDialog = ({ open, onOpenChange }: AddTodoDialogProps) => {
  const addTodo = useTodoStore((state) => state.addTodo);
  const { teamId } = useWorkspaceParams();
  const userId = useUserStore((state) => state.user?.id);
  const userName = useUserStore((state) => state.user?.name);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleAddTodo = async () => {
    if (!title || !teamId || !userId || !userName) return;

    const res = await addTodoFetch({
      title,
      content: description || '',
      teamId: teamId,
      userId: userId,
      createdDate: '날짜',
      createdTime: '시간',
    });

    console.log(res);

    addTodo({
      title,
      description: description || undefined,
      teamId: teamId,
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
      <div className='mb_10'>
        <label>제목</label>
        <DialogInput
          placeholder='할 일 제목을 입력하세요'
          value={title}
          setValue={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className='mb_10'>
        <label>내용</label>
        <DialogInput
          placeholder='할 일을 입력하세요'
          value={description}
          setValue={(e) => setDescription(e.target.value)}
        />
      </div>
    </Dialog>
  );
};

export default AddTodoDialog;
