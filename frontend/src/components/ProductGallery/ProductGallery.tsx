import styles from './ProductGallery.module.css';

type Image = {
  uri: string;
};

interface ProductGalleryProps {
  albumTitle: string;
  imgArr: Image[];
}

export default function ProductGallery({
  albumTitle,
  imgArr,
}: ProductGalleryProps) {
  return (
    <div
      role="group"
      aria-label="Album image gallery"
      className={styles.productGallery}
    >
      {imgArr.map((img, index) => {
        return (
          <div key={index} className={styles.imgWrapper}>
            <img
              src={img.uri || '/images/album-placeholder.webp'}
              alt={`${albumTitle} album image ${index + 1} of ${imgArr.length}`}
              className={index === 0 ? styles.mainImage : styles.imgThumbnail}
            />
          </div>
        );
      })}
    </div>
  );
}
