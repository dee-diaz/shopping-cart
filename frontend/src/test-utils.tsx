import { render } from '@testing-library/react';
import { vi } from 'vitest';
import { MemoryRouter } from 'react-router';
import { CartContext } from './contexts/CartContext';
import { AlbumsContext } from './contexts/AlbumsContext';
import { WishlistContext } from './contexts/WishlistContext';
import { SORT_TYPE } from './constants/constants';
import { ReactElement } from 'react';
import { Album } from './types/album';
import { CartItem } from './types/cartItem';
import { SortType } from './types/sortType';

interface RenderWithProvidersOptions {
  cartItems?: CartItem[];
  wishlistItems?: Album[];
  albums?: Album[];
  loading?: boolean;
  error?: string | null;
  sortType?: SortType;
  setSortType?: React.Dispatch<React.SetStateAction<SortType>>;
}

export function renderWithProviders(
  ui: ReactElement,
  {
    cartItems = [],
    wishlistItems = [],
    albums = [],
    loading = false,
    error = null,
    sortType = SORT_TYPE.POPULAR,
    setSortType = vi.fn(),
  }: RenderWithProvidersOptions = {},
) {
  return render(
    <AlbumsContext.Provider
      value={{
        albums,
        loading,
        error,
        sortType,
        setSortType,
        setLoading: vi.fn(),
        setAlbums: vi.fn(),
        setError: vi.fn(),
      }}
    >
      <CartContext.Provider
        value={{
          cartItems,
          setCartItems: vi.fn(),
        }}
      >
        <WishlistContext.Provider
          value={{
            wishlistItems,
            setWishlistItems: vi.fn(),
          }}
        >
          <MemoryRouter>{ui}</MemoryRouter>
        </WishlistContext.Provider>
      </CartContext.Provider>
    </AlbumsContext.Provider>,
  );
}
