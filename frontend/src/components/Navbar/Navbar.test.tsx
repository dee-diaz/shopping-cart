import { describe, it, expect } from 'vitest';
import { screen, within } from '@testing-library/react';
import Navbar from './Navbar';
import { renderWithProviders } from '../../test-utils';

describe('Navbar', () => {
  describe('Logo', () => {
    it('renders logo image', () => {
      renderWithProviders(<Navbar />);
      expect(screen.getByRole('img')).toBeInTheDocument();
    });

    it('logo links to homepage', () => {
      renderWithProviders(<Navbar />);
      const link = screen.getByRole('link', { name: /homepage/i });
      expect(link).toHaveAttribute('href', '/');
    });
  });

  describe('Navigation links', () => {
    it('wishlist link navigates to wishlist page', () => {
      renderWithProviders(<Navbar />);
      const link = screen.getByRole('link', { name: /wishlist/i });
      expect(link).toHaveAttribute('href', '/wishlist');
    });

    it('cart link navigates to cart page', () => {
      renderWithProviders(<Navbar />);
      const link = screen.getByRole('link', { name: /cart/i });
      expect(link).toHaveAttribute('href', '/cart');
    });
  });

  describe('Search button', () => {
    it('renders search button', () => {
      renderWithProviders(<Navbar />);
      const button = screen.getByRole('button', { name: /search/i });
      expect(button).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('all navigation links have accessible names', () => {
      renderWithProviders(<Navbar />);
      const nav = screen.getByRole('navigation');
      const links = within(nav).getAllByRole('link');

      links.forEach((link) => {
        expect(link).toHaveAccessibleName();
      });
    });

    it('search button has accessible name', () => {
      renderWithProviders(<Navbar />);
      const button = screen.getByRole('button', { name: /search/i });
      expect(button).toHaveAccessibleName();
    });
  });
});
