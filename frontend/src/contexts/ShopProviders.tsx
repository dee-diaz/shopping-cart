import AlbumsContextProvider from './AlbumsContext';
import CartContextProvider from './CartContext';
import WishlistContextProvider from './WishlistContext';
import { Props } from '../types/props';

export default function ShopProviders({ children }: Props) {
  return (
    <AlbumsContextProvider>
      <CartContextProvider>
        <WishlistContextProvider>{children}</WishlistContextProvider>
      </CartContextProvider>
    </AlbumsContextProvider>
  );
}
