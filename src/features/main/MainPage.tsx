import styles from './Layouts.module.css';

function MainPage() {
  return (
    <div className={styles.main_page}>
      <div className={styles.contents}>
        <p>준비 중인 화면입니다</p>
        <p>이 페이지는 메인 페이지입니다</p>
      </div>
    </div>
  );
}

export default MainPage;
