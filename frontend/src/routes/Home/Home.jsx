import styles from './Home.module.css';
import SortDropdown from '../../components/SortDropdown/SortDropdown';
import FilterSidebar from '../../components/FilterSidebar/FilterSidebar';
import CardGrid from '../../components/CardGrid/CardGrid';
import { AlbumsContext } from '../../contexts/AlbumsContext';
import { useContext, useState } from 'react';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import LoadingState from '../../components/LoadingState/LoadingState';

export default function HomePage() {
  const { albums, error, loading } = useContext(AlbumsContext);
  const [priceRange, setPriceRange] = useState({
    min: undefined,
    max: undefined,
  });

  function handlePriceRangeChange(min, max) {
    setPriceRange({ min, max });
  }

  return (
    <div className={`container ${styles.container}`}>
      <h1 className={styles.heading}>Vinyl catalog</h1>
      <SortDropdown />
      <div className={styles.wrapper}>
        <FilterSidebar
          onApply={handlePriceRangeChange}
          priceRange={priceRange}
        />
        {loading ? (
          <LoadingState />
        ) : error ? (
          <ErrorMessage message={error.message} />
        ) : (
          <CardGrid albums={albums} priceRange={priceRange} />
        )}
      </div>
    </div>
  );
}
