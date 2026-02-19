import styles from './Home.module.css';
import SortDropdown from '../../components/SortDropdown/SortDropdown';
import FilterSidebar from '../../components/FilterSidebar/FilterSidebar';
import CardGrid from '../../components/CardGrid/CardGrid';

const albums = [
  {
    id: 1,
    title: 'Ritual Of Battle',
    artist: 'Jedi Mind Tricks',
    price: '26',
    coverImgUrl:
      'https://i.discogs.com/my_Gd5nsGzyb6Dm5LgWor0duRe9Fbx0HFHPPIQwBAr8/rs:fit/g:sm/q:90/h:597/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEwOTE0/MjAtMTY0MTY4MzA3/OS02NTc1LmpwZWc.jpeg',
  },
  {
    id: 2,
    title: 'Madvillainy',
    artist: 'Madvillain',
    price: '29',
    coverImgUrl: '',
  },
  { id: 3, title: 'MM..Food', artist: 'MF Doom', price: '25', coverImgUrl: '' },
  { id: 4, title: 'Illmatic', artist: 'Nas', price: '27', coverImgUrl: '' },
  {
    id: 5,
    title: 'Ready To Die',
    artist: 'The Notorious B.I.G.',
    price: '28',
    coverImgUrl: '',
  },
  { id: 6, title: 'ATLiens', artist: 'OutKast', price: '24', coverImgUrl: '' },
  {
    id: 7,
    title: 'Supreme Clientele',
    artist: 'Ghostface Killah',
    price: '23',
    coverImgUrl: '',
  },
  { id: 8, title: 'Aquemini', artist: 'OutKast', price: '27', coverImgUrl: '' },
  {
    id: 9,
    title: 'Only Built 4 Cuban Linx...',
    artist: 'Raekwon',
    price: '30',
    coverImgUrl: '',
  },
];

export default function HomePage() {
  return (
    <div className={`container ${styles.container}`}>
      <h1 className={styles.heading}>Vinyl catalog</h1>
      <SortDropdown />
      <div className={styles.wrapper}>
        <FilterSidebar />
        <CardGrid albums={albums}></CardGrid>
      </div>
    </div>
  );
}
