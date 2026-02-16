import styles from './Button.module.css';

export default function Button({ label, onClick }) {
  return (
    <button className={styles.btnPrimary} onClick={onClick}>
      {label}
    </button>
  );
}
