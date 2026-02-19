import styles from './CardGrid.module.css';
import Card from '../Card/Card';

export default function CardGrid() {
  return (
    <div className={styles.cardGrid}>
      <Card
        albumTitle="Ritual Of Battle"
        albumArtist="Jedi Mind Tricks"
        price="29"
        coverImgUrl="https://i.discogs.com/my_Gd5nsGzyb6Dm5LgWor0duRe9Fbx0HFHPPIQwBAr8/rs:fit/g:sm/q:90/h:597/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEwOTE0/MjAtMTY0MTY4MzA3/OS02NTc1LmpwZWc.jpeg"
      />
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
