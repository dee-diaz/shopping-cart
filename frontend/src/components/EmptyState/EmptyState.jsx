import styles from './EmptyState.module.css';
import { Link } from 'react-router';

export default function EmptyState({ text }) {
  return (
    <div role="status">
      <p className={styles.emptyStateText}>{text}</p>

      <Link className={styles.btn} to="/">
        Return to shop
      </Link>
    </div>
  );
}
