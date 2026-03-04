import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import CardGrid from './CardGrid';
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

describe('CardGrid', () => {
  it.only('renders a card for each album', () => {
    renderWithProviders(<CardGrid albums={mockAlbums} />);
    const grid = screen.getByTestId('card-grid');
    expect(grid).toBeInTheDocument();
    expect(screen.getAllByRole('article')).toHaveLength(3);
  });
});
