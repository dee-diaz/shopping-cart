import { describe, it, expect, vi } from 'vitest';
import { screen } from '@testing-library/react';
import CartPage from './Cart';
import { renderWithProviders } from '../../test-utils';

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
    genre: 'Rock',
  },
  {
    id: 2,
    coverImgUrl: 'https://placehold.co/100x100',
    title: 'Test Album 2',
    artist: 'Test Artist 2',
    price: 29,
    quantity: 1,
    genre: 'Rap',
  },
];

describe('CartPage', () => {
  it('renders heading', () => {
    renderWithProviders(<CartPage />);

    expect(screen.getByRole('heading', { name: /cart/i })).toBeInTheDocument();
  });

  it('renders empty state if cart is empty', () => {
    renderWithProviders(<CartPage />, { cartItems: [] });

    expect(screen.getByRole('status')).toBeInTheDocument();
    expect(
      screen.getByText('Your cart is currently empty.'),
    ).toBeInTheDocument();
  });

  it('renders cart items', () => {
    renderWithProviders(<CartPage />, { cartItems: mockCartItems });

    expect(
      screen.getByRole('list', { name: /cart items/i }),
    ).toBeInTheDocument();
    expect(screen.getAllByRole('listitem')).toHaveLength(2);
  });
});
