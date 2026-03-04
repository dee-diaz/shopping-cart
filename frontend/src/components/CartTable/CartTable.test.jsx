import { describe, it, expect, vi } from 'vitest';
import { screen, within } from '@testing-library/react';
import CartList, { CartItem, Summary } from './CartTable';
import { renderWithProviders } from '../../test-utils';
import userEvent from '@testing-library/user-event';

const mockCartItems = [
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
    renderWithProviders(<CartList />, { cartItems: mockCartItems });
    const cartList = screen.getByRole('list', { name: /Cart items/i });
    expect(cartList).toBeInTheDocument();
  });

  it('renders the correct number of cart items', () => {
    renderWithProviders(<CartList />, { cartItems: mockCartItems });
    const list = screen.getByRole('list', { name: /cart items/i });
    const items = within(list).getAllByRole('listitem');
    expect(items).toHaveLength(2);
  });

  it('renders order summary', () => {
    renderWithProviders(<CartList />, { cartItems: mockCartItems });
    const summary = screen.getByRole('region', { name: /order summary/i });
    expect(summary).toBeInTheDocument();
  });
});

describe('CartItem', () => {
  function renderCartItem(overrides = {}) {
    return renderWithProviders(
      <CartItem
        albumId={mockCartItems[0].id}
        img={mockCartItems[0].coverImgUrl}
        title={mockCartItems[0].title}
        artist={mockCartItems[0].artist}
        price={mockCartItems[0].price}
        quantity={mockCartItems[0].quantity}
        onClick={vi.fn()}
        {...overrides}
      />,
    );
  }

  it('is present in the document', () => {
    renderCartItem();
    const cartItem = screen.getByRole('listitem');
    expect(cartItem).toBeInTheDocument();
  });

  it('renders cart item image correctly', () => {
    renderCartItem();

    const img = screen.getByRole('img');

    expect(img).toHaveAttribute('src', mockCartItems[0].coverImgUrl);
    expect(img).toHaveAccessibleName('Ritual Of Battle album cover');
  });

  it('renders album placeholder if no image is passed', () => {
    renderCartItem({ img: undefined });

    const img = screen.getByRole('img');

    expect(img).toHaveAttribute('src', '/images/album-placeholder.webp');
  });

  it('renders cart item data', () => {
    renderCartItem();

    expect(screen.getByText('Ritual Of Battle')).toBeInTheDocument();
    expect(screen.getByText('Jedi Mind Tricks')).toBeInTheDocument();
    expect(
      screen.getByLabelText('Total for Ritual Of Battle: 26 dollars'),
    ).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('calls onClick when remove button is clicked', async () => {
    const user = userEvent.setup();
    const cbFn = vi.fn();

    renderCartItem({ onClick: cbFn });

    const deleteBtn = screen.getByRole('button', { name: /remove/i });

    await user.click(deleteBtn);

    expect(cbFn).toHaveBeenCalledTimes(1);
  });
});

describe('Summary', () => {
  it('is present in the document', () => {
    renderWithProviders(<Summary total={59} />);
    const summary = screen.getByRole('region', { name: /order summary/i });
    expect(summary).toBeInTheDocument();
  });
});
