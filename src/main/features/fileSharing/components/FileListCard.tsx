import { Download, EllipsisVertical, FileText } from 'lucide-react';
import Button from '../../../../components/ui/Button';
import styles from './FileListCard.module.css';

interface Props {
  fileName?: string;
  date?: string;
  fileSize?: string;
  timeAgo?: string;
  uploader?: string;
}

const FileListCard = ({ fileName, date, fileSize, timeAgo, uploader }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.info_contents}>
        <Button shape='square' icon={FileText} iconSize={24} />
        <div>
          <p>{fileName}</p>
          <p style={{ fontSize: "15px", color: "#555" }} >
            {`${date} · ${fileSize} · ${timeAgo} · ${uploader}`}
          </p>
        </div>
      </div>
      <div className={styles.navigation}>
        <Button icon={Download} iconSize={16} />
        <Button icon={EllipsisVertical} iconSize={16} />
      </div>
    </div>
  )
}

export default FileListCard;