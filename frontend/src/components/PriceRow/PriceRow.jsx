import styles from './PriceRow.module.css';

export default function PriceRow({ price }) {
  return (
    <div className={styles.priceRow} data-testid="price-row">
      <span className={styles.price}>{price}</span>
      <span className={styles.stock} aria-label="Availability: In stock">
        <span aria-hidden="true">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.1478 5.46042L7.14779 14.4604C7.09555 14.5127 7.03351 14.5542 6.96523 14.5825C6.89694 14.6108 6.82375 14.6254 6.74982 14.6254C6.6759 14.6254 6.60271 14.6108 6.53442 14.5825C6.46613 14.5542 6.4041 14.5127 6.35185 14.4604L2.41436 10.5229C2.30881 10.4174 2.24951 10.2742 2.24951 10.1249C2.24951 9.97568 2.30881 9.83253 2.41436 9.72698C2.5199 9.62143 2.66306 9.56213 2.81232 9.56213C2.96159 9.56213 3.10475 9.62143 3.21029 9.72698L6.74982 13.2672L15.3519 4.66448C15.4574 4.55893 15.6006 4.49963 15.7498 4.49963C15.8991 4.49963 16.0422 4.55893 16.1478 4.66448C16.2533 4.77003 16.3126 4.91318 16.3126 5.06245C16.3126 5.21171 16.2533 5.35487 16.1478 5.46042Z"
              fill="#338614"
            />
          </svg>
        </span>{' '}
        In stock
      </span>
    </div>
  );
}
