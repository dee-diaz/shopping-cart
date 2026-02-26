import { describe, it, expect } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SortDropdown from './SortDropdown';

describe('SortDropdown', () => {
  describe('Dropdown toggle button', () => {
    it('renders the button and displays default option', () => {
      render(<SortDropdown />);
      const button = screen.getByRole('button', { name: /sort/i });

      expect(button).toBeInTheDocument();
      expect(button).toHaveTextContent('Popular');
    });

    it('button has correct aria-expanded value', () => {
      render(<SortDropdown />);
      const button = screen.getByRole('button', { name: /sort/i });
      expect(button).toHaveAttribute('aria-expanded', 'false');
    });

    it('shows the dropdown content on click', async () => {
      const user = userEvent.setup();

      render(<SortDropdown />);
      const button = screen.getByRole('button', { name: /sort/i });

      await user.click(button);
      const menu = screen.getByRole('listbox', { name: /sort/i });

      expect(button).toHaveAttribute('aria-expanded', 'true');
      expect(menu).toBeInTheDocument();
    });

    it('closes dropdown on second click', async () => {
      const user = userEvent.setup();

      render(<SortDropdown />);
      const button = screen.getByRole('button', { name: /sort/i });

      await user.click(button);
      await user.click(button);

      expect(button).toHaveAttribute('aria-expanded', 'false');
      expect(
        screen.queryByRole('listbox', { name: /sort/i }),
      ).not.toBeInTheDocument();
    });

    it('closes dropdown on outside click', async () => {
      const user = userEvent.setup();

      render(<SortDropdown />);
      const button = screen.getByRole('button', { name: /sort/i });

      await user.click(button);
      expect(button).toHaveAttribute('aria-expanded', 'true');

      await user.click(document.body);
      expect(button).toHaveAttribute('aria-expanded', 'false');
    });
  });

  describe('Dropdown menu', () => {
    it('does not render menu when closed', () => {
      render(<SortDropdown />);
      expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    });

    it('selects option and closes dropdown menu', async () => {
      const user = userEvent.setup();

      render(<SortDropdown />);
      const button = screen.getByRole('button', { name: /sort/i });

      await user.click(button);
      const option = screen.getByRole('option', { name: /newest/i });

      await user.click(option);

      expect(button).toHaveAttribute('aria-expanded', 'false');
      expect(button).toHaveTextContent('Newest');
    });

    it('list contains 4 sorting options', async () => {
      const user = userEvent.setup();
      render(<SortDropdown />);
      const button = screen.getByRole('button', { name: /sort/i });

      await user.click(button);
      const list = screen.getByRole('list');
      const items = within(list).getAllByRole('option');

      expect(items).toHaveLength(4);
    });
  });

  describe('Accessibility', () => {
    it('closes dropdown on Escape key', async () => {
      const user = userEvent.setup();

      render(<SortDropdown />);
      const button = screen.getByRole('button', { name: /sort/i });

      await user.click(button);
      expect(button).toHaveAttribute('aria-expanded', 'true');

      await user.keyboard('{Escape}');
      expect(button).toHaveAttribute('aria-expanded', 'false');
    });

    it('marks selected option with aria-selected', async () => {
      const user = userEvent.setup();

      render(<SortDropdown />);
      const button = screen.getByRole('button', { name: /sort/i });

      await user.click(button);
      const selectedOption = screen.getByRole('option', { name: /popular/i });

      expect(selectedOption).toHaveAttribute('aria-selected', 'true');
    });

    it('shows checkmark icon for selected option', async () => {
      const user = userEvent.setup();

      render(<SortDropdown />);
      const button = screen.getByRole('button', { name: /sort/i });

      await user.click(button);
      const popularOption = screen.getByRole('option', { name: /popular/i });

      const svg = popularOption.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });
  });
});
