import { useState } from 'react';
import { useTeam } from '@context/TeamContext';
import TopFileNavBar from '../section/TopFileNavBar';
import BottomSection from '../section/BottomSection';
import styles from './FileSharingPage.module.css';

function FileSharingPage() {
  // 현재 선택된 팀 데이터
  const { selectTeamData } = useTeam();
  const [fileTypes, setFileTypes] = useState<string>('all');

  return (
    <div className={styles.page}>
      <TopFileNavBar onSelect={setFileTypes}></TopFileNavBar>
      <BottomSection fileTypes={fileTypes}></BottomSection>
    </div>
  );
}

export default FileSharingPage;
