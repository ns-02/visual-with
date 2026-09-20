import type { CSSProperties } from 'react';
import styles from './Skeleton.module.css';

interface SkeletonProps {
  width?: number | string;
  height?: number | string;
  style?: CSSProperties;
}

const Skeleton = ({ width, height, style }: SkeletonProps) => {
  return (
    <div
      className={styles.skeleton}
      style={{ width, height, ...style }}
      role='status'
      aria-label='로딩 중'
    />
  );
};

export default Skeleton;
