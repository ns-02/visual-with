import type { ReactNode } from 'react';
import styles from './TeamChatLayout.module.css';

type Prop = {
  children: ReactNode;
};

function TeamChatRoot({ children }: Prop) {
  return <div className={styles.team_chat_root}>{children}</div>;
}

export default TeamChatRoot;
