import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ProductDetails from './ProductDetails';

describe('ProductDetails', () => {
  it('renders artist header', () => {
    render(<ProductDetails />);
    const artistHeader = screen.getByRole('banner');
    expect(artistHeader).toBeInTheDocument();
  });

  it('renders product meta', () => {
    render(<ProductDetails />);
    const heading = screen.getByText('2004');
    expect(heading).toBeInTheDocument();
  });

  it('renders product description', () => {
    render(<ProductDetails />);
    const description = screen.getByText(/Pressed on standard black/i);
    expect(description).toBeInTheDocument();
  });

  it('renders price row', () => {
    render(<ProductDetails />);
    const priceRow = screen.getByTestId('price-row');
    expect(priceRow).toBeInTheDocument();
  });

  it('renders product actions', () => {
    render(<ProductDetails />);
    const productActions = screen.getByRole('group', {
      name: 'Product actions',
    });
    expect(productActions).toBeInTheDocument();
  });
});
