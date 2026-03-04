import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import HomePage from './Home';
import { renderWithProviders } from '../../test-utils';

const mockAlbums = [
  {
    id: 1,
    title: 'Discovery',
    genres: ['Electronic'],
    artists: [{ name: 'Daft Punk' }],
    images: [
      {
        uri: 'https://example.com/discovery.jpg',
      },
    ],
    lowest_price: 29.99,
  },
  {
    id: 2,
    title: 'Random Access Memories',
    genres: ['Electronic'],
    artists: [{ name: 'Daft Punk' }],
    images: [
      {
        uri: 'https://example.com/ram.jpg',
      },
    ],
    lowest_price: 34.99,
  },
  {
    id: 3,
    title: 'The Dark Side of the Moon',
    genres: ['Rock'],
    artists: [{ name: 'Pink Floyd' }],
    images: [
      {
        uri: 'https://example.com/darkside.jpg',
      },
    ],
    lowest_price: 39.99,
  },
];

describe('HomePage', () => {
  it('renders heading', () => {
    renderWithProviders(<HomePage />);
    const heading = screen.getByRole('heading', { name: /Vinyl catalog/i });
    expect(heading).toBeInTheDocument();
  });

  it('renders sort dropdown button', () => {
    renderWithProviders(<HomePage />);
    const dropdownToggleBtn = screen.getByRole('button', { name: /sort/i });
    expect(dropdownToggleBtn).toBeInTheDocument();
  });

  it('renders filter sidebar', () => {
    renderWithProviders(<HomePage />);
    const filterSidebar = screen.getByRole('region', { name: 'Filters' });
    expect(filterSidebar).toBeInTheDocument();
  });

  it('renders card grid when data is loaded', () => {
    renderWithProviders(<HomePage />, {
      albums: mockAlbums,
      loading: false,
      error: null,
    });
    const cardGrid = screen.getByTestId('card-grid');
    expect(cardGrid).toBeInTheDocument();
    expect(screen.getAllByRole('article')).toHaveLength(3);
  });

  it('does not render card grid while loading', () => {
    renderWithProviders(<HomePage />, { loading: true });

    expect(screen.queryByTestId('card-grid')).not.toBeInTheDocument();
  });

  it('does not render card grid when error occurs', () => {
    renderWithProviders(<HomePage />, { error: new Error('Failed') });

    expect(screen.queryByTestId('card-grid')).not.toBeInTheDocument();
  });

  it('renders error message on fetch failure', () => {
    renderWithProviders(<HomePage />, { error: new Error('Failed to fetch') });
    const errorMessage = screen.getByRole('alert');
    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toHaveTextContent('Failed to fetch');
  });

  it('shows loading state during fetch', () => {
    renderWithProviders(<HomePage />, { loading: true });
    const loadingState = screen.getByRole('status');
    expect(loadingState).toBeInTheDocument();
    expect(loadingState).toHaveTextContent(/loading/i);
  });
});
