import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import QuantityInput from './QuantityInput';

describe('QuantityInput', () => {
  it('is present in the document', () => {
    render(
      <QuantityInput
        quantity={1}
        onIncrement={vi.fn()}
        onDecrement={vi.fn()}
      />,
    );
    const quantityInput = screen.getByRole('group', { name: 'Quantity' });
    expect(quantityInput).toBeInTheDocument();
  });

  it('renders two buttons', () => {
    render(
      <QuantityInput
        quantity={1}
        onIncrement={vi.fn()}
        onDecrement={vi.fn()}
      />,
    );
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(2);
  });

  it('renders provided quantity', () => {
    render(
      <QuantityInput
        quantity={3}
        onDecrement={vi.fn()}
        onIncrement={vi.fn()}
      />,
    );

    expect(screen.getByText('3')).toBeInTheDocument();
  });

  it('renders minus button disabled when 1 is passed', () => {
    render(
      <QuantityInput
        quantity={1}
        onDecrement={vi.fn()}
        onIncrement={vi.fn()}
      />,
    );
    const minusBtn = screen.getByRole('button', { name: /decrease/i });

    expect(minusBtn).toBeDisabled();
  });

  it('renders plus button disabled when 10 is passed', () => {
    render(
      <QuantityInput
        quantity={10}
        onDecrement={vi.fn()}
        onIncrement={vi.fn()}
      />,
    );
    const plusBtn = screen.getByRole('button', { name: /increase/i });

    expect(plusBtn).toBeDisabled();
  });

  it('enables both buttons when quantity is between min and max', () => {
    render(
      <QuantityInput
        quantity={5}
        onDecrement={vi.fn()}
        onIncrement={vi.fn()}
      />,
    );

    const minusBtn = screen.getByRole('button', { name: /decrease/i });
    const plusBtn = screen.getByRole('button', { name: /increase/i });

    expect(minusBtn).not.toBeDisabled();
    expect(plusBtn).not.toBeDisabled();
  });

  it('calls onIncrement when plus button is clicked', async () => {
    const onIncrement = vi.fn();
    const user = userEvent.setup();

    render(
      <QuantityInput
        quantity={1}
        onIncrement={onIncrement}
        onDecrement={vi.fn()}
      />,
    );

    await user.click(screen.getByRole('button', { name: /increase/i }));

    expect(onIncrement).toHaveBeenCalledTimes(1);
  });

  it('calls onDecrement when minus button is clicked', async () => {
    const onDecrement = vi.fn();
    const user = userEvent.setup();

    render(
      <QuantityInput
        quantity={2}
        onIncrement={vi.fn()}
        onDecrement={onDecrement}
      />,
    );

    await user.click(screen.getByRole('button', { name: /decrease/i }));

    expect(onDecrement).toHaveBeenCalledTimes(1);
  });
});
