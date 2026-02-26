import { describe, it, expect, vi } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router';
import Card from './Card';

describe('Card', () => {
  it('renders with correct album info', () => {
    const title = 'Ritual Of Battle';
    const artist = 'Army Of The Pharaohs';
    const price = '$29';

    render(<Card albumTitle={title} albumArtist={artist} price={price} />, {
      wrapper: MemoryRouter,
    });
    const card = screen.getByRole('article');

    expect(
      within(card).getByRole('heading', { name: title }),
    ).toBeInTheDocument();

    expect(within(card).getByText(artist)).toBeInTheDocument();

    expect(within(card).getByText(price)).toBeInTheDocument();
  });

  it('renders cover image', () => {
    const title = 'Ritual Of Battle';
    const artist = 'Army Of The Pharaohs';
    const altText = `${title} by ${artist} album cover`;
    const imgUrl =
      'https://i.discogs.com/my_Gd5nsGzyb6Dm5LgWor0duRe9Fbx0HFHPPIQwBAr8/rs:fit/g:sm/q:90/h:597/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEwOTE0/MjAtMTY0MTY4MzA3/OS02NTc1LmpwZWc.jpeg';

    render(
      <Card albumTitle={title} albumArtist={artist} coverImgUrl={imgUrl} />,
      {
        wrapper: MemoryRouter,
      },
    );
    const card = screen.getByRole('article');
    const image = within(card).getByRole('img');

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', imgUrl);
    expect(image).toHaveAttribute('alt', altText);
  });

  it('renders placeholder image if there is no image', () => {
    const title = 'Ritual Of Battle';
    const artist = 'Army Of The Pharaohs';

    render(<Card albumTitle={title} albumArtist={artist} />, {
      wrapper: MemoryRouter,
    });
    const card = screen.getByRole('article');
    const image = within(card).getByRole('img');

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/images/album-placeholder.webp');
  });

  it('links to product page', () => {
    render(<Card />, {
      wrapper: MemoryRouter,
    });
    const card = screen.getByRole('article');
    const links = within(card).getAllByRole('link');
    expect(links).toHaveLength(2);
    links.forEach((link) => expect(link).toHaveAttribute('href', '/product'));
  });

  it('renders "Add to cart" button with SVG icon', () => {
    render(<Card />, { wrapper: MemoryRouter });
    const card = screen.getByRole('article');
    const button = within(card).getByRole('button', { name: /add/i });
    expect(button.querySelector('svg')).toBeInTheDocument();
  });

  it('calls onClick on button click', async () => {
    const user = userEvent.setup();
    const mockFn = vi.fn();

    render(<Card onAddToCart={mockFn} />, { wrapper: MemoryRouter });
    const card = screen.getByRole('article');
    const button = within(card).getByRole('button', { name: /add/i });

    await user.click(button);

    expect(mockFn).toHaveBeenCalled();
  });
});
