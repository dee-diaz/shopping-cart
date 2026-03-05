import { describe, it, expect, vi } from 'vitest';
import { screen, within } from '@testing-library/react';
import ProductPage from './Product';
import { renderWithProviders } from '../../test-utils';
import { useLoadAlbum } from '../../hooks/useLoadAlbums';

vi.mock('../../hooks/useLoadAlbums');

describe('ProductPage', () => {
  it('renders nav link leading to homepage', () => {
    useLoadAlbum.mockReturnValue({
      albumData: null,
      error: null,
      loading: false,
    });

    renderWithProviders(<ProductPage />);
    const link = screen.getByRole('link', { name: /back to catalog/i });
    expect(link).toHaveAttribute('href', '/');
  });

  it('renders loading state', () => {
    useLoadAlbum.mockReturnValue({
      albumData: null,
      error: null,
      loading: true,
    });

    renderWithProviders(<ProductPage />);
    const loading = screen.getByRole('status');
    expect(loading).toBeInTheDocument();
    expect(loading).toHaveTextContent(/loading/i);
  });

  it('renders error message', () => {
    useLoadAlbum.mockReturnValue({
      albumData: null,
      error: { message: 'Failed to fetch' },
      loading: false,
    });

    renderWithProviders(<ProductPage />);

    expect(screen.getByText('Failed to fetch')).toBeInTheDocument();
  });

  it('renders product data', () => {
    useLoadAlbum.mockReturnValue({
      loading: false,
      error: null,
      albumData: {
        title: 'Test Album',
        year: 2001,
        genres: ['Rock'],
        styles: ['Indie'],
        lowest_price: 20,
        artists: [
          {
            name: 'Test Artist',
            thumbnail_url: 'img.jpg',
          },
        ],
        images: [{ uri: 'img' }],
        tracklist: [],
      },
    });

    renderWithProviders(<ProductPage />);

    expect(screen.getByText('Test Album')).toBeInTheDocument();
    expect(screen.getByText('2001')).toBeInTheDocument();
    expect(screen.getByText('Rock')).toBeInTheDocument();
    expect(screen.getByText('Indie')).toBeInTheDocument();
  });

  it('renders image gallery', () => {
    useLoadAlbum.mockReturnValue({
      loading: false,
      error: null,
      albumData: {
        title: 'Test Album',
        year: 2001,
        genres: ['Rock'],
        styles: ['Indie'],
        lowest_price: 20,
        artists: [
          {
            name: 'Test Artist',
            thumbnail_url: 'img.jpg',
          },
        ],
        images: [
          {
            uri: 'https://i.discogs.com/tz4tsa5_pTztKx_mWvRvKp7jZ2YyztvF69PTEmVFlLg/rs:fit/g:sm/q:90/h:600/w:591/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEyMzg0/NTAyLTE1NjQ4NDQ1/MTMtMTEwNi5qcGVn.jpeg',
          },
          {
            uri: 'https://i.discogs.com/PnMoFWdoHdUhniCtrIydjslDnIE9hBsQqqIVrFKE4jY/rs:fit/g:sm/q:90/h:600/w:595/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEyMzg0/NTAyLTE1NjQ4NDQ1/MTQtNDAxNC5qcGVn.jpeg',
          },
          {
            uri: 'https://i.discogs.com/S89F23-sE7rMNER4SyRUGxzxZGGLiqcyLWSKE1Adypk/rs:fit/g:sm/q:90/h:600/w:598/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEyMzg0/NTAyLTE1NjQ4NDQ1/MTAtMTcyNi5qcGVn.jpeg',
          },
          {
            uri: 'https://i.discogs.com/7veHrR5m3Tg5CRSh46EVvjWpyf5VKgk7QtryhV3gUIQ/rs:fit/g:sm/q:90/h:596/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEyMzg0/NTAyLTE1NjQ4NDQ1/MTEtMjA4Mi5qcGVn.jpeg',
          },
        ],
        tracklist: [],
      },
    });
    renderWithProviders(<ProductPage />);
    const productGallery = screen.getByRole('group', { name: /gallery/i });
    const images = within(productGallery).getAllByRole('img');
    expect(productGallery).toBeInTheDocument();
    expect(images).toHaveLength(4);
    images.forEach((img) => {
      expect(img.getAttribute('src')).not.toBe('');
    });
  });

  it('renders Tracklist', () => {
    useLoadAlbum.mockReturnValue({
      loading: false,
      error: null,
      albumData: {
        title: 'Test Album',
        year: 2001,
        genres: ['Rock'],
        styles: ['Indie'],
        lowest_price: 20,
        artists: [
          {
            name: 'Test Artist',
            thumbnail_url: 'img.jpg',
          },
        ],
        images: [{ uri: 'img' }],
        tracklist: [
          {
            position: 'A1',
            type_: 'track',
            title: 'Blue Rondo A La Turk',
            duration: '',
          },
          {
            position: 'A2',
            type_: 'track',
            title: 'Strange Meadow Lark',
            duration: '',
          },
          {
            position: 'A3',
            type_: 'track',
            title: 'Take Five',
            duration: '',
          },
        ],
      },
    });
    renderWithProviders(<ProductPage />);

    const tracklist = screen.getByRole('list', { name: /tracklist/i });
    const items = screen.getAllByRole('listitem');
    expect(tracklist).toBeInTheDocument();
    expect(items).toHaveLength(3);
  });
});
