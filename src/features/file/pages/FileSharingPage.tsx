import { useState } from 'react';
import styles from './FileSharingLayout.module.css';
import DragAndDrop from '../components/DragAndDrop';
import FileUploadCard from '../components/FileUploadCard';
import { useTeamFileStore } from '../store/useTeamFileStore';
import { useWorkspaceParams } from '@core/hooks/useWorkspaceParams';
import FileNavButton from '../components/FileNavButton';
import { Button, InfoCard, DropdownTrigger } from '@shared/components';
import { Download, FileText } from 'lucide-react';
import FileSharingDropdown from '../components/FileSharingDropdown';
import { getIsPermit } from '@shared/utils/permitUtils';
import { useUserStore } from '@core/store/useUserStore';
import { useCurrentWorkspace } from '@core/hooks/useCurrentWorkspace';

function FileSharingPage() {
  const [fileTypes, setFileTypes] = useState<string>('all');
  const fileData = useTeamFileStore((state) => state.fileData);
  const deleteFile = useTeamFileStore((state) => state.deleteFile);
  const isLoading = useTeamFileStore((state) => state.isLoading);
  const { teamId } = useWorkspaceParams();
  const userId = useUserStore((state) => state.user?.id);
  const { currentRule } = useCurrentWorkspace();

  const fileNavItemsInit = [
    { id: 'all', text: '전체', selected: true },
    { id: 'images', text: '이미지', selected: false },
    { id: 'videos', text: '동영상', selected: false },
    { id: 'audios', text: '오디오', selected: false },
    { id: 'others', text: '기타', selected: false },
  ];

  const [fileNavItems, setFileNavItems] = useState(fileNavItemsInit);

  const handleButtonClick = (id: string) => {
    const nextNavItems = fileNavItems.map((item) =>
      item.id === id
        ? { ...item, selected: true }
        : { ...item, selected: false },
    );

    setFileNavItems(nextNavItems);
    setFileTypes(id);
  };

  return (
    <div className={styles.file_sharing_root}>
      <div className={styles.top_files}>
        {fileNavItems.map((item) => (
          <FileNavButton
            key={item.id}
            text={item.text}
            selected={item.selected}
            onClick={() => handleButtonClick(item.id)}
          />
        ))}
      </div>

      <div className={styles.file_view_panel}>
        <DragAndDrop />

        {isLoading && (
          <div>
            <div style={{ marginTop: '24px', marginBottom: '12px' }}>
              업로드 중
            </div>

            <FileUploadCard />
          </div>
        )}

        <div style={{ marginTop: '24px', marginBottom: '12px' }}>파일 목록</div>
        <div className='card_list'>
          {fileData
            .filter((item) => item.teamId === teamId)
            .filter((item) => {
              return fileTypes === 'all' ? item : item.fileType === fileTypes;
            })
            .map((item) => {
              const currentFileName = fileData?.find(
                (f) => f.id === item.id && f.teamId === teamId,
              )?.fileName;

              return (
                <InfoCard
                  key={item.id}
                  title={item.fileName}
                  content={`${item.date} · ${item.fileSize} · ${item.authorName}`}
                  iconElement={
                    <div className='file_icon'>
                      <FileText size={24} />
                    </div>
                  }
                >
                  <Button variant='content'>
                    <Download size={16} />
                  </Button>
                  <FileSharingDropdown
                    fileId={item.id}
                    triggerElement={<DropdownTrigger />}
                    canEdit={getIsPermit({
                      authorId: item.authorId,
                      userId,
                      rule: currentRule,
                    })}
                    deleteFile={deleteFile}
                    currentFileName={currentFileName}
                  />
                </InfoCard>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default FileSharingPage;
