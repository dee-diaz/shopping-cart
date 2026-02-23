import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Wishlist, { EmptyState } from './Wishlist';

const mockSavedAlbums = [
  {
    id: 1,
    title: 'Ritual Of Battle',
    artist: 'Jedi Mind Tricks',
    price: '26',
    coverImgUrl:
      'https://i.discogs.com/my_Gd5nsGzyb6Dm5LgWor0duRe9Fbx0HFHPPIQwBAr8/rs:fit/g:sm/q:90/h:597/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEwOTE0/MjAtMTY0MTY4MzA3/OS02NTc1LmpwZWc.jpeg',
  },
  {
    id: 2,
    title: 'Madvillainy',
    artist: 'Madvillain',
    price: '29',
    coverImgUrl: '',
  },
];

describe('Wishlist', () => {
  it('renders heading', () => {
    render(<Wishlist savedAlbums={mockSavedAlbums} />, {
      wrapper: MemoryRouter,
    });
    const heading = screen.getByRole('heading', { name: /Wishlist/i });
    expect(heading).toBeInTheDocument();
  });

  it('renders empty state when wishlist array is empty', () => {
    render(<Wishlist savedAlbums={[]} />, { wrapper: MemoryRouter });
    const emptyState = screen.getByRole('status');
    expect(emptyState).toBeInTheDocument();
  });

  it('renders empty state when no prop is passed', () => {
    render(<Wishlist />, { wrapper: MemoryRouter });
    const emptyState = screen.getByRole('status');
    expect(emptyState).toBeInTheDocument();
  });

  it('renders recommendations', () => {
    render(<Wishlist savedAlbums={mockSavedAlbums} />, {
      wrapper: MemoryRouter,
    });
    const recommendations = screen.getByRole('region');
    expect(recommendations).toBeInTheDocument();
  });

  it('renders 2 card grids', () => {
    render(<Wishlist savedAlbums={mockSavedAlbums} />, {
      wrapper: MemoryRouter,
    });
    const cardGrids = screen.getAllByTestId('card-grid');
    expect(cardGrids).toHaveLength(2);
  });
});

describe('EmptyState', () => {
  it('button links to homepage', () => {
    render(<EmptyState />, {
      wrapper: MemoryRouter,
    });
    const link = screen.getByRole('link', { name: /return/i });
    expect(link).toHaveAttribute('href', '/');
  });

  it('renders status text', () => {
    render(<EmptyState />, {
      wrapper: MemoryRouter,
    });
    const text = screen.getByText(/you haven’t saved any items/i);
    expect(text).toBeInTheDocument();
  });
});
