import { describe, it, expect } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Footer from './Footer';

describe('Footer', () => {
  it('is present in the document', () => {
    render(<Footer />, { wrapper: MemoryRouter });
    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeInTheDocument();
  });

  it('renders logo', () => {
    render(<Footer />, { wrapper: MemoryRouter });
    const logo = screen.getByRole('img', { name: /grain & noise/i });
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', '/images/logo.png');
  });

  it('logo links to homepage', () => {
    render(<Footer />, { wrapper: MemoryRouter });
    const link = screen.getByRole('link', { name: /homepage/i });
    expect(link).toHaveAttribute('href', '/');
  });

  it('footer nav contains 4 items', () => {
    render(<Footer />, { wrapper: MemoryRouter });
    const footerNav = screen.getByRole('navigation');
    expect(within(footerNav).getAllByRole('listitem')).toHaveLength(4);
  });
});
