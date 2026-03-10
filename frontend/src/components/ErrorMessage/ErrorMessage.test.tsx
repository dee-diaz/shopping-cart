import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ErrorMessage from './ErrorMessage';

describe('ErrorMessage', () => {
  it('is present in the document', () => {
    render(<ErrorMessage message='Test' />);
    const errorMessage = screen.getByRole('alert');
    expect(errorMessage).toBeInTheDocument();
  });

  it('renders heading', () => {
    render(<ErrorMessage message='Test' />);
    const heading = screen.getByRole('heading', { name: /Whoops/i });
    expect(heading).toBeInTheDocument();
  });

  it('renders correct error message', () => {
    const errMessage = 'Failed to fetch';
    render(<ErrorMessage message={errMessage} />);
    const message = screen.getByText(/Failed to fetch/i);
    expect(message).toBeInTheDocument();
  });
});
