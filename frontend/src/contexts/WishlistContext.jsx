import { createContext, useState } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const WishlistContext = createContext(null);

export default function WishlistContextProvider({ children }) {
  const [wishlistItems, setWishlistItems] = useState([]);
  return (
    <WishlistContext.Provider value={{ wishlistItems, setWishlistItems }}>
      {children}
    </WishlistContext.Provider>
  );
}
