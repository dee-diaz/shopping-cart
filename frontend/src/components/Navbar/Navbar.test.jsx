import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Navbar from './Navbar';

describe('Navbar', () => {
  beforeEach(() => {
    render(<Navbar />, { wrapper: MemoryRouter });
  });

  describe('Logo', () => {
    it('renders logo image', () => {
      expect(screen.getByRole('img')).toBeInTheDocument();
    });

    it('logo links to homepage', () => {
      const link = screen.getByRole('link', { name: /homepage/i });
      expect(link).toHaveAttribute('href', '/');
    });
  });

  describe('Navigation links', () => {
    it('wishlist link navigates to wishlist page', () => {
      const link = screen.getByRole('link', { name: /wishlist/i });
      expect(link).toHaveAttribute('href', '/wishlist');
    });

    it('cart link navigates to cart page', () => {
      const link = screen.getByRole('link', { name: /cart/i });
      expect(link).toHaveAttribute('href', '/cart');
    });
  });

  describe('Search button', () => {
    it('renders search button', () => {
      const button = screen.getByRole('button', { name: /search/i });
      expect(button).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('all navigation links have accessible names', () => {
      const nav = screen.getByRole('navigation');
      const links = within(nav).getAllByRole('link');

      links.forEach((link) => {
        expect(link).toHaveAccessibleName();
      });
    });

    it('search button has accessible name', () => {
      const button = screen.getByRole('button', { name: /search/i });
      expect(button).toHaveAccessibleName();
    });
  });
});
