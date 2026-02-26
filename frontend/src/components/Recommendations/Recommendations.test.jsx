import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Recommendations from './Recommendations';

describe('Recommendations', () => {
  it('is present in the document', () => {
    render(<Recommendations />, { wrapper: MemoryRouter });
    const recommendations = screen.getByRole('region', {
      name: /Maybe you’d like/i,
    });
    expect(recommendations).toBeInTheDocument();
  });

  it('renders heading', () => {
    render(<Recommendations />, { wrapper: MemoryRouter });
    const heading = screen.getByRole('heading', { name: /Maybe you’d like/i });
    expect(heading).toBeInTheDocument();
  });

  it('renders card grid', () => {
    render(<Recommendations />, { wrapper: MemoryRouter });
    const cardGrid = screen.getByTestId('card-grid');
    expect(cardGrid).toBeInTheDocument();
  });
});
