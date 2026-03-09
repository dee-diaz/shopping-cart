import styles from './ErrorMessage.module.css';

interface ErrorMessageProps {
  message: string;
}

export default function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div role="alert" className={styles.error}>
      <h2 className={styles.title}>Whoops, something went wrong</h2>
      <p className={styles.text}>{message}</p>
    </div>
  );
}
