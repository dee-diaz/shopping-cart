import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import CartButton from './CartButton';
import { renderWithProviders } from '../../test-utils';
import { CartItem } from '../../types/cartItem';

const mockCartItems: CartItem[] = [
  {
    id: 1,
    genre: 'Hip-Hop',
    title: 'MM..FOOD',
    artist: 'MF DOOM',
    coverImgUrl: 'https://example.com/mmfood.jpg',
    price: 29.99,
    quantity: 1,
  },
  {
    id: 2,
    genre: 'Jazz',
    title: 'Kind of Blue',
    artist: 'Miles Davis',
    coverImgUrl: 'https://example.com/kindofblue.jpg',
    price: 24.99,
    quantity: 2,
  },
];

describe('CartButton', () => {
  it('renders count badge with correct value', () => {
    renderWithProviders(<CartButton />, { cartItems: mockCartItems });
    const cartButton = screen.getByRole('link', { name: /Go to cart/i });

    expect(cartButton).toHaveTextContent('2');
    expect(cartButton).toHaveAccessibleName('Go to cart, 2 items');
  });

  it("doesn't render count badge if cart is empty", () => {
    renderWithProviders(<CartButton />, { cartItems: [] });
    const cartButton = screen.getByRole('link', { name: /Go to cart/i });

    expect(cartButton).not.toHaveTextContent(/\d/);
    expect(cartButton).toHaveAccessibleName('Go to cart, cart is empty');
  });
});
