import styles from './Home.module.css';
import SortDropdown from '../../components/SortDropdown/SortDropdown';
import FilterSidebar from '../../components/FilterSidebar/FilterSidebar';
import CardGrid from '../../components/CardGrid/CardGrid';
import { useState } from 'react';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import LoadingState from '../../components/LoadingState/LoadingState';
import { useAlbums } from '../../hooks/useAlbums';

type PriceRange = {
  min?: number;
  max?: number;
};

export default function HomePage() {
  const { albums, error, loading } = useAlbums();
  const [priceRange, setPriceRange] = useState<PriceRange>({});

  function handlePriceRangeChange(min?: number, max?: number): void {
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
          <ErrorMessage
            message={error instanceof Error ? error.message : error}
          />
        ) : (
          <CardGrid albums={albums} priceRange={priceRange} />
        )}
      </div>
    </div>
  );
}
