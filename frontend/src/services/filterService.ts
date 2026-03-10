import { getDisplayPrice } from './priceService';
import { Album } from '../types/album';

export default function filterAlbums(
  albums: Album[],
  priceMin = 0,
  priceMax = Infinity,
): Album[] {
  if (priceMin < 0) return [];
  return albums.filter((album) => {
    const price = getDisplayPrice(album.lowest_price);
    return price >= priceMin && price <= priceMax;
  });
}
