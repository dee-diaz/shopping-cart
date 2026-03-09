import { SORT_TYPE } from '../constants/constants';
import { getDisplayPrice } from './priceService';
import { Album } from '../types/album';
import { SortType } from '../types/sortType';

export function sortAlbums(albums: Album[], sortType: SortType): Album[] {
  if (!albums || albums.length === 0) return [];

  if (sortType === SORT_TYPE.NEWEST)
    return [...albums].sort((a, b) => b.year - a.year);

  if (sortType === SORT_TYPE.PRICE_LOW_TO_HIGH)
    return [...albums].sort(
      (a, b) =>
        getDisplayPrice(a.lowest_price) - getDisplayPrice(b.lowest_price),
    );

  if (sortType === SORT_TYPE.PRICE_HIGH_TO_LOW)
    return [...albums].sort(
      (a, b) =>
        getDisplayPrice(b.lowest_price) - getDisplayPrice(a.lowest_price),
    );

  return [...albums].sort((a, b) =>
    a.artists[0].name.localeCompare(b.artists[0].name),
  );
}
