import { createContext, useState } from 'react';
import { Props } from '../types/props';
import { Album } from '../types/album';

// eslint-disable-next-line react-refresh/only-export-components
export const WishlistContext = createContext<WishlistContextType | null>(null);

interface WishlistContextType {
  wishlistItems: Album[];
  setWishlistItems: React.Dispatch<React.SetStateAction<Album[]>>;
}

export default function WishlistContextProvider({ children }: Props) {
  const [wishlistItems, setWishlistItems] = useState<Album[]>([]);

  return (
    <WishlistContext.Provider value={{ wishlistItems, setWishlistItems }}>
      {children}
    </WishlistContext.Provider>
  );
}
