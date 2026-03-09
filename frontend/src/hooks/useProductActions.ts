import { useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { fetchAlbum } from '../services/catalogService';
import { getDisplayPrice } from '../services/priceService';
import { useCart } from './useCart';
import { useWishlist } from './useWishlist';

export function useProductActions() {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const navigate = useNavigate();
  const { wishlistItems, setWishlistItems } = useWishlist();
  const { cartItems, setCartItems } = useCart();
  const productId = Number(id);
  const isWishlisted = wishlistItems.some((item) => item.id === productId);
  const isInCart = cartItems.find((item) => item.id === productId);

  async function handleAddToWishlist() {
    if (!isWishlisted) {
      const album = await fetchAlbum(id);
      setWishlistItems((prev) => [...prev, album]);
    } else {
      const updatedArr = wishlistItems.filter((item) => item.id !== productId);
      setWishlistItems(updatedArr);
    }
  }

  async function handleAddToCart() {
    if (!isInCart) {
      const album = await fetchAlbum(id);
      const cartObj = {
        id: album.id,
        genre: album.genres[0],
        title: album.title,
        artist: album.artists[0].name,
        coverImgUrl: album.images[0].uri,
        price: getDisplayPrice(album.lowest_price),
        quantity,
      };

      setCartItems((prev) => [...prev, cartObj]);
    } else {
      setCartItems((prev) =>
        prev.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        ),
      );
    }
    navigate('/cart');
  }

  return {
    isWishlisted,
    quantity,
    handleAddToWishlist,
    handleAddToCart,
    setQuantity,
  };
}
