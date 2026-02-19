import styles from './CardGrid.module.css';
import Card from '../Card/Card';

export default function CardGrid({ albums }) {
  return (
    <div className={styles.cardGrid}>
      {albums.map((album) => {
        return (
          <Card
            key={album.id}
            albumTitle={album.title}
            albumArtist={album.artist}
            coverImgUrl={album.coverImgUrl}
            price={album.price}
            onAddToCart={() =>
              console.log(`${album.title} has been added to Cart`)
            }
          />
        );
      })}
    </div>
  );
}
