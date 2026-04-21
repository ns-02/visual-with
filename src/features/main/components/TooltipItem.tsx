import styles from './TooltipItem.module.css';

interface TooltipItemProps {
  text: string;
}

const TooltipItem = ({ text }: TooltipItemProps) => {
  return <span className={styles.tooltip_item}>{text}</span>;
};

export default TooltipItem;
