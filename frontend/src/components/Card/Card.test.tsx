import { describe, it, expect } from 'vitest';
import { screen, within } from '@testing-library/react';
import { renderWithProviders } from '../../test-utils';
import Card from './Card';
import { CardProps } from './Card';

const mockProps: CardProps = {
  albumId: 6530,
  genre: 'Electronic',
  albumTitle: 'Mezzanine',
  albumArtist: 'Massive Attack',
  coverImgUrl:
    'https://i.discogs.com/t2cOvgvzOqKzSFab55cHspWHl5IgiVpbPtLgyzwYmxI/rs:fit/g:sm/q:90/h:596/w:600/czM6Ly9kaXNjb2dzLWRhdGFiYXNlLWltYWdlcy9SLTY1MzAtMTYxNTMwMzUzMi01NDI0LmpwZWc.jpeg',
  price: 29,
};

describe('Card', () => {
  it('renders with correct album info', () => {
    renderWithProviders(<Card {...mockProps} />);
    const card = screen.getByRole('article');

    expect(
      within(card).getByRole('heading', { name: mockProps.albumTitle }),
    ).toBeInTheDocument();
    expect(within(card).getByText(mockProps.albumArtist)).toBeInTheDocument();
    within(card).getByLabelText(`Price: $${mockProps.price}`);
  });

  it('renders cover image', () => {
    const altText = `${mockProps.albumTitle} by ${mockProps.albumArtist} album cover`;

    renderWithProviders(<Card {...mockProps} />);
    const card = screen.getByRole('article');
    const image = within(card).getByRole('img');

    expect(image).toHaveAttribute('src', mockProps.coverImgUrl);
    expect(image).toHaveAttribute('alt', altText);
  });

  it('renders placeholder image if there is no image', () => {
    renderWithProviders(<Card {...mockProps} coverImgUrl="" />);
    const card = screen.getByRole('article');
    const image = within(card).getByRole('img');

    expect(image).toHaveAttribute('src', '/images/album-placeholder.webp');
  });

  it('links to product page', () => {
    renderWithProviders(<Card {...mockProps} />);
    const card = screen.getByRole('article');
    const links = within(card).getAllByRole('link');
    expect(links).toHaveLength(2);
    links.forEach((link) =>
      expect(link).toHaveAttribute('href', `/product/${mockProps.albumId}`),
    );
  });

  it('renders add to cart button', () => {
    renderWithProviders(<Card {...mockProps} />);
    const card = screen.getByRole('article');
    const button = within(card).getByRole('button', { name: /add/i });
    expect(button).toBeInTheDocument();
  });
});
