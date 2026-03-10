import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import WishlistPage from './Wishlist';
import { renderWithProviders } from '../../test-utils';

const mockAlbums = [
  {
    id: 101,
    genres: ['Hip-Hop'],
    title: 'The Infamous',
    artists: [{ name: 'Mobb Deep' }],
    images: [
      {
        uri: 'https://example.com/infamous.jpg',
      },
    ],
    lowest_price: 24.99,
  },
  {
    id: 102,
    genres: ['Electronic'],
    title: 'Mezzanine',
    artists: [{ name: 'Massive Attack' }],
    images: [
      {
        uri: 'https://example.com/mezzanine.jpg',
      },
    ],
    lowest_price: 29.5,
  },
  {
    id: 103,
    genres: ['Rock'],
    title: 'Abbey Road',
    artists: [{ name: 'The Beatles' }],
    images: [
      {
        uri: 'https://example.com/abbey-road.jpg',
      },
    ],
    lowest_price: 35,
  },
];

describe('WishlistPage', () => {
  it('renders heading', () => {
    renderWithProviders(<WishlistPage />, { wishlistItems: mockAlbums });
    const heading = screen.getByRole('heading', { name: /Wishlist/i });
    expect(heading).toBeInTheDocument();
  });

  it('renders wishlist albums', () => {
    renderWithProviders(<WishlistPage />, { wishlistItems: mockAlbums });

    const cards = screen.getAllByRole('article');

    expect(cards.length).toBeGreaterThan(0);
  });

  it('renders empty state when wishlist array is empty', () => {
    renderWithProviders(<WishlistPage />, { wishlistItems: [] });
    const emptyState = screen.getByRole('status');
    expect(emptyState).toBeInTheDocument();
    expect(emptyState).toHaveTextContent(
      'You haven’t saved any items to your wishlist yet.',
    );
  });

  it('renders recommendations', () => {
    renderWithProviders(<WishlistPage />);
    const recommendations = screen.getByRole('region', {
      name: /Maybe you’d like/i,
    });
    expect(recommendations).toBeInTheDocument();
  });

  it('renders wishlist items and recommendations grids', () => {
    renderWithProviders(<WishlistPage />, { wishlistItems: mockAlbums });
    const cardGrids = screen.getAllByTestId('card-grid');
    expect(cardGrids).toHaveLength(2);
  });
});
