import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import LoadingState from './LoadingState';

describe('LoadingState', () => {
  it('is present in the document', () => {
    render(<LoadingState />);
    const loadingState = screen.getByRole('status');
    expect(loadingState).toBeInTheDocument();
  });

  it('renders heading', () => {
    render(<LoadingState />);
    const heading = screen.getByRole('heading', { name: /Loading/i });
    expect(heading).toBeInTheDocument();
  });

  it('spinner is hidden from assistive tech', () => {
    render(<LoadingState />);
    const spinner = screen.getByRole('status').firstChild;
    expect(spinner).toHaveAttribute('aria-hidden', 'true');
  });
});
