import styles from './CardGrid.module.css';
import Card from '../Card/Card';
import filterAlbums from '../../services/filterService';
import { getDisplayPrice } from '../../services/priceService';
import { sortAlbums } from '../../services/sortService';
import { useAlbums } from '../../hooks/useAlbums';
import { Album } from '../../types/album';

interface CardGridProps {
  albums: Album[];
  variant?: 'four-cols';
  priceRange?: {
    min?: number;
    max?: number;
  };
  type?: 'recommendations';
}

export default function CardGrid({
  albums,
  variant,
  priceRange,
  type,
}: CardGridProps) {
  const { sortType } = useAlbums();
  const sorted = sortAlbums(albums, sortType);
  const filtered = priceRange
    ? filterAlbums(sorted, priceRange.min, priceRange.max)
    : undefined;

  const albumsToRender: Album[] =
    type === 'recommendations' ? albums : (filtered ?? sorted);

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
            genre={album.genres?.[0]}
            albumTitle={album.title}
            albumArtist={album.artists?.[0]?.name}
            coverImgUrl={album.images?.[0]?.uri}
            price={getDisplayPrice(album.lowest_price)}
          />
        );
      })}
    </div>
  );
}
