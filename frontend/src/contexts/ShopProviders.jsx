import AlbumsContextProvider from './AlbumsContext';
import CartContextProvider from './CartContext';
import WishlistContextProvider from './WishlistContext';

export default function ShopProviders({ children }) {
  return (
    <AlbumsContextProvider>
      <CartContextProvider>
        <WishlistContextProvider>{children}</WishlistContextProvider>
      </CartContextProvider>
    </AlbumsContextProvider>
  );
}
