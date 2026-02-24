import styles from './Wishlist.module.css';
import CardGrid from '../../components/CardGrid/CardGrid';
import Recommendations from '../../components/Recommendations/Recommendations';
import EmptyState from '../../components/EmptyState/EmptyState';

export default function WishlistPage({ savedAlbums }) {
  const isEmpty = !savedAlbums || savedAlbums.length === 0;

  return (
    <section className={styles.wishlistPage}>
      <div className="container">
        <h1 className={styles.title}>Wishlist</h1>

        {isEmpty ? (
          <EmptyState text="You haven’t saved any items to your wishlist yet." />
        ) : (
          <CardGrid albums={savedAlbums} variant="four-cols" />
        )}

        <Recommendations />
      </div>
    </section>
  );
}
