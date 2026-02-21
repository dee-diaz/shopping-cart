import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ProductDescription from './ProductDescription';

describe('ProductDescription', () => {
  it('is present in the document', () => {
    render(<ProductDescription />);
    const description = screen.getByText(/Pressed on standard black/i);
    expect(description).toBeInTheDocument();
  });
});
