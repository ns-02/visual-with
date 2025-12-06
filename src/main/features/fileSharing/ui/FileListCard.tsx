import { Download, EllipsisVertical, FileText } from 'lucide-react';
import Button from '@components/ui/Button';
import { FileListCardProps } from '..';
import styles from './FileListCard.module.css';
import { ContentButton } from '@components/ui';
import FileSharingDropdown from './FileSharingDropdown';

const FileListCard = ({
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
        <Button shape='square'>
          <FileText size={24} />
        </Button>
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
        <FileSharingDropdown triggerElement={triggerElement} />
      </div>
    </div>
  );
};

export default FileListCard;
