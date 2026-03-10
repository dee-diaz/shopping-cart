import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Tracklist, { TracklistItem } from './Tracklist';

const mockTracklist = [
  { position: 'A1', title: 'Beef Rapp', duration: '4:39' },
  { position: 'A2', title: 'Hoe Cakes', duration: '3:54' },
  { position: 'A3', title: 'Potholderz', duration: '3:20' },
  { position: 'B1', title: 'One Beer', duration: '4:18' },
  { position: 'B2', title: 'Deep Fried Frenz', duration: '4:56' },
  { position: 'B3', title: 'Poo-Putt Platter', duration: '1:13' },
];

describe('Tracklist', () => {
  it('is present in the document', () => {
    render(<Tracklist tracklist={mockTracklist} />);
    const tracklist = screen.getByRole('region');
    expect(tracklist).toBeInTheDocument();
  });

  it('renders tracklist items', () => {
    render(<Tracklist tracklist={mockTracklist} />);
    expect(screen.getAllByRole('listitem')).toHaveLength(6);
  });

  it('renders empty list when no tracklist provided', () => {
    render(<Tracklist />);
    expect(screen.queryAllByRole('listitem')).toHaveLength(0);
  });
});

describe('TracklistItem', () => {
  it('renders empty spans when no data provided', () => {
    render(<TracklistItem />);
    expect(screen.getByRole('listitem')).toBeInTheDocument();
  });

  it('renders correct song data', () => {
    render(<TracklistItem position="A1" title="Beef Rapp" duration="4:03" />);
    expect(screen.getByText('A1')).toBeInTheDocument();
    expect(screen.getByText('Beef Rapp')).toBeInTheDocument();
    expect(screen.getByText('4:03')).toBeInTheDocument();
  });
});
