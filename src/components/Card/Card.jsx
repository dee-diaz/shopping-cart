import styles from './Card.module.css';
import { Link } from 'react-router';

export default function Card({
  albumTitle,
  albumArtist,
  coverImgUrl,
  price,
  onAddToCart,
}) {
  const altText = `${albumTitle} by ${albumArtist} album cover`;
  return (
    <article className={styles.card}>
      <Link to="product">
        <img
          src={coverImgUrl || '/images/album-placeholder.webp'}
          alt={altText}
          className={styles.coverImage}
        />
      </Link>
      <div className={styles.albumInfo}>
        <Link to="product">
          <div className={styles.albumDetails}>
            <h3>{albumTitle}</h3>
            <p>{albumArtist}</p>
          </div>
        </Link>
        <div className={styles.actions}>
          <span className={styles.price} aria-label={`Price: $${price}`}>
            {`${price}`}
          </span>
          <span className={styles.divider} aria-hidden="true">
            |
          </span>
          <button
            className={styles.btnAddToCart}
            aria-label={`Add ${albumTitle} by ${albumArtist} to cart`}
            onClick={onAddToCart}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M1.5 3H3.25L4 6M4 6L6.5 16H19.5L22 6H4Z"
                stroke="#1A1A1A"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.5 21C7.32843 21 8 20.3284 8 19.5C8 18.6716 7.32843 18 6.5 18C5.67157 18 5 18.6716 5 19.5C5 20.3284 5.67157 21 6.5 21Z"
                stroke="#1A1A1A"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19.5 21C20.3284 21 21 20.3284 21 19.5C21 18.6716 20.3284 18 19.5 18C18.6716 18 18 18.6716 18 19.5C18 20.3284 18.6716 21 19.5 21Z"
                stroke="#1A1A1A"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11 11H15M13 13V9"
                stroke="#1A1A1A"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
}
