import { SORT_TYPE } from '../constants/constants';
import { getDisplayPrice } from './priceService';

// Type “Popular” sorts albums in alphabetical order by artist.
export function sortAlbums(albums, sortType) {
  if (!albums || albums.length === 0) return [];
  if (sortType === SORT_TYPE.POPULAR) {
    return albums.toSorted((a, b) =>
      a.artists[0].name.localeCompare(b.artists[0].name),
    );
  }

  if (sortType === SORT_TYPE.NEWEST)
    return albums.toSorted((a, b) => b.year - a.year);

  if (sortType === SORT_TYPE.PRICE_LOW_TO_HIGH)
    return albums.toSorted(
      (a, b) =>
        getDisplayPrice(a.lowest_price) - getDisplayPrice(b.lowest_price),
    );

  if (sortType === SORT_TYPE.PRICE_HIGH_TO_LOW)
    return albums.toSorted(
      (a, b) =>
        getDisplayPrice(b.lowest_price) - getDisplayPrice(a.lowest_price),
    );
}
