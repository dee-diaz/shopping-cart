import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import ProductDetails from './ProductDetails';
import { renderWithProviders } from '../../test-utils';

const mockProps = {
  artist: 'Massive Attack',
  artistImg:
    'https://i.discogs.com/t2cOvgvzOqKzSFab55cHspWHl5IgiVpbPtLgyzwYmxI/rs:fit/g:sm/q:90/h:596/w:600/czM6Ly9kaXNjb2dzLWRhdGFiYXNlLWltYWdlcy9SLTY1MzAtMTYxNTMwMzUzMi01NDI0LmpwZWc.jpeg',
  title: 'Mezzanine',
  year: 1998,
  genre: 'Electronic',
  subgenres: ['Trip Hop', 'Downtempo'],
  lowestPrice: 12,
};

describe('ProductDetails', () => {
  it('renders artist header', () => {
    renderWithProviders(<ProductDetails {...mockProps} />);
    const artistHeader = screen.getByRole('banner');
    expect(artistHeader).toBeInTheDocument();
  });

  it('renders product meta', () => {
    renderWithProviders(<ProductDetails {...mockProps} />);
    expect(screen.getByText('1998')).toBeInTheDocument();
    expect(screen.getByText('Electronic')).toBeInTheDocument();
    expect(screen.getByText('Trip Hop, Downtempo')).toBeInTheDocument();
  });

  it('renders product description', () => {
    renderWithProviders(<ProductDetails {...mockProps} />);
    const description = screen.getByText(/Pressed on standard black/i);
    expect(description).toBeInTheDocument();
  });

  it('renders price row', () => {
    renderWithProviders(<ProductDetails {...mockProps} />);
    const priceRow = screen.getByTestId('price-row');
    expect(priceRow).toBeInTheDocument();
  });

  it('displays formatted price', () => {
    renderWithProviders(<ProductDetails {...mockProps} />);
    expect(screen.getByText('$32')).toBeInTheDocument();
  });

  it('renders product actions', () => {
    renderWithProviders(<ProductDetails {...mockProps} />);
    const productActions = screen.getByRole('group', {
      name: 'Product actions',
    });
    expect(productActions).toBeInTheDocument();
  });
});
