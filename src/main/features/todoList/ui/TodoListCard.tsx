import { ContentButton } from '@components/ui';
import { TodoListCardProps } from '..';
import styles from './TodoListCard.module.css';
import { EllipsisVertical } from 'lucide-react';

const TodoListCard = ({
  title,
  description,
  checked,
  onChange,
}: TodoListCardProps) => {
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
        <ContentButton>
          <EllipsisVertical size={16} />
        </ContentButton>
      </div>
    </div>
  );
};

export default TodoListCard;
