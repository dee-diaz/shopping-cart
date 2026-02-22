import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ProductActions from './ProductActions';

describe('ProductActions', () => {
  it('renders quantity input', () => {
    render(<ProductActions />);
    const quantityInput = screen.getByRole('group', { name: 'Quantity' });
    expect(quantityInput).toBeInTheDocument();
  });

  it('renders add to cart button', () => {
    render(<ProductActions />);
    const addToCartBtn = screen.getByRole('button', { name: /Add to cart/i });
    expect(addToCartBtn).toBeInTheDocument();
  });

  it('renders add to wishlist button', () => {
    render(<ProductActions />);
    const addToWishlistBtn = screen.getByRole('button', {
      name: /Add to wishlist/i,
    });
    expect(addToWishlistBtn).toBeInTheDocument();
  });
});
