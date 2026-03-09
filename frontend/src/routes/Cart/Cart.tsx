import styles from './Cart.module.css';
import Recommendations from '../../components/Recommendations/Recommendations';
import EmptyState from '../../components/EmptyState/EmptyState';
import CartList from '../../components/CartTable/CartTable';
import { useCart } from '../../hooks/useCart';

export default function CartPage() {
  const { cartItems } = useCart();
  const isEmpty = !cartItems || cartItems.length === 0;

  return (
    <section className={styles.cartPage}>
      <div className="container">
        <h1 className={styles.title}>Cart</h1>

        {isEmpty ? (
          <EmptyState text="Your cart is currently empty." />
        ) : (
          <CartList />
        )}

        <Recommendations />
      </div>
    </section>
  );
}
