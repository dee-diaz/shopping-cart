import styles from './Cart.module.css';
import Recommendations from '../../components/Recommendations/Recommendations';
import EmptyState from '../../components/EmptyState/EmptyState';
import CartTable from '../../components/CartTable/CartTable';

const cartProducts = [
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

export default function CartPage() {
  const isEmpty = !cartProducts || cartProducts.length === 0;

  return (
    <section className={styles.cartPage}>
      <div className="container">
        <h1 className={styles.title}>Cart</h1>

        {isEmpty ? (
          <EmptyState text="You cart is currently empty." />
        ) : (
          <CartTable cartProducts={cartProducts} />
        )}

        <Recommendations />
      </div>
    </section>
  );
}
