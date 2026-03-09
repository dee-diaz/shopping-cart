import { useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { fetchAlbum } from '../services/catalogService';
import { getDisplayPrice } from '../services/priceService';
import { useCart } from './useCart';
import { useWishlist } from './useWishlist';
import { CartItem } from '../types/cartItem';

interface UseProductActionsReturn {
  isWishlisted: boolean;
  quantity: number;
  handleAddToWishlist: () => Promise<void>;
  handleAddToCart: () => Promise<void>;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
}

export function useProductActions(): UseProductActionsReturn {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { wishlistItems, setWishlistItems } = useWishlist();
  const { cartItems, setCartItems } = useCart();
  const productId = Number(id);
  const isWishlisted = wishlistItems.some((item) => item.id === productId);
  const isInCart = cartItems.find((item) => item.id === productId);

  async function handleAddToWishlist(): Promise<void> {
    if (!isWishlisted) {
      const album = await fetchAlbum(id);
      setWishlistItems((prev) => [...prev, album]);
    } else {
      const updatedArr = wishlistItems.filter((item) => item.id !== productId);
      setWishlistItems(updatedArr);
    }
  }

  async function handleAddToCart(): Promise<void> {
    if (!isInCart) {
      const album = await fetchAlbum(productId);
      const cartObj: CartItem = {
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
