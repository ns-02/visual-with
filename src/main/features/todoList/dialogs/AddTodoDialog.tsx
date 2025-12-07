import { Dispatch, SetStateAction, useState } from 'react';
import { Dialog, Group, DialogInput } from '@components/dialogs';
import { Button } from '@components/ui';
import { useTodo } from '@context/TodoContext';
import getMaxId from '@utils/getMaxId';

interface AddTodoDialogProps {
  open: boolean;
  onOpenChange: Dispatch<SetStateAction<boolean>>;
}

const AddTodoDialog = ({ open, onOpenChange }: AddTodoDialogProps) => {
  const { todoData, setTodoData } = useTodo();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleAddTodo = () => {
    if (!title) return;
    const maxId = getMaxId(todoData) ?? 0;
    const nextTodoData = [
      ...todoData,
      { id: maxId + 1, title, description, checked: false },
    ];

    setTodoData(nextTodoData);
    setTitle('');
    setDescription('');
    onOpenChange(false);
  };

  const confirmButton = <Button text='추가' onCustomClick={handleAddTodo} />;

  return (
    <Dialog
      title='할 일 추가'
      open={open}
      onOpenChange={onOpenChange}
      confirmButton={confirmButton}
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
