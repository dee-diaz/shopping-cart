import styles from './Product.module.css';
import { Link, useParams, useLocation } from 'react-router';
import ProductDetails from '../../components/ProductDetails/ProductDetails';
import Tracklist from '../../components/Tracklist/Tracklist';
import ProductGallery from '../../components/ProductGallery/ProductGallery';
import LoadingState from '../../components/LoadingState/LoadingState';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import { useLoadAlbum } from '../../hooks/useLoadAlbums';

export default function ProductPage() {
  const { id } = useParams();
  const location = useLocation();
  const backTo = location.state?.from || '/';

  const { albumData, error, loading } = useLoadAlbum(Number(id));

  let content;

  if (error) {
    content = <ErrorMessage message={error.message} />;
  } else if (loading) {
    content = <LoadingState />;
  } else if (albumData) {
    const imgArr = albumData.images?.slice(0, 4) || [];
    content = (
      <article className={styles.product}>
        <ProductGallery albumTitle={albumData.title} imgArr={imgArr} />
        <ProductDetails
          artist={albumData.artists[0].name}
          artistImg={albumData.artists[0].thumbnail_url}
          title={albumData.title}
          year={albumData.year!}
          genre={albumData.genres[0]}
          subgenres={albumData.styles!}
          lowestPrice={albumData.lowest_price}
        />
        <Tracklist tracklist={albumData.tracklist!} />
      </article>
    );
  }

  return (
    <div className={styles.productPage}>
      <div className="container">
        {!loading && (
          <Link className={styles.backBtn} to={backTo}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M12.9422 15.8078C13.0003 15.8659 13.0463 15.9348 13.0777 16.0107C13.1092 16.0866 13.1254 16.1679 13.1254 16.25C13.1254 16.3321 13.1092 16.4134 13.0777 16.4893C13.0463 16.5652 13.0003 16.6341 12.9422 16.6922C12.8841 16.7503 12.8152 16.7963 12.7393 16.8277C12.6634 16.8592 12.5821 16.8753 12.5 16.8753C12.4179 16.8753 12.3366 16.8592 12.2607 16.8277C12.1848 16.7963 12.1159 16.7503 12.0578 16.6922L5.80782 10.4422C5.74971 10.3841 5.70361 10.3152 5.67215 10.2393C5.6407 10.1635 5.62451 10.0821 5.62451 10C5.62451 9.91786 5.6407 9.83653 5.67215 9.76066C5.70361 9.68478 5.74971 9.61585 5.80782 9.55781L12.0578 3.30781C12.1751 3.19053 12.3342 3.12465 12.5 3.12465C12.6659 3.12465 12.8249 3.19053 12.9422 3.30781C13.0595 3.42508 13.1254 3.58414 13.1254 3.75C13.1254 3.91585 13.0595 4.07491 12.9422 4.19218L7.1336 10L12.9422 15.8078Z"
                fill="black"
              />
            </svg>
            Back to catalog
          </Link>
        )}

        {content}
      </div>
    </div>
  );
}
