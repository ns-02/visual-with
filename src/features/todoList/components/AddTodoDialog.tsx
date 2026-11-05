import { toast } from '@core/store/useToastStore';
import { Dispatch, SetStateAction, useRef, useState } from 'react';
import { Dialog } from '@shared/components';
import { useTodoManager } from '../hooks/useTodoManager';

interface AddTodoDialogProps {
  open: boolean;
  onOpenChange: Dispatch<SetStateAction<boolean>>;
}

const AddTodoDialog = ({ open, onOpenChange }: AddTodoDialogProps) => {
  const { addTodoInManager } = useTodoManager();
  const pending = useRef(false);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleAddTodo = async () => {
    if (!title.trim()) return;

    if (pending.current) return;
    pending.current = true;
    try {
      const success = await addTodoInManager(title, description);
      if (!success) return;

      setTitle('');
      setDescription('');
      onOpenChange(false);
    } catch {
      toast.error('할 일을 추가하지 못했습니다.');
    } finally {
      pending.current = false;
    }
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
        <input
          name='input'
          autoComplete='off'
          className='dialog_input'
          placeholder='할 일 제목을 입력하세요'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className='mb_10'>
        <label>내용</label>
        <input
          name='input'
          autoComplete='off'
          className='dialog_input'
          placeholder='할 일을 입력하세요'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
    </Dialog>
  );
};

export default AddTodoDialog;
