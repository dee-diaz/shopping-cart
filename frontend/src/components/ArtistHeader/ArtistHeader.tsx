import styles from './ArtistHeader.module.css';

interface ArtistHeaderProps {
  artistImg: string;
  artistName: string;
  albumTitle: string;
}

export default function ArtistHeader({
  artistImg,
  artistName,
  albumTitle,
}: ArtistHeaderProps) {
  return (
    <header className={styles.artistHeader}>
      <div className={styles.wrapper}>
        <div className={styles.artistImg}>
          <img src={artistImg} alt={artistName} />
        </div>
        <span className={styles.artistName}>{artistName}</span>
      </div>
      <h1 className={styles.albumTitle}>{albumTitle}</h1>
    </header>
  );
}
