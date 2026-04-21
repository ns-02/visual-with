import { CheckBox, Button, type CheckBoxProps } from '@shared/components/ui';
import { EllipsisVertical } from 'lucide-react';
import TodoListDropdown from './TodoListDropdown';
import styles from './TodoListCard.module.css';

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
    <div className={styles.container}>
      <div className={styles.info_contents}>
        <CheckBox
          id={`${id ?? ''}`}
          checked={checked ?? false}
          onCheckedChange={onCheckedChange}
          disabled={isCheckDisabled}
        />
        <div>
          {checked ? (
            <>
              <p style={{ textDecoration: 'line-through' }}>{title}</p>
              <p
                style={{
                  textDecoration: 'line-through',
                  fontSize: '15px',
                  color: '#555',
                }}
              >
                {`${authorName} - ${description}`}
              </p>
            </>
          ) : (
            <>
              <p>{title}</p>
              <p
                style={{ fontSize: '15px', color: '#555' }}
              >{`${authorName} - ${description}`}</p>
            </>
          )}
        </div>
      </div>
      <div className={styles.navigation}>
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
