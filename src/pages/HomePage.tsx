import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';
import { useUserStore } from '@core/store/useUserStore';
import { useLogout } from '@core/hooks/useLogout';
import { Skeleton } from '@shared/components';
// @ts-expect-error: 임포트 문제 없음
import DeveloperPanel from '/src/dev/DeveloperPanel';

function HomePage() {
  const userId = useUserStore((state) => state.user?.id);
  const logout = useLogout();
  const isUserBootstrapped = useUserStore((state) => state.isUserBootstrapped);

  return (
    <div className={styles.home}>
      <div className={styles.header}>
        <span className={styles['left-container']}>
          {/* <span>로고</span> */}
          <span>Visual With</span>
        </span>
        <span className={styles['right-container']}>
          {import.meta.env.DEV && <DeveloperPanel />}
          {!isUserBootstrapped ? (
            <>
              <Skeleton width={64} height={20} />
              <Skeleton width={64} height={20} />
            </>
          ) : userId ? (
            <>
              <label>{`${userId}님`}</label>
              <Link to={'/main'} className={styles['nav-link']}>
                시작하기
              </Link>
              <button onClick={() => logout()}>로그아웃</button>
            </>
          ) : (
            <>
              <Link to={'/signup'} className={styles['nav-link']}>
                회원가입
              </Link>
              <Link to={'/login'} className={styles['nav-link']}>
                로그인
              </Link>
            </>
          )}
        </span>
      </div>
      <section className={styles.hero_section}>
        <div className={styles['hero-title']}>프로젝트 협업 서비스</div>
        <h1 className={styles['hero-text']}>
          프로젝트의 모든 순간을
          <br />
          가장 쉽고 스마트하게, Visual With
        </h1>
        <p className={styles['hero-description']}>
          졸업 프로젝트, 조별 과제, 캡스톤 디자인을 준비 중이신가요?
          <br />
          흩어져 있던 일정, 할 일, 대화 기록을 하나로 모아 팀의 시너지를
          높여보세요.
        </p>
        <div className={styles.hero_img_wrap}>
          <img
            src='/homepage_main.png'
            alt='Visual With 메인 화면'
            className={styles.hero_img}
          />
        </div>
      </section>
      <section id='features' className={styles.card_section}>
        <span className={styles.card_tag}>핵심 기능</span>
        <h2 className={styles.card_title}>프로젝트 성공을 위한 필수 도구</h2>
        <div className={styles.card_grid3}>
          <div className={styles.card}>
            <div className={styles.card_icon}>📅</div>
            <h3>일정 관리</h3>
            <p>
              팀원들의 공강 시간, 회의 시간, 중간 점검 일정을 한눈에 비교하고
              최적의 회의 시간을 조율하세요.
            </p>
          </div>
          <div className={styles.card}>
            <div className={styles.card_icon}>📝</div>
            <h3>할 일 관리</h3>
            <p>
              누가 어떤 일을 맡았는지, 언제까지 완료해야 하는지 한눈에
              확인하세요.
            </p>
          </div>
          <div className={styles.card}>
            <div className={styles.card_icon}>💬</div>
            <h3>실시간 채팅</h3>
            <p>
              외부 메신저를 쓰지 않아도 중요 파일과 결정사항이 대화 속에서
              쉽게 공유됩니다.
            </p>
          </div>
        </div>
      </section>
      <div className={styles.detail}>
        <div className={styles.detail_img_wrap}>
          <img
            src='/homepage_schedule.png'
            alt='일정 공유 화면'
            className={styles.detail_img}
          />
        </div>
        <div className={styles.detail_text}>
          <span className={styles.card_tag}>기능 상세 ① 일정 공유</span>
          <h2>서로의 일정을 쉽고 간편하게 공유하세요</h2>
          <p>
            매주 모임 시간 맞추느라 여러 번 물어보고 투표하셨나요?
            <br />
            팀원들의 공강 시간, 회의 시간, 중간 점검 일정을 한눈에 비교하고
            최적의 회의 시간을 조율하세요.
          </p>
        </div>
      </div>
      <div className={styles.detail}>
        <div className={styles.detail_text}>
          <span className={styles.card_tag}>기능 상세 ② 할 일 관리</span>
          <h2>작업을 쉽게 관리하고 추적하세요</h2>
          <p>
            누가 어떤 일을 맡았는지 투명하게 확인하세요.
            <br />
            단순한 리스트가 아닌 담당자, 자세한 정보를 포함하여 한눈에
            들어오는 보드 형태로 실시간 진행 단계를 추적할 수 있습니다.
          </p>
        </div>
        <div className={styles.detail_img_wrap}>
          <img
            src='/homepage_list.png'
            alt='할 일 관리 화면'
            className={styles.detail_img}
          />
        </div>
      </div>
      <div className={styles.detail}>
        <div className={styles.detail_img_wrap}>
          <img
            src='/homepage_chat.png'
            alt='실시간 채팅 화면'
            className={styles.detail_img}
          />
        </div>
        <div className={styles.detail_text}>
          <span className={styles.card_tag}>기능 상세 ③ 실시간 채팅</span>
          <h2>프로젝트에 최적화된 협업용 메신저</h2>
          <p>
            단순히 사담을 나누는 메신저가 아닙니다. 프로젝트 관련 정보와
            파일을 효율적으로 공유할 수 있습니다.
          </p>
        </div>
      </div>
      <section className={styles.hero_section}>
        <h2 className={styles['hero-text']}>
          이제 최고의 팀과 함께 성과를 낼 시간
        </h2>
        <p className={styles['hero-description']}>
          더 이상 파편화된 소통으로 에너지를 낭비하지 마세요.
          <br />
          Visual With에서 바로 시작하고 완벽한 프로젝트를 완성하세요.
        </p>
      </section>
      <footer className={styles.footer}>
        <div className={styles.footer_container}>
          <div className={styles.footer_left}>
            <h3 className={styles.footer_logo}>Visual With</h3>
            <p>
              프로젝트의 모든 순간을 가장 쉽고 스마트하게 연결하는 협업
              플랫폼
            </p>
          </div>
          <div className={styles.footer_nav}>
            <div className={styles.footer_nav_col}>
              <h4>소속 정보</h4>
              <span>Team404</span>
              <span>목원대학교</span>
            </div>
            <div className={styles.footer_nav_col}>
              <h4>문의하기</h4>
              <span>이메일 문의</span>
              <span>문의 폼 작성</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
