import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import QuantityInput from './QuantityInput';

describe('QuantityInput', () => {
  it('is present in the document', () => {
    render(<QuantityInput />);
    const quantityInput = screen.getByRole('group', { name: 'Quantity' });
    expect(quantityInput).toBeInTheDocument();
  });

  it('renders two buttons', () => {
    render(<QuantityInput />);
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(2);
  });

  it('increments value on clicking plus button', async () => {
    const user = userEvent.setup();

    render(<QuantityInput />);
    const plusBtn = screen.getByRole('button', { name: /increase/i });
    const value = screen.getByText('1');

    await user.click(plusBtn);

    expect(value).toHaveTextContent('2');
  });

  it('decrements value on clicking minus button', async () => {
    const user = userEvent.setup();

    render(<QuantityInput />);
    const plusBtn = screen.getByRole('button', { name: /increase/i });
    const minusBtn = screen.getByRole('button', { name: /decrease/i });
    const value = screen.getByText('1');

    await user.click(plusBtn);
    await user.click(minusBtn);

    expect(value).toHaveTextContent('1');
  });

  it("renders minus button disabled and doesn' decrement below 1", async () => {
    const user = userEvent.setup();

    render(<QuantityInput />);
    const minusBtn = screen.getByRole('button', { name: /decrease/i });
    const value = screen.getByText('1');

    await user.click(minusBtn);

    expect(minusBtn).toBeDisabled();
    expect(value).toHaveTextContent('1');
  });

  it("renders plus button disabled and doesn' increment above 10", async () => {
    const user = userEvent.setup();

    render(<QuantityInput />);
    const plusBtn = screen.getByRole('button', { name: /increase/i });
    const value = screen.getByText('1');

    for (let i = 0; i < 10; i++) {
      await user.click(plusBtn);
    }

    expect(plusBtn).toBeDisabled();
    expect(value).toHaveTextContent('10');
  });
});
