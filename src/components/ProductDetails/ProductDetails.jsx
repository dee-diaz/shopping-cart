import styles from './ProductDetails.module.css';
import ArtistHeader from '../ArtistHeader/ArtistHeader';
import ProductMeta from '../ProductMeta/ProductMeta';
import ProductDescription from '../ProductDescription/ProductDescription';
import PriceRow from '../PriceRow/PriceRow';
import ProductActions from '../ProductActions/ProductActions';

export default function ProductDetails() {
  return (
    <div className={styles.productDetails}>
      <ArtistHeader
        artistName="MF Doom"
        artistImg="/images/mf-doom.jpg"
        albumTitle="MM..Food"
      />

      <ProductMeta
        year="2004"
        genre="Hip Hop"
        subgenres={['Boom Bap', 'Jazzy Hip-Hop', 'Conscious']}
      />

      <ProductDescription />
      <PriceRow price="$29" />
      <ProductActions />
    </div>
  );
}
