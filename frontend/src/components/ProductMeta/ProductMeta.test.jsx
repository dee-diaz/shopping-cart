import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ProductMeta from './ProductMeta';

describe('ProductMeta', () => {
  it('renders correct meta data', () => {
    render(
      <ProductMeta
        year="2004"
        genre="Hip Hop"
        subgenres={['Boom Bap', 'Jazzy Hip-Hop', 'Conscious']}
      />,
    );

    expect(screen.getByText('2004')).toBeInTheDocument();
    expect(screen.getByText('Hip Hop')).toBeInTheDocument();
    expect(
      screen.getByText('Boom Bap, Jazzy Hip-Hop, Conscious'),
    ).toBeInTheDocument();
  });

  it('renders with empty subgenres', () => {
    render(<ProductMeta year="2004" genre="Hip Hop" subgenres={[]} />);
    expect(screen.getByText('Release year:')).toBeInTheDocument();
  });
});
