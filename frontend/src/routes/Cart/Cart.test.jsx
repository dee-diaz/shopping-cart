import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import CartPage from './Cart';
import { CartContext } from '../../contexts/CartContext';
import { AlbumsContext } from '../../contexts/AlbumsContext';

vi.mock('../../components/CardGrid/CardGrid', () => ({
  default: () => <div data-testid="card-grid" />,
}));

const mockCartItems = [
  {
    id: 1,
    coverImgUrl: 'https://placehold.co/100x100',
    title: 'Test Album',
    artist: 'Test Artist',
    price: 25,
    quantity: 1,
  },
];

describe('CartPage', () => {
  it('renders heading', () => {
    render(
      <CartContext.Provider value={{ cartItems: mockCartItems }}>
        <AlbumsContext.Provider>
          <MemoryRouter>
            <CartPage />
          </MemoryRouter>
        </AlbumsContext.Provider>
      </CartContext.Provider>,
    );

    expect(screen.getByRole('heading', { name: /cart/i })).toBeInTheDocument();
  });

  it('renders cart table', () => {
    render(
      <CartContext.Provider value={{ cartItems: mockCartItems }}>
        <AlbumsContext.Provider>
          <MemoryRouter>
            <CartPage />
          </MemoryRouter>
        </AlbumsContext.Provider>
      </CartContext.Provider>,
    );

    expect(
      screen.getByRole('list', { name: /cart items/i }),
    ).toBeInTheDocument();
  });
});
