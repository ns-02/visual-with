import { useState } from 'react';
import { useTeam } from '@context/TeamContext';
import FileSharingRoot from '../layouts/FileSharingRoot';
import TopFileNavBar from '../layouts/TopFileNavBar';
import FileViewPanel from '../layouts/FileViewPanel';

function FileSharingPage() {
  // 현재 선택된 팀 데이터
  const { selectTeamId } = useTeam();
  const [fileTypes, setFileTypes] = useState<string>('all');

  return (
    <FileSharingRoot>
      <TopFileNavBar onSelect={setFileTypes}></TopFileNavBar>
      <FileViewPanel fileTypes={fileTypes}></FileViewPanel>
    </FileSharingRoot>
  );
}

export default FileSharingPage;
