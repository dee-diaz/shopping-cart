import styles from './Home.module.css';
import SortDropdown from '../../components/SortDropdown/SortDropdown';
import FilterSidebar from '../../components/FilterSidebar/FilterSidebar';
import CardGrid from '../../components/CardGrid/CardGrid';

export default function HomePage() {
  return (
    <div className={`container ${styles.container}`}>
      <h1 className={styles.heading}>Vinyl catalog</h1>
      <SortDropdown />
      <div className={styles.wrapper}>
        <FilterSidebar />
        <CardGrid />
      </div>
    </div>
  );
}
