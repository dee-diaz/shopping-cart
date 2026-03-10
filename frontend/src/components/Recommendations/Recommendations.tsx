import styles from './Recommendations.module.css';
import CardGrid from '../CardGrid/CardGrid';
import { Album } from '../../types/album';

const defaultRecommendations: Album[] = [
  {
    id: 24047,
    genres: ['Rock'],
    title: 'Abbey Road',
    artists: [{ name: 'The Beatles' }],
    images: [
      {
        uri: 'https://i.discogs.com/M2yc5OJZPdVoDm2_UlRRXuDlDguamLLSdnbziNmZoQI/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI2MDc0/MjQtMTYzMDYwMTA4/Ny0xMTk5LmpwZWc.jpeg',
      },
    ],
    lowest_price: 0.62,
  },
  {
    id: 23683,
    genres: ['Electronic'],
    title: 'Mezzanine',
    artists: [{ name: 'Massive Attack' }],
    images: [
      {
        uri: 'https://i.discogs.com/t2cOvgvzOqKzSFab55cHspWHl5IgiVpbPtLgyzwYmxI/rs:fit/g:sm/q:90/h:596/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTY1MzAt/MTYxNTMwMzUzMi01/NDI0LmpwZWc.jpeg',
      },
    ],
    lowest_price: 0.25,
  },
  {
    id: 57970,
    genres: ['Hip-Hop'],
    title: 'Ready To Die',
    artists: [{ name: 'Notorious B.I.G' }],
    images: [
      {
        uri: 'https://i.discogs.com/yb0r6p94nVc_xU2vLsGWDEwiZfYznIBWVRUgGeZ_Ljw/rs:fit/g:sm/q:90/h:593/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTg0ODky/MDktMTQ2MjYyNzU5/MC03NTQwLmpwZWc.jpeg',
      },
    ],
    lowest_price: 1.13,
  },
  {
    id: 34081,
    genres: ['Jazz'],
    title: 'Time Out',
    artists: [{ name: 'The Dave Brubeck Quartet' }],
    images: [
      {
        uri: 'https://i.discogs.com/tz4tsa5_pTztKx_mWvRvKp7jZ2YyztvF69PTEmVFlLg/rs:fit/g:sm/q:90/h:600/w:591/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEyMzg0/NTAyLTE1NjQ4NDQ1/MTMtMTEwNi5qcGVn.jpeg',
      },
    ],
    lowest_price: 0.63,
  },
];

export default function Recommendations() {
  return (
    <section
      aria-labelledby="recommendations-title"
      className={styles.recommendations}
    >
      <h2 id="recommendations-title" className={styles.title}>
        Maybe you’d like
      </h2>
      <CardGrid
        albums={defaultRecommendations}
        variant="four-cols"
        type="recommendations"
      />
    </section>
  );
}
