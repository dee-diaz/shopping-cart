import { render } from '@testing-library/react';
import { vi } from 'vitest';
import { MemoryRouter } from 'react-router';
import { CartContext } from './contexts/CartContext';
import { AlbumsContext } from './contexts/AlbumsContext';
import { WishlistContext } from './contexts/WishlistContext';
import { SORT_TYPE } from './constants/constants';

export function renderWithProviders(
  ui,
  {
    cartItems = [],
    wishlistItems = [],
    albums = [],
    loading = false,
    error = null,
    sortType = SORT_TYPE.POPULAR,
  } = {},
) {
  return render(
    <AlbumsContext.Provider
      value={{
        albums,
        loading,
        error,
        sortType,
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
