import { getDisplayPrice } from './priceService';

export default function filterAlbums(
  albums,
  priceMin = 0,
  priceMax = Infinity,
) {
  if (priceMin < 0) return [];
  return albums.filter((album) => {
    const price = getDisplayPrice(album.lowest_price);
    return price >= priceMin && price <= priceMax;
  });
}
