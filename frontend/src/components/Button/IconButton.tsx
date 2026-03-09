import styles from './Button.module.css';

interface IconButtonProps {
  icon: React.ReactNode;
  onClick: () => void;
  ariaLabel: string;
}

export default function IconButton({
  icon,
  onClick,
  ariaLabel,
}: IconButtonProps) {
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
