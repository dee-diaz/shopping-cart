import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button';
import styles from './Button.module.css';

describe('Button', () => {
  it('renders with correct text', () => {
    render(<Button label="Add to cart" />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Add to cart');
  });

  it('renders SVG icon when passed as a prop', () => {
    const cartIcon = (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.4375 16.875C8.4375 17.1222 8.36419 17.3639 8.22684 17.5695C8.08949 17.775 7.89426 17.9352 7.66585 18.0299C7.43745 18.1245 7.18611 18.1492 6.94364 18.101C6.70116 18.0527 6.47843 17.9337 6.30362 17.7589C6.1288 17.5841 6.00975 17.3613 5.96152 17.1189C5.91329 16.8764 5.93804 16.6251 6.03265 16.3966C6.12726 16.1682 6.28748 15.973 6.49304 15.8357C6.6986 15.6983 6.94027 15.625 7.1875 15.625C7.51902 15.625 7.83696 15.7567 8.07138 15.9911C8.3058 16.2255 8.4375 16.5435 8.4375 16.875ZM15.3125 15.625C15.0653 15.625 14.8236 15.6983 14.618 15.8357C14.4125 15.973 14.2523 16.1682 14.1576 16.3966C14.063 16.6251 14.0383 16.8764 14.0865 17.1189C14.1347 17.3613 14.2538 17.5841 14.4286 17.7589C14.6034 17.9337 14.8262 18.0527 15.0686 18.101C15.3111 18.1492 15.5624 18.1245 15.7909 18.0299C16.0193 17.9352 16.2145 17.775 16.3518 17.5695C16.4892 17.3639 16.5625 17.1222 16.5625 16.875C16.5625 16.5435 16.4308 16.2255 16.1964 15.9911C15.962 15.7567 15.644 15.625 15.3125 15.625ZM19.0398 5.79219L17.0367 13.0016C16.9266 13.3954 16.691 13.7425 16.3658 13.9904C16.0405 14.2383 15.6433 14.3733 15.2344 14.375H7.5125C7.10237 14.3748 6.70355 14.2405 6.37687 13.9925C6.0502 13.7446 5.81358 13.3965 5.70312 13.0016L2.9625 3.125H1.5625C1.39674 3.125 1.23777 3.05915 1.12056 2.94194C1.00335 2.82473 0.9375 2.66576 0.9375 2.5C0.9375 2.33424 1.00335 2.17527 1.12056 2.05806C1.23777 1.94085 1.39674 1.875 1.5625 1.875H3.4375C3.57414 1.87497 3.70703 1.91973 3.81581 2.00241C3.9246 2.08509 4.00329 2.20115 4.03984 2.33281L4.78047 5H18.4375C18.5339 4.99998 18.6289 5.02224 18.7152 5.06504C18.8016 5.10784 18.8768 5.17001 18.9351 5.24671C18.9935 5.32341 19.0333 5.41255 19.0514 5.50718C19.0696 5.6018 19.0656 5.69935 19.0398 5.79219ZM17.6148 6.25H5.12813L6.91016 12.6672C6.94671 12.7989 7.0254 12.9149 7.13419 12.9976C7.24297 13.0803 7.37586 13.125 7.5125 13.125H15.2344C15.371 13.125 15.5039 13.0803 15.6127 12.9976C15.7215 12.9149 15.8002 12.7989 15.8367 12.6672L17.6148 6.25Z"
          fill="#F2F2F2"
        />
      </svg>
    );
    render(<Button label="Add to cart" icon={cartIcon} />);
    const button = screen.getByRole('button');
    expect(button.querySelector('svg')).toBeInTheDocument();
  });

  it('renders with correct size', () => {
    render(<Button label="Add to cart" size="sm" />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass(styles.sm);
  });

  it('renders as disabled when prop is passed', () => {
    render(<Button label="Add to cart" isDisabled={true} />);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });

  it('does not render as disabled when prop is passed with false value', () => {
    render(<Button label="Add to cart" isDisabled={false} />);
    const button = screen.getByRole('button');
    expect(button).not.toBeDisabled();
  });

  it('calls onClick once on click', async () => {
    const user = userEvent.setup();
    const mockFn = vi.fn();

    render(<Button label="Add to cart" onClick={mockFn} />);
    const button = screen.getByRole('button');

    await user.click(button);

    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it('does not call onClick when disabled', async () => {
    const user = userEvent.setup();
    const mockFn = vi.fn();

    render(<Button label="Add to cart" isDisabled={true} onClick={mockFn} />);
    const button = screen.getByRole('button');

    await user.click(button);

    expect(mockFn).not.toHaveBeenCalled();
  });
});
