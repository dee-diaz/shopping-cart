import styles from './Button.module.css';

export default function Button({ label, icon, size, isDisabled, onClick }) {
  const classes = [styles.btnPrimary, size === 'sm' && styles.sm]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={classes} disabled={isDisabled} onClick={onClick}>
      {label}
      {icon && <span className={styles.icon}>{icon}</span>}
    </button>
  );
}
