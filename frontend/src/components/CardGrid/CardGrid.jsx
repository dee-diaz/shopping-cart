import styles from './CardGrid.module.css';
import Card from '../Card/Card';
import { useContext } from 'react';
import { AlbumsContext } from '../../contexts/AlbumsContext';

export default function CardGrid({ page, variant }) {
  const { albums } = useContext(AlbumsContext);

  return (
    <div
      className={
        variant === 'four-cols' ? styles.cardGridFour : styles.cardGrid
      }
      data-testid="card-grid"
    >
      {page === 'home' &&
        albums.map((album) => {
          return (
            <Card
              key={album.id}
              albumTitle={album.title}
              albumArtist={album.artists[0].name}
              coverImgUrl={album.images[0].uri}
              price={generatePrice(album.lowest_price)}
              onAddToCart={() =>
                console.log(`${album.title} has been added to Cart`)
              }
            />
          );
        })}
    </div>
  );
}

function generatePrice(lowestPrice) {
  const margin = 20;
  if (lowestPrice) return `$${Math.round(lowestPrice) + margin}`;
  return `$${margin + 11}`;
}
