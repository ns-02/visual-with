import { CheckBox, Button, type CheckBoxProps } from '@shared/components';
import { EllipsisVertical } from 'lucide-react';
import TodoListDropdown from './TodoListDropdown';

interface TodoListCardProps {
  id?: number;
  title?: string;
  description?: string;
  authorId?: string;
  authorName?: string;
  checked?: CheckBoxProps['checked'];
  onCheckedChange?: CheckBoxProps['onCheckedChange'];
  isCheckDisabled?: boolean;
}

const TodoListCard = ({
  id,
  title,
  description,
  authorId,
  authorName,
  checked,
  onCheckedChange,
  isCheckDisabled,
}: TodoListCardProps) => {
  const triggerElement = (
    <Button variant='content'>
      <EllipsisVertical size={16} />
    </Button>
  );

  return (
    <div className='common_card'>
      <div className='common_card_info item_center'>
        <CheckBox
          id={`${id ?? ''}`}
          checked={checked ?? false}
          onCheckedChange={onCheckedChange}
          disabled={isCheckDisabled}
        />
        <div>
          <p style={{ textDecoration: `${checked ? 'line-through' : ''}` }}>
            {title}
          </p>
          <p
            className='text_sec_100'
            style={{
              textDecoration: `${checked ? 'line-through' : ''}`,
            }}
          >
            {`${authorName} - ${description}`}
          </p>
        </div>
      </div>
      <div className='common_card_nav'>
        <TodoListDropdown
          todoId={id}
          authorId={authorId}
          triggerElement={triggerElement}
        />
      </div>
    </div>
  );
};

export default TodoListCard;
