import { createContext, useState } from 'react';

export interface CartItem {
  id: number;
  genre: string;
  title: string;
  artist: string;
  coverImgUrl: string;
  price: number;
  quantity: number;
}

interface Props {
  children: React.ReactNode;
}

interface CartContextType {
  cartItems: CartItem[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext<CartContextType | null>(null);

export default function CartContextProvider({ children }: Props) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
}
