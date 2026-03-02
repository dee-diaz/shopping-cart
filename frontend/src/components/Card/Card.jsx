import styles from './Card.module.css';
import { Link, useLocation } from 'react-router';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import AddToCartButton from '../Button/AddToCartButton';
import { ADD_BTN_VARIANT } from '../../constants/constants';

export default function Card({
  albumId,
  genre,
  albumTitle,
  albumArtist,
  coverImgUrl,
  price,
}) {
  const location = useLocation();
  const { cartItems, setCartItems } = useContext(CartContext);
  const altText = `${albumTitle} by ${albumArtist} album cover`;

  const isAddedToCart = cartItems.find((item) => item.id === albumId);

  function handleClick() {
    if (cartItems.find((el) => el.id === albumId)) {
      const newArr = cartItems.filter((el) => el.id !== albumId);
      setCartItems(newArr);
      return;
    }

    const obj = {
      id: albumId,
      genre,
      title: albumTitle,
      artist: albumArtist,
      coverImgUrl,
      price,
      quantity: 1,
    };

    setCartItems((prev) => [...prev, obj]);
  }

  return (
    <article className={styles.card}>
      <Link to={`/product/${albumId}`} state={{ from: location }}>
        <img
          src={coverImgUrl || '/images/album-placeholder.webp'}
          alt={altText}
          className={styles.coverImage}
        />
      </Link>
      <div className={styles.albumInfo}>
        <Link to={`/product/${albumId}`}>
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

          <AddToCartButton
            variant={ADD_BTN_VARIANT.ICON}
            isInCart={isAddedToCart}
            albumTitle={albumTitle}
            albumArtist={albumArtist}
            onClick={handleClick}
          />
        </div>
      </div>
    </article>
  );
}
