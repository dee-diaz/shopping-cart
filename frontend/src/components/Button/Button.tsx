import styles from './Button.module.css';

interface ButtonProps {
  label: string;
  icon?: React.ReactNode;
  size?: 'sm';
  isDisabled?: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Button({
  label,
  icon,
  size,
  isDisabled,
  onClick,
}: ButtonProps) {
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
