import styles from './ProductGallery.module.css';

export default function ProductGallery({ albumTitle, imgArr }) {
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
              src={img.uri}
              alt={`${albumTitle}, ${index + 1}/${imgArr.length}`}
              className={index === 0 ? styles.mainImage : styles.imgThumbnail}
            />
          </div>
        );
      })}
    </div>
  );
}
