import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FilterSidebar, {
  GenreFilter,
  PriceFilter,
  FilterIcon,
  ModalCloseButton,
} from './FilterSidebar';
import styles from './FilterSidebar.module.css';

describe('FilterSidebar', () => {
  it('is present in the document', () => {
    render(<FilterSidebar />);
    const sidebar = screen.getByRole('region', {
      name: 'Filters',
    });
    expect(sidebar).toBeInTheDocument();
  });

  it('opens sidebar when filter icon is clicked', async () => {
    const user = userEvent.setup();
    render(<FilterSidebar />);
    const sidebar = screen.getByRole('region', { name: 'Filters' });

    await user.click(screen.getByRole('button', { name: /open/i }));

    expect(sidebar).toHaveClass(styles.open);
  });

  it('close sidebar when close icon is clicked', async () => {
    const user = userEvent.setup();
    render(<FilterSidebar />);
    const sidebar = screen.getByRole('region', { name: 'Filters' });

    await user.click(screen.getByRole('button', { name: /open/i }));
    await user.click(screen.getByRole('button', { name: /close/i }));

    expect(sidebar).not.toHaveClass(styles.open);
  });
});

describe('GenreFilter', () => {
  it('is present in the document', () => {
    render(<GenreFilter selectedGenres={[]} onChange={vi.fn()} />);
    const heading = screen.getByRole('heading', { name: 'Genre' });
    expect(heading).toBeInTheDocument();
  });

  it('checks checkbox for selected genre', async () => {
    render(<GenreFilter selectedGenres={['Jazz']} onChange={vi.fn()} />);
    expect(screen.getByRole('checkbox', { name: 'Jazz' })).toBeChecked();
  });

  it('does not check checkbox for unselected genre', () => {
    render(<GenreFilter selectedGenres={[]} onChange={vi.fn()} />);
    expect(screen.getByRole('checkbox', { name: 'Jazz' })).not.toBeChecked();
  });
});

describe('PriceFilter', () => {
  it('is present in the document', () => {
    render(
      <PriceFilter appliedValue={{ min: 0, max: 50 }} onApply={vi.fn()} />,
    );
    const heading = screen.getByRole('heading', { name: 'Price' });
    expect(heading).toBeInTheDocument();
  });

  it('calls onApply with entered min and max values', async () => {
    const user = userEvent.setup();
    const mockOnApply = vi.fn();

    render(
      <PriceFilter
        appliedValue={{ min: undefined, max: undefined }}
        onApply={mockOnApply}
      />,
    );

    await user.type(screen.getByRole('spinbutton', { name: /minimum/i }), '10');
    await user.type(screen.getByRole('spinbutton', { name: /maximum/i }), '50');
    await user.click(screen.getByRole('button', { name: /apply/i }));

    expect(mockOnApply).toHaveBeenCalledWith('10', '50');
  });
});

describe('FilterIcon', () => {
  it('is present in the document', () => {
    render(<FilterIcon />);
    const button = screen.getByRole('button', { name: /open/i });
    expect(button).toBeInTheDocument();
  });

  it('calls onClick fn', async () => {
    const mockFn = vi.fn();
    const user = userEvent.setup();

    render(<FilterIcon onClick={mockFn} />);
    const btn = screen.getByRole('button', { name: /open/i });

    await user.click(btn);

    expect(mockFn).toBeCalled();
  });
});

describe('ModalCloseButton', () => {
  it('is present in the document', () => {
    render(<ModalCloseButton />);
    const button = screen.getByRole('button', { name: /close/i });
    expect(button).toBeInTheDocument();
  });

  it('calls onClick fn', async () => {
    const mockFn = vi.fn();
    const user = userEvent.setup();

    render(<ModalCloseButton onClick={mockFn} />);
    const btn = screen.getByRole('button', { name: /close/i });

    await user.click(btn);

    expect(mockFn).toBeCalled();
  });
});
