import styles from './ProductMeta.module.css';

export default function ProductMeta({ year, genre, subgenres }) {
  return (
    <dl className={styles.productMeta}>
      <div className={styles.row}>
        <dt>Release year:</dt>
        <dd>{year}</dd>
      </div>
      <div className={styles.row}>
        <dt>Genre:</dt>
        <dd>{genre}</dd>
      </div>
      <div className={styles.row}>
        <dt>Style:</dt>
        <dd>{subgenres}</dd>
      </div>
    </dl>
  );
}
