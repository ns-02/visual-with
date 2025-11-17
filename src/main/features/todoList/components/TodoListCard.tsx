import { EllipsisVertical, User } from 'lucide-react';
import Button from '../../../../components/ui/Button';
import styles from './TodoListCard.module.css';

interface Props {
  title?: string;
  description?: string;
  checked?: boolean;
}

const TodoListCard = ({ title, description, checked }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.info_contents}>
        <input type='checkbox' checked={checked} />
        <div>
          {
            checked ?
            <>
              <p style={{ textDecoration: "line-through" }}>{title}</p>
              <p style={{ textDecoration: "line-through", fontSize: "15px", color: "#555" }} >{description}</p>
            </> :
            <>
              <p>{title}</p>
              <p style={{ fontSize: "15px", color: "#555" }} >{description}</p>
            </>
          }
          
        </div>
      </div>
      {/* <div className={styles.navigation}>
        <Button icon={EllipsisVertical} iconSize={16} />
      </div> */}
    </div>
  )
}

export default TodoListCard;