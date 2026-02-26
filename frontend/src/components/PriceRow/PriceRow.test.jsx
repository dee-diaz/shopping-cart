import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import PriceRow from './PriceRow';

describe('PriceRow', () => {
  it('is present in the document', () => {
    render(<PriceRow />);
    const priceRow = screen.getByTestId('price-row');
    expect(priceRow).toBeInTheDocument();
  });

  it('renders the correct price', () => {
    render(<PriceRow price="$29" />);
    expect(screen.getByText('$29')).toBeInTheDocument();
  });

  it('renders the stock badge', () => {
    render(<PriceRow />);
    expect(
      screen.getByLabelText(/availability: in stock/i),
    ).toBeInTheDocument();
  });
});
