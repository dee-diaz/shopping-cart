import styles from './LoadingState.module.css';

export default function LoadingState() {
  return (
    <div role="status" aria-live="polite" className={styles.loadingWrapper}>
      <div aria-hidden="true" className={styles.loader}></div>
      <h2 className={styles.title}>Loading catalog…</h2>
    </div>
  );
}
