import { Download, EllipsisVertical } from 'lucide-react';
import { ContentButton } from '@shared/components/ui';
import FileSharingDropdown from './FileSharingDropdown';
import FileIcon from './FileIcon';
import styles from './FileListCard.module.css';

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
    <ContentButton>
      <EllipsisVertical size={16} />
    </ContentButton>
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
        <ContentButton>
          <Download size={16} />
        </ContentButton>
        <FileSharingDropdown fileId={id} triggerElement={triggerElement} />
      </div>
    </div>
  );
};

export default FileListCard;
