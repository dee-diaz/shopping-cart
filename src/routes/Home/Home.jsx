import styles from './Home.module.css';
import SortDropdown from '../../components/SortDropdown/SortDropdown';

export default function HomePage() {
  return (
    <div className={`container ${styles.container}`}>
      <h1 className={styles.heading}>Vinyl catalog</h1>
      <SortDropdown />
    </div>
  );
}
