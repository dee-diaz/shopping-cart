import styles from './Wishlist.module.css';
import CardGrid from '../../components/CardGrid/CardGrid';
import Recommendations from '../../components/Recommendations/Recommendations';
import { Link } from 'react-router';

export default function WishlistPage({ savedAlbums }) {
  const isEmpty = !savedAlbums || savedAlbums.length === 0;

  return (
    <section className={styles.wishlistPage}>
      <div className="container">
        <h1 className={styles.title}>Wishlist</h1>

        {isEmpty ? (
          <EmptyState />
        ) : (
          <CardGrid albums={savedAlbums} variant="four-cols" />
        )}

        <Recommendations />
      </div>
    </section>
  );
}

export function EmptyState() {
  return (
    <div role="status">
      <p className={styles.emptyStateText}>
        You haven’t saved any items to your wishlist yet.
      </p>

      <Link className={styles.btn} to="/">
        Return to shop
      </Link>
    </div>
  );
}
