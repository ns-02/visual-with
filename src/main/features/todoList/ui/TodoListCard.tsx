import { ContentButton } from '@components/ui';
import { EllipsisVertical } from 'lucide-react';
import TodoListDropdown from './TodoListDropdown';
import styles from './TodoListCard.module.css';

interface TodoListCardProps {
  id?: number;
  title?: string;
  description?: string;
  checked?: boolean;
  onChange?: () => void;
}

const TodoListCard = ({
  id,
  title,
  description,
  checked,
  onChange,
}: TodoListCardProps) => {
  const triggerElement = (
    <ContentButton>
      <EllipsisVertical size={16} />
    </ContentButton>
  );

  return (
    <div className={styles.container}>
      <div className={styles.info_contents}>
        <input type='checkbox' checked={checked} onChange={onChange} />
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
                {description}
              </p>
            </>
          ) : (
            <>
              <p>{title}</p>
              <p style={{ fontSize: '15px', color: '#555' }}>{description}</p>
            </>
          )}
        </div>
      </div>
      <div className={styles.navigation}>
        <TodoListDropdown todoId={id} triggerElement={triggerElement} />
      </div>
    </div>
  );
};

export default TodoListCard;
