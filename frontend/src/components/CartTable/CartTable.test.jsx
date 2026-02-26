import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import CartList, { CartItem, Summary } from './CartTable';

const mockCartProducts = [
  {
    id: 1,
    title: 'Ritual Of Battle',
    artist: 'Jedi Mind Tricks',
    price: '26',
    quantity: 1,
    coverImgUrl:
      'https://i.discogs.com/my_Gd5nsGzyb6Dm5LgWor0duRe9Fbx0HFHPPIQwBAr8/rs:fit/g:sm/q:90/h:597/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEwOTE0/MjAtMTY0MTY4MzA3/OS02NTc1LmpwZWc.jpeg',
  },
  {
    id: 2,
    title: 'Madvillainy',
    artist: 'Madvillain',
    price: '29',
    quantity: 2,
    coverImgUrl:
      'https://i.discogs.com/nqGrV-wr5XpxWHm39LPr164FSBTgRDMDDpkNzGpEv-Q/rs:fit/g:sm/q:90/h:597/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI0Mjc4/NS0xNjYyMjA3MDQx/LTc0NjcuanBlZw.jpeg',
  },
];

describe('CartList', () => {
  it('is present in the document', () => {
    render(<CartList cartProducts={mockCartProducts} />, {
      wrapper: MemoryRouter,
    });
    const cartList = screen.getByRole('list', { name: /Cart items/i });
    expect(cartList).toBeInTheDocument();
  });

  it('renders the correct number of cart items', () => {
    render(<CartList cartProducts={mockCartProducts} />, {
      wrapper: MemoryRouter,
    });

    const cartItems = screen.getAllByRole('listitem');
    expect(cartItems).toHaveLength(2);
  });

  it('renders order summary', () => {
    render(<CartList cartProducts={mockCartProducts} />, {
      wrapper: MemoryRouter,
    });

    const summary = screen.getByRole('region', { name: /order summary/i });
    expect(summary).toBeInTheDocument();
  });
});

describe('CartItem', () => {
  it('is present in the document', () => {
    render(<CartItem />, { wrapper: MemoryRouter });
    const cartItem = screen.getByRole('listitem');
    expect(cartItem).toBeInTheDocument();
  });

  it('renders cart item image correctly', () => {
    const data = mockCartProducts[0];
    render(
      <CartItem
        img={data.coverImgUrl}
        title={data.title}
        artist={data.artist}
        price={data.price}
        quantity={data.quantity}
      />,
      { wrapper: MemoryRouter },
    );

    const img = screen.getByRole('img');

    expect(img).toHaveAttribute('src', data.coverImgUrl);
    expect(img).toHaveAccessibleName('Ritual Of Battle album cover');
  });

  it('renders album placeholder if no image is passed', () => {
    render(<CartItem />, { wrapper: MemoryRouter });

    const img = screen.getByRole('img');

    expect(img).toHaveAttribute('src', '/images/album-placeholder.webp');
  });

  it('renders cart item data', () => {
    const data = mockCartProducts[0];
    render(
      <CartItem
        img={data.coverImgUrl}
        title={data.title}
        artist={data.artist}
        price={data.price}
        quantity={data.quantity}
      />,
      { wrapper: MemoryRouter },
    );

    expect(screen.getByText('Ritual Of Battle')).toBeInTheDocument();
    expect(screen.getByText('Jedi Mind Tricks')).toBeInTheDocument();
    expect(screen.getByText('$26')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
  });
});

describe('Summary', () => {
  it('is present in the document', () => {
    render(<Summary />, { wrapper: MemoryRouter });
    const summary = screen.getByRole('region', { name: /order summary/i });
    expect(summary).toBeInTheDocument();
  });
});
