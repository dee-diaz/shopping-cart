import styles from './Recommendations.module.css';
import CardGrid from '../CardGrid/CardGrid';

const mockRecommendations = [
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

export default function Recommendations() {
  return (
    <section
      aria-labelledby="recommendations-title"
      className={styles.recommendations}
    >
      <h2 id="recommendations-title" className={styles.title}>
        Maybe you’d like
      </h2>
      <CardGrid albums={mockRecommendations} variant="four-cols" />
    </section>
  );
}
