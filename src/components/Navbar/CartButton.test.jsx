import { describe, it, expect } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import CartButton from './CartButton';

describe('CartButton', () => {
  it('is present in the document', () => {
    render(<CartButton />, { wrapper: MemoryRouter });
    const cartButton = screen.getByRole('link', { name: /Go to cart/i });
    expect(cartButton).toBeInTheDocument();
  });

  it('renders count badge with correct value', () => {
    render(<CartButton count="2" />, { wrapper: MemoryRouter });
    const cartButton = screen.getByRole('link', { name: /Go to cart/i });

    expect(within(cartButton).getByText('2')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /2 items/i })).toBeInTheDocument();
  });

  it("doesn't render count badge if 0 count is passed", () => {
    render(<CartButton count="0" />, { wrapper: MemoryRouter });
    const cartButton = screen.getByRole('link', { name: /Go to cart/i });

    expect(within(cartButton).queryByText(/^\d+$/)).not.toBeInTheDocument();
  });

  it("doesn't render count badge if no count is passed", () => {
    render(<CartButton />, { wrapper: MemoryRouter });
    const cartButton = screen.getByRole('link', { name: /Go to cart/i });

    expect(within(cartButton).queryByText(/^\d+$/)).not.toBeInTheDocument();
  });
});
