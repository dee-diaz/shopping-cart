import styles from './ProductDetails.module.css';
import ArtistHeader from '../ArtistHeader/ArtistHeader';
import ProductMeta from '../ProductMeta/ProductMeta';
import ProductDescription from '../ProductDescription/ProductDescription';
import PriceRow from '../PriceRow/PriceRow';
import ProductActions from '../ProductActions/ProductActions';
import { getDisplayPrice } from '../../services/priceService';

interface ProductDetailsProps {
  artist: string;
  artistImg: string;
  title: string;
  year: number;
  genre: string;
  subgenres: string[];
  lowestPrice: number;
}

export default function ProductDetails({
  artist,
  artistImg,
  title,
  year,
  genre,
  subgenres,
  lowestPrice,
}: ProductDetailsProps) {
  const price = getDisplayPrice(lowestPrice);
  return (
    <div className={styles.productDetails} data-testid="product-details">
      <ArtistHeader
        artistName={artist}
        artistImg={artistImg}
        albumTitle={title}
      />

      <ProductMeta year={year} genre={genre} subgenres={subgenres} />

      <ProductDescription />
      <PriceRow price={`$${price}`} />
      <ProductActions />
    </div>
  );
}
