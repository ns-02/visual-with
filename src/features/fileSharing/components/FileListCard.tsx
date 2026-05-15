import { Download, EllipsisVertical } from 'lucide-react';
import FileSharingDropdown from './FileSharingDropdown';
import styles from './FileSharingUI.module.css';
import { Button, FileIcon } from '@shared/components';

interface FileListCardProps {
  id?: number;
  fileName?: string;
  date?: string;
  fileSize?: string;
  timeAgo?: string;
  authorId?: string;
  authorName?: string;
}

const FileListCard = ({
  id,
  fileName,
  date,
  fileSize,
  // timeAgo,
  authorId,
  authorName,
}: FileListCardProps) => {
  const triggerElement = (
    <Button variant='content'>
      <EllipsisVertical size={16} />
    </Button>
  );

  return (
    <div className={styles.list_card}>
      <div className={styles.info_contents}>
        <FileIcon />
        <div>
          <p>{fileName}</p>
          <p className={styles.info_sub_text}>
            {`${date} · ${fileSize} · ${authorName}`}
          </p>
        </div>
      </div>
      <div className={styles.list_nav}>
        <Button variant='content'>
          <Download size={16} />
        </Button>
        <FileSharingDropdown
          fileId={id}
          triggerElement={triggerElement}
          authorId={authorId}
        />
      </div>
    </div>
  );
};

export default FileListCard;
