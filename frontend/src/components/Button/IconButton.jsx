import styles from './Button.module.css';

export default function IconButton({ icon, onClick, ariaLabel }) {
  return (
    <button
      aria-label={ariaLabel}
      className={styles.iconBtn}
      type="button"
      onClick={onClick}
    >
      {icon}
    </button>
  );
}
