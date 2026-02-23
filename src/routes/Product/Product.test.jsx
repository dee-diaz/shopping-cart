import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import ProductPage from './Product';

describe('ProductPage', () => {
  it('renders nav link leading to homepage', () => {
    render(<ProductPage />, { wrapper: MemoryRouter });
    const link = screen.getByRole('link', { name: /back to catalog/i });
    expect(link).toBeInTheDocument();
  });

  it('renders ProductGallery', () => {
    render(<ProductPage />, { wrapper: MemoryRouter });
    const productGallery = screen.getByRole('group', { name: /gallery/i });
    expect(productGallery).toBeInTheDocument();
  });

  it('renders ProductDetails', () => {
    render(<ProductPage />, { wrapper: MemoryRouter });
    const productDetails = screen.getByTestId('product-details');
    expect(productDetails).toBeInTheDocument();
  });

  it('renders Tracklist', () => {
    render(<ProductPage />, { wrapper: MemoryRouter });
    const tracklist = screen.getByRole('region', { name: /tracklist/i });
    expect(tracklist).toBeInTheDocument();
  });
});
