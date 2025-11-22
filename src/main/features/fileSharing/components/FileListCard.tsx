import { Download, EllipsisVertical, FileText } from 'lucide-react';
import Button from '../../../../components/ui/Button';
import { FileListCardProps } from '../types';
import styles from './FileListCard.module.css';

const FileListCard = ({ fileName, date, fileSize, timeAgo, uploader }: FileListCardProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.info_contents}>
        <Button shape='square'>
          <FileText size={24} />
        </Button>
        <div>
          <p>{fileName}</p>
          <p style={{ fontSize: "15px", color: "#555" }} >
            {`${date} · ${fileSize} · ${timeAgo} · ${uploader}`}
          </p>
        </div>
      </div>
      <div className={styles.navigation}>
        <Button>
          <Download size={16} />
        </Button>
        <Button>
          <EllipsisVertical size={16} />
        </Button>
      </div>
    </div>
  )
}

export default FileListCard;