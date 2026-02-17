import styles from './Button.module.css';

export default function Button({ label, icon, onClick }) {
  return (
    <button className={styles.btnPrimary} onClick={onClick}>
      {label}
      {icon && <span className={styles.icon}>{icon}</span>}
    </button>
  );
}
