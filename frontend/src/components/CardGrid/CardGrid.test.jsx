import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import CardGrid from './CardGrid';

describe('CardGrid', () => {
  it('renders a card for each album', () => {
    const albums = [
      { id: 1, title: 'MM..Food', artist: 'MF Doom', price: '29' },
      {
        id: 2,
        title: 'Ritual Of Battle',
        artist: 'Jedi Mind Tricks',
        price: '35',
      },
    ];

    render(<CardGrid albums={albums} />, { wrapper: MemoryRouter });

    expect(screen.getAllByRole('article')).toHaveLength(2);
  });
});
