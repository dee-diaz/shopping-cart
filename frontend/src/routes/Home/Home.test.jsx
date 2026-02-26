import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import HomePage from './Home';

describe('HomePage', () => {
  it('renders heading', () => {
    render(<HomePage />, { wrapper: MemoryRouter });
    const heading = screen.getByRole('heading', { name: /Vinyl catalog/i });
    expect(heading).toBeInTheDocument();
  });

  it('renders sort dropdown button', () => {
    render(<HomePage />, { wrapper: MemoryRouter });
    const dropdownToggleBtn = screen.getByRole('button', { name: /sort/i });
    expect(dropdownToggleBtn).toBeInTheDocument();
  });

  it('renders filter sidebar', () => {
    render(<HomePage />, { wrapper: MemoryRouter });
    const filterSidebar = screen.getByRole('region', { name: 'Filters' });
    expect(filterSidebar).toBeInTheDocument();
  });

  it('renders card grid', () => {
    render(<HomePage />, { wrapper: MemoryRouter });
    const cardGrid = screen.getByTestId('card-grid');
    expect(cardGrid).toBeInTheDocument();
  });
});
