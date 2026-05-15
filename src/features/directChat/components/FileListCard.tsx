import { Download, EllipsisVertical } from 'lucide-react';
import styles from './directChatUI.module.css';
import { Button, FileIcon } from '@shared/components';
import FileSharingDropdown from './FileSharingDropdown';

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
    <div className='common_card'>
      <div className='common_card_info'>
        <FileIcon />
        <div>
          <p>{fileName}</p>
          <p style={{ fontSize: '15px', color: '#555' }}>
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
