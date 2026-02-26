import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import CartPage from './Cart';

describe('CartPage', () => {
  it('renders heading', () => {
    render(
      <MemoryRouter>
        <CartPage />
      </MemoryRouter>,
    );
    expect(screen.getByRole('heading', { name: /cart/i })).toBeInTheDocument();
  });

  it('renders cart table', () => {
    render(
      <MemoryRouter>
        <CartPage />
      </MemoryRouter>,
    );
    expect(
      screen.getByRole('list', { name: /Cart items/i }),
    ).toBeInTheDocument();
  });
});
