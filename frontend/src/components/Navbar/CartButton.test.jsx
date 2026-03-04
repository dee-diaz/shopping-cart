import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import CartButton from './CartButton';
import { renderWithProviders } from '../../test-utils';

describe('CartButton', () => {
  it('renders count badge with correct value', () => {
    renderWithProviders(<CartButton />, { cartItems: ['01', '02'] });
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
