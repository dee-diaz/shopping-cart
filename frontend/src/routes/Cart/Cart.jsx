import styles from './Cart.module.css';
import Recommendations from '../../components/Recommendations/Recommendations';
import EmptyState from '../../components/EmptyState/EmptyState';
import CartList from '../../components/CartTable/CartTable';
import { CartContext } from '../../contexts/CartContext';
import { useContext } from 'react';

export default function CartPage() {
  const { cartItems } = useContext(CartContext);
  const isEmpty = !cartItems || cartItems.length === 0;

  return (
    <section className={styles.cartPage}>
      <div className="container">
        <h1 className={styles.title}>Cart</h1>

        {isEmpty ? (
          <EmptyState text="You cart is currently empty." />
        ) : (
          <CartList />
        )}

        <Recommendations />
      </div>
    </section>
  );
}
