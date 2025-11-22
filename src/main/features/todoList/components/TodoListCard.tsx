import { TodoListCardProps } from '../types';
import styles from './TodoListCard.module.css';

const TodoListCard = ({ title, description, checked, onChange }: TodoListCardProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.info_contents}>
        <input type='checkbox' checked={checked} onChange={onChange} />
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
        <Button>
          <EllipsisVertical size={16} />
        </Button>
      </div> */}
    </div>
  )
}

export default TodoListCard;