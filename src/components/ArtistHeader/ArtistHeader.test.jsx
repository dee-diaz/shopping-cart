import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ArtistHeader from './ArtistHeader';

describe('ArtistHeader', () => {
  it('is present in the document', () => {
    render(<ArtistHeader />);
    const artistHeader = screen.getByRole('banner');
    expect(artistHeader).toBeInTheDocument();
  });

  it('renders correct album info', () => {
    render(<ArtistHeader artistName="MF Doom" albumTitle="MM..Food" />);

    const artistName = screen.getByText('MF Doom');
    const albumTitle = screen.getByRole('heading');

    expect(artistName).toBeInTheDocument();
    expect(albumTitle).toHaveTextContent('MM..Food');
  });

  it('renders artist image', () => {
    render(
      <ArtistHeader
        artistImg="/images/mf-doom.jpg"
        artistName="MF Doom"
        albumTitle="MM..Food"
      />,
    );

    const artistImg = screen.getByRole('img');

    expect(artistImg).toHaveAttribute('src', '/images/mf-doom.jpg');
    expect(artistImg).toHaveAttribute('alt', 'MF Doom');
  });
});
