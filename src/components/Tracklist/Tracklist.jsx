import styles from './Tracklist.module.css';

export default function Tracklist({ tracklist }) {
  return (
    <section aria-labelledby="tracklist-title">
      <h2 id="tracklist-title" className={styles.title}>
        Tracklist
      </h2>
      <ul className={styles.list} aria-label="Album tracklist">
        {tracklist &&
          tracklist.map((track) => {
            return (
              <TracklistItem
                key={track.title}
                position={track.position}
                title={track.title}
                duration={track.duration}
              />
            );
          })}
      </ul>
    </section>
  );
}

export function TracklistItem({ position, title, duration }) {
  return (
    <li className={styles.listItem}>
      <div className={styles.wrapper}>
        <span>{position}</span>
        <span>{title}</span>
      </div>
      <span>{duration}</span>
    </li>
  );
}
