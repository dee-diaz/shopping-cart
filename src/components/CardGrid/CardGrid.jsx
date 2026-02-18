import styles from './CardGrid.module.css';
import Card from '../Card/Card';

export default function CardGrid() {
  return (
    <div className={styles.cardGrid}>
      <Card albumTitle="MM..Food" albumArtist="MF Doom" price="29" />
      <Card albumTitle="MM..Food" albumArtist="MF Doom" price="29" />
      <Card albumTitle="MM..Food" albumArtist="MF Doom" price="29" />
      <Card albumTitle="MM..Food" albumArtist="MF Doom" price="29" />
      <Card albumTitle="MM..Food" albumArtist="MF Doom" price="29" />
      <Card albumTitle="MM..Food" albumArtist="MF Doom" price="29" />
      <Card albumTitle="MM..Food" albumArtist="MF Doom" price="29" />
      <Card albumTitle="MM..Food" albumArtist="MF Doom" price="29" />
      <Card albumTitle="MM..Food" albumArtist="MF Doom" price="29" />
    </div>
  );
}
