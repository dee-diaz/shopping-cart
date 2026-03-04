import styles from './CardGrid.module.css';
import Card from '../Card/Card';
import { sortAlbums } from '../../services/sortService';
import { useContext } from 'react';
import { AlbumsContext } from '../../contexts/AlbumsContext';
import filterAlbums from '../../services/filterService';
import { getDisplayPrice } from '../../services/priceService';

export default function CardGrid({ albums = [], variant, priceRange, type }) {
  const { sortType } = useContext(AlbumsContext);
  const sorted = sortAlbums(albums, sortType);
  let filtered;
  const hasFilter =
    priceRange?.min !== undefined || priceRange?.max !== undefined;
  if (hasFilter)
    filtered = filterAlbums(sorted, priceRange.min, priceRange.max);
  let albumsToRender;

  if (type === 'recommendations') {
    albumsToRender = albums;
  } else if (filtered !== undefined) {
    albumsToRender = filtered;
  } else {
    albumsToRender = sorted;
  }

  return (
    <div
      className={
        variant === 'four-cols' ? styles.cardGridFour : styles.cardGrid
      }
      data-testid="card-grid"
    >
      {albumsToRender.map((album) => {
        return (
          <Card
            key={album.id}
            albumId={album.id}
            genre={album.genres[0]}
            albumTitle={album.title}
            albumArtist={album.artists[0].name}
            coverImgUrl={album.images[0].uri}
            price={getDisplayPrice(album.lowest_price)}
            onAddToCart={() =>
              console.log(`${album.title} has been added to Cart`)
            }
          />
        );
      })}
    </div>
  );
}
