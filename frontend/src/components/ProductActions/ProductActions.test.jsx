import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import ProductActions from './ProductActions';
import { renderWithProviders } from '../../test-utils';

describe('ProductActions', () => {
  it('renders quantity input', () => {
    renderWithProviders(<ProductActions />);
    const quantityInput = screen.getByRole('group', { name: 'Quantity' });
    expect(quantityInput).toBeInTheDocument();
  });

  it('renders add to cart button', () => {
    renderWithProviders(<ProductActions />);
    const addToCartBtn = screen.getByRole('button', { name: /Add to cart/i });
    expect(addToCartBtn).toBeInTheDocument();
  });

  it('renders add to wishlist button', () => {
    renderWithProviders(<ProductActions />);
    const addToWishlistBtn = screen.getByRole('button', {
      name: /Add to wishlist/i,
    });
    expect(addToWishlistBtn).toBeInTheDocument();
  });
});
