import { Download, EllipsisVertical } from 'lucide-react';
import FileSharingDropdown from './FileSharingDropdown';
import FileIcon from './FileIcon';
import styles from './FileListCard.module.css';
import { Button } from '@shared/components';

interface FileListCardProps {
  id?: number;
  fileName?: string;
  date?: string;
  fileSize?: string;
  timeAgo?: string;
  uploader?: string;
}

const FileListCard = ({
  id,
  fileName,
  date,
  fileSize,
  timeAgo,
  uploader,
}: FileListCardProps) => {
  const triggerElement = (
    <Button variant='content'>
      <EllipsisVertical size={16} />
    </Button>
  );

  return (
    <div className={styles.container}>
      <div className={styles.info_contents}>
        <FileIcon />
        <div>
          <p>{fileName}</p>
          <p style={{ fontSize: '15px', color: '#555' }}>
            {`${date} · ${fileSize} · ${timeAgo} · ${uploader}`}
          </p>
        </div>
      </div>
      <div className={styles.navigation}>
        <Button variant='content'>
          <Download size={16} />
        </Button>
        <FileSharingDropdown
          fileId={id}
          triggerElement={triggerElement}
          uploader={uploader}
        />
      </div>
    </div>
  );
};

export default FileListCard;
