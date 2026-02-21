import styles from './ArtistHeader.module.css';

export default function ArtistHeader({ artistImg, artistName, albumTitle }) {
  return (
    <div className={styles.artistHeader}>
      <div className={styles.wrapper}>
        <div className={styles.artistImg}>
          <img src={artistImg} alt={artistName} />
        </div>
        <span className={styles.artistName}>{artistName}</span>
      </div>
      <h1 className={styles.albumTitle}>{albumTitle}</h1>
    </div>
  );
}
