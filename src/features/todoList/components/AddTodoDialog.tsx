import { Dispatch, SetStateAction, useState } from 'react';
import { Dialog, DialogInput } from '@shared/components';
import { useTodoManager } from '../hooks/useTodoManager';

interface AddTodoDialogProps {
  open: boolean;
  onOpenChange: Dispatch<SetStateAction<boolean>>;
}

const AddTodoDialog = ({ open, onOpenChange }: AddTodoDialogProps) => {
  const { addTodoInManager } = useTodoManager();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleAddTodo = async () => {
    if (!title.trim()) return;

    await addTodoInManager(title, description);

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
