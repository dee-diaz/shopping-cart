import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../test-utils';
import Recommendations from './Recommendations';

describe('Recommendations', () => {
  it('has accessible name', () => {
    renderWithProviders(<Recommendations />);
    const recommendations = screen.getByRole('region', {
      name: /Maybe you’d like/i,
    });
    expect(recommendations).toBeInTheDocument();
  });

  it('renders heading', () => {
    renderWithProviders(<Recommendations />);
    const heading = screen.getByRole('heading', { name: /Maybe you’d like/i });
    expect(heading).toBeInTheDocument();
  });

  it('renders card grid', () => {
    renderWithProviders(<Recommendations />);
    const cardGrid = screen.getByTestId('card-grid');
    expect(cardGrid).toBeInTheDocument();
    expect(screen.getAllByRole('article')).toHaveLength(4);
  });
});
