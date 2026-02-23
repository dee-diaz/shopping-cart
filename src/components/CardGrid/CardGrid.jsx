import styles from './CardGrid.module.css';
import Card from '../Card/Card';

export default function CardGrid({ albums, variant }) {
  return (
    <div
      className={
        variant === 'four-cols' ? styles.cardGridFour : styles.cardGrid
      }
      data-testid="card-grid"
    >
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
