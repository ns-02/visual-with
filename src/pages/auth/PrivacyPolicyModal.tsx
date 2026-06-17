import styles from './PrivacyPolicyModal.module.css';

interface PrivacyPolicyModalProps {
  onClose: () => void;
}

function PrivacyPolicyModal({ onClose }: PrivacyPolicyModalProps) {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h2 className={styles.title}>개인정보 처리방침</h2>
          <button className={styles.close_button} onClick={onClose} type='button'>
            ✕
          </button>
        </div>

        <div className={styles.content}>
          <p className={styles.intro}>
            본 서비스(이하 "서비스")는 이용자의 개인정보를 소중히 여기며, 「개인정보 보호법」을
            준수합니다.
          </p>

          <section className={styles.section}>
            <h3 className={styles.section_title}>1. 수집하는 개인정보 항목</h3>
            <p>서비스 가입 시 아래 항목을 수집합니다.</p>
            <ul className={styles.list}>
              <li>이름</li>
              <li>아이디</li>
              <li>이메일 주소</li>
              <li>비밀번호 (암호화 저장)</li>
            </ul>
            <p>서비스 이용 과정에서 아래 항목이 자동으로 생성·수집될 수 있습니다.</p>
            <ul className={styles.list}>
              <li>서비스 이용 기록, 접속 로그</li>
              <li>업로드한 파일 및 채팅 내용</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h3 className={styles.section_title}>2. 개인정보 수집 및 이용 목적</h3>
            <ul className={styles.list}>
              <li>회원 가입 및 서비스 제공</li>
              <li>팀 협업 기능(채팅, 파일 공유, 할 일, 일정 등) 운영</li>
              <li>본인 확인 및 계정 관리</li>
              <li>서비스 개선 및 통계 분석</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h3 className={styles.section_title}>3. 개인정보 보유 및 이용 기간</h3>
            <p>
              회원 탈퇴 시까지 보유합니다. 단, 관련 법령에 따라 일정 기간 보관이 필요한 경우 해당
              기간 동안 보관합니다.
            </p>
          </section>

          <section className={styles.section}>
            <h3 className={styles.section_title}>4. 개인정보의 제3자 제공</h3>
            <p>
              수집한 개인정보는 원칙적으로 외부에 제공하지 않습니다. 다만, 이용자가 사전에 동의한
              경우 또는 법령에 의한 경우는 예외로 합니다.
            </p>
          </section>

          <section className={styles.section}>
            <h3 className={styles.section_title}>5. 이용자의 권리</h3>
            <p>이용자는 언제든지 아래 권리를 행사할 수 있습니다.</p>
            <ul className={styles.list}>
              <li>개인정보 열람·수정·삭제 요청</li>
              <li>회원 탈퇴를 통한 개인정보 처리 정지</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h3 className={styles.section_title}>6. 개인정보 보호책임자</h3>
            <p>개인정보 관련 문의는 서비스 내 고객센터를 통해 접수할 수 있습니다.</p>
          </section>

          <p className={styles.date}>시행일: 2025년 1월 1일</p>
        </div>

        <div className={styles.footer}>
          <button className={styles.confirm_button} onClick={onClose} type='button'>
            확인
          </button>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicyModal;
