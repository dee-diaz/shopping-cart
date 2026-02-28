import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import HomePage from './Home';
import ShopProviders from '../../contexts/ShopProviders';
import { AlbumsContext } from '../../contexts/AlbumsContext';
import { CartContext } from '../../contexts/CartContext';

const mockAlbums = [
  {
    id: 1,
    title: 'Test Album',
    artists: [{ name: 'Test Artist' }],
    images: [{ uri: 'https://placehold.co/300x300' }],
    lowest_price: 25,
  },
  {
    id: 2,
    title: 'Second Album',
    artists: [{ name: 'Another Artist' }],
    images: [{ uri: 'https://placehold.co/300x300' }],
    lowest_price: 30,
  },
];

describe('HomePage', () => {
  it('renders heading', () => {
    render(
      <ShopProviders>
        <HomePage />
      </ShopProviders>,
      { wrapper: MemoryRouter },
    );
    const heading = screen.getByRole('heading', { name: /Vinyl catalog/i });
    expect(heading).toBeInTheDocument();
  });

  it('renders sort dropdown button', () => {
    render(
      <ShopProviders>
        <HomePage />
      </ShopProviders>,
      { wrapper: MemoryRouter },
    );
    const dropdownToggleBtn = screen.getByRole('button', { name: /sort/i });
    expect(dropdownToggleBtn).toBeInTheDocument();
  });

  it('renders filter sidebar', () => {
    render(
      <ShopProviders>
        <HomePage />
      </ShopProviders>,
      { wrapper: MemoryRouter },
    );
    const filterSidebar = screen.getByRole('region', { name: 'Filters' });
    expect(filterSidebar).toBeInTheDocument();
  });

  it('renders card grid', () => {
    render(
      <CartContext.Provider value={{ setCartItems: vi.fn() }}>
        <AlbumsContext.Provider
          value={{
            albums: mockAlbums,
            loading: false,
            error: null,
            setLoading: vi.fn(),
            setAlbums: vi.fn(),
            setError: vi.fn(),
          }}
        >
          <HomePage />
        </AlbumsContext.Provider>
      </CartContext.Provider>,
      { wrapper: MemoryRouter },
    );
    const cardGrid = screen.getByTestId('card-grid');
    expect(cardGrid).toBeInTheDocument();
  });
});
