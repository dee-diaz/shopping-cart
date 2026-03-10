import { describe, it, expect, vi } from 'vitest';
import { screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SortDropdown from './SortDropdown';
import { renderWithProviders } from '../../test-utils';
import { SORT_TYPE } from '../../constants/constants';

describe('SortDropdown', () => {
  describe('Dropdown toggle button', () => {
    it('renders the button and displays default option', () => {
      renderWithProviders(<SortDropdown />);
      const button = screen.getByRole('button', { name: /sort/i });

      expect(button).toBeInTheDocument();
      expect(button).toHaveTextContent('Popular');
    });

    it('button has correct aria-expanded value', () => {
      renderWithProviders(<SortDropdown />);
      const button = screen.getByRole('button', { name: /sort/i });
      expect(button).toHaveAttribute('aria-expanded', 'false');
    });

    it('shows the dropdown content on click', async () => {
      const user = userEvent.setup();

      renderWithProviders(<SortDropdown />);
      const button = screen.getByRole('button', { name: /sort/i });

      await user.click(button);
      const menu = screen.getByRole('listbox', { name: /sort/i });

      expect(button).toHaveAttribute('aria-expanded', 'true');
      expect(menu).toBeInTheDocument();
    });

    it('closes dropdown on second click', async () => {
      const user = userEvent.setup();

      renderWithProviders(<SortDropdown />);
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

      renderWithProviders(<SortDropdown />);
      const button = screen.getByRole('button', { name: /sort/i });

      await user.click(button);
      expect(button).toHaveAttribute('aria-expanded', 'true');

      await user.click(document.body);
      expect(button).toHaveAttribute('aria-expanded', 'false');
    });
  });

  describe('Dropdown menu', () => {
    it('does not render menu when closed', () => {
      renderWithProviders(<SortDropdown />);
      expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    });

    it('selects option and closes dropdown menu', async () => {
      const user = userEvent.setup();

      renderWithProviders(<SortDropdown />);
      const button = screen.getByRole('button', { name: /sort/i });

      await user.click(button);
      const option = screen.getByRole('option', { name: /newest/i });

      await user.click(option);

      expect(button).toHaveAttribute('aria-expanded', 'false');
      expect(button).toHaveTextContent('Newest');
    });

    it('list contains 4 sorting options', async () => {
      const user = userEvent.setup();
      renderWithProviders(<SortDropdown />);
      const button = screen.getByRole('button', { name: /sort/i });

      await user.click(button);
      const list = screen.getByRole('listbox');
      const items = within(list).getAllByRole('option');

      expect(items).toHaveLength(4);
    });

    it('calls setSortType when option is selected', async () => {
      const user = userEvent.setup();
      const setSortType = vi.fn();

      renderWithProviders(<SortDropdown />, { setSortType });

      const trigger = screen.getByRole('button', { name: /sort options/i });

      await user.click(trigger);

      const listbox = screen.getByRole('listbox');

      const option = within(listbox).getByText(SORT_TYPE.NEWEST);

      await user.click(option);

      expect(setSortType).toHaveBeenCalledWith(SORT_TYPE.NEWEST);
    });
  });

  describe('Accessibility', () => {
    it('closes dropdown on Escape key', async () => {
      const user = userEvent.setup();

      renderWithProviders(<SortDropdown />);
      const button = screen.getByRole('button', { name: /sort/i });

      await user.click(button);
      expect(button).toHaveAttribute('aria-expanded', 'true');

      await user.keyboard('{Escape}');
      expect(button).toHaveAttribute('aria-expanded', 'false');
    });

    it('marks selected option with aria-selected', async () => {
      const user = userEvent.setup();

      renderWithProviders(<SortDropdown />);
      const button = screen.getByRole('button', { name: /sort/i });

      await user.click(button);
      const selectedOption = screen.getByRole('option', { name: /popular/i });

      expect(selectedOption).toHaveAttribute('aria-selected', 'true');
    });

    it('shows checkmark icon for selected option', async () => {
      const user = userEvent.setup();

      renderWithProviders(<SortDropdown />);
      const button = screen.getByRole('button', { name: /sort/i });

      await user.click(button);
      const popularOption = screen.getByRole('option', { name: /popular/i });

      const svg = popularOption.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });
  });
});
