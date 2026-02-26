import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import EmptyState from './EmptyState';

describe('EmptyState', () => {
  it('button links to homepage', () => {
    render(<EmptyState />, {
      wrapper: MemoryRouter,
    });
    const link = screen.getByRole('link', { name: /return/i });
    expect(link).toHaveAttribute('href', '/');
  });

  it('renders text correctly', () => {
    render(
      <EmptyState text="You haven’t saved any items to your wishlist yet." />,
      {
        wrapper: MemoryRouter,
      },
    );
    const text = screen.getByText(
      'You haven’t saved any items to your wishlist yet.',
    );
    expect(text).toBeInTheDocument();
  });
});
