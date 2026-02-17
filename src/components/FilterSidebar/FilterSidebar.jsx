import styles from './FilterSidebar.module.css';
import { useState } from 'react';
import Button from '../Button/Button';

const isMobile = window.innerWidth < 992;

function FilterSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedGenres, setSelectedGenres] = useState([]);

  function handleGenreChange(e) {
    let newArr;

    if (selectedGenres.includes(e.target.value) && !e.target.checked) {
      newArr = selectedGenres.filter((genre) => genre !== e.target.value);
    } else {
      newArr = [...selectedGenres, e.target.value];
    }

    setSelectedGenres(newArr);
  }

  return (
    <>
      {isMobile && !isOpen && <FilterIcon onClick={() => setIsOpen(true)} />}
      {(isMobile ? isOpen : true) && (
        <div className={styles.filterSidebar}>
          {isMobile && <ModalCloseButton onClick={() => setIsOpen(false)} />}
          <GenreFilter
            selectedGenres={selectedGenres}
            onChange={handleGenreChange}
          />
          <PriceFilter />
        </div>
      )}
    </>
  );
}

function GenreFilter({ selectedGenres, onChange }) {
  const genres = [
    'Alternative',
    'Electronic',
    'Hip Hop',
    'House',
    'Jazz',
    'Latin',
    'Pop',
    'R&B',
    'Rock',
    'Techno',
  ];

  return (
    <div className={styles.genreFilter}>
      <h3>Genre</h3>
      <div className={styles.checkboxes}>
        {genres.map((genre) => (
          <label key={genre} className={styles.checkboxLabel}>
            <input
              type="checkbox"
              value={genre}
              checked={selectedGenres.includes(genre)}
              onChange={onChange}
            />
            <span>{genre}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

function PriceFilter() {
  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);

  return (
    <div className={styles.priceFilter}>
      <h3>Price</h3>

      <div className={styles.priceInputs}>
        <input
          type="number"
          placeholder="min"
          value={minPrice ? minPrice : ''}
          onChange={(e) => setMinPrice(e.target.value)}
        />
        <input
          type="number"
          placeholder="max"
          value={maxPrice ? maxPrice : ''}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>
    </div>
  );
}

export function FilterIcon({ onClick }) {
  return (
    <button className={styles.toggleBtn} type="button" onClick={onClick}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.25 12H8.895M4.534 12H2.75M4.534 12C4.534 11.4218 4.76368 10.8673 5.17251 10.4585C5.58134 10.0497 6.13583 9.82 6.714 9.82C7.29217 9.82 7.84666 10.0497 8.25549 10.4585C8.66432 10.8673 8.894 11.4218 8.894 12C8.894 12.5782 8.66432 13.1327 8.25549 13.5415C7.84666 13.9503 7.29217 14.18 6.714 14.18C6.13583 14.18 5.58134 13.9503 5.17251 13.5415C4.76368 13.1327 4.534 12.5782 4.534 12ZM21.25 18.607H15.502M15.502 18.607C15.502 19.1853 15.2718 19.7404 14.8628 20.1493C14.4539 20.5583 13.8993 20.788 13.321 20.788C12.7428 20.788 12.1883 20.5573 11.7795 20.1485C11.3707 19.7397 11.141 19.1852 11.141 18.607M15.502 18.607C15.502 18.0287 15.2718 17.4746 14.8628 17.0656C14.4539 16.6567 13.8993 16.427 13.321 16.427C12.7428 16.427 12.1883 16.6567 11.7795 17.0655C11.3707 17.4743 11.141 18.0288 11.141 18.607M11.141 18.607H2.75M21.25 5.393H18.145M13.784 5.393H2.75M13.784 5.393C13.784 4.81483 14.0137 4.26033 14.4225 3.8515C14.8313 3.44268 15.3858 3.213 15.964 3.213C16.2503 3.213 16.5338 3.26938 16.7983 3.37894C17.0627 3.4885 17.3031 3.64907 17.5055 3.8515C17.7079 4.05394 17.8685 4.29426 17.9781 4.55875C18.0876 4.82324 18.144 5.10672 18.144 5.393C18.144 5.67928 18.0876 5.96276 17.9781 6.22725C17.8685 6.49174 17.7079 6.73206 17.5055 6.93449C17.3031 7.13692 17.0627 7.2975 16.7983 7.40705C16.5338 7.51661 16.2503 7.573 15.964 7.573C15.3858 7.573 14.8313 7.34332 14.4225 6.93449C14.0137 6.52566 13.784 5.97117 13.784 5.393Z"
          stroke="black"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
        />
      </svg>
    </button>
  );
}

function ModalCloseButton({ onClick }) {
  return (
    <button type="button" onClick={onClick} className={styles.closeBtn}>
      <svg viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M17.7075 9.7075L14.4138 13L17.7075 16.2925C17.8004 16.3854 17.8741 16.4957 17.9244 16.6171C17.9747 16.7385 18.0006 16.8686 18.0006 17C18.0006 17.1314 17.9747 17.2615 17.9244 17.3829C17.8741 17.5043 17.8004 17.6146 17.7075 17.7075C17.6146 17.8004 17.5043 17.8741 17.3829 17.9244C17.2615 17.9747 17.1314 18.0006 17 18.0006C16.8686 18.0006 16.7385 17.9747 16.6171 17.9244C16.4957 17.8741 16.3854 17.8004 16.2925 17.7075L13 14.4137L9.70751 17.7075C9.6146 17.8004 9.5043 17.8741 9.3829 17.9244C9.26151 17.9747 9.1314 18.0006 9.00001 18.0006C8.86861 18.0006 8.7385 17.9747 8.61711 17.9244C8.49572 17.8741 8.38542 17.8004 8.29251 17.7075C8.1996 17.6146 8.12589 17.5043 8.07561 17.3829C8.02533 17.2615 7.99945 17.1314 7.99945 17C7.99945 16.8686 8.02533 16.7385 8.07561 16.6171C8.12589 16.4957 8.1996 16.3854 8.29251 16.2925L11.5863 13L8.29251 9.7075C8.10486 9.51986 7.99945 9.26536 7.99945 9C7.99945 8.73464 8.10486 8.48014 8.29251 8.2925C8.48015 8.10486 8.73464 7.99944 9.00001 7.99944C9.26537 7.99944 9.51987 8.10486 9.70751 8.2925L13 11.5863L16.2925 8.2925C16.3854 8.19959 16.4957 8.12589 16.6171 8.07561C16.7385 8.02532 16.8686 7.99944 17 7.99944C17.1314 7.99944 17.2615 8.02532 17.3829 8.07561C17.5043 8.12589 17.6146 8.19959 17.7075 8.2925C17.8004 8.38541 17.8741 8.49571 17.9244 8.6171C17.9747 8.7385 18.0006 8.86861 18.0006 9C18.0006 9.13139 17.9747 9.2615 17.9244 9.3829C17.8741 9.50429 17.8004 9.61459 17.7075 9.7075ZM26 13C26 15.5712 25.2376 18.0846 23.8091 20.2224C22.3807 22.3603 20.3503 24.0265 17.9749 25.0104C15.5995 25.9944 12.9856 26.2518 10.4638 25.7502C7.94208 25.2486 5.6257 24.0105 3.80762 22.1924C1.98953 20.3743 0.751405 18.0579 0.249797 15.5362C-0.251811 13.0144 0.0056327 10.4006 0.989572 8.02512C1.97351 5.64968 3.63975 3.61935 5.77759 2.1909C7.91543 0.762437 10.4288 0 13 0C16.4467 0.00363977 19.7512 1.37445 22.1884 3.81163C24.6256 6.24882 25.9964 9.5533 26 13ZM24 13C24 10.8244 23.3549 8.69767 22.1462 6.88873C20.9375 5.07979 19.2195 3.66989 17.2095 2.83733C15.1995 2.00476 12.9878 1.78692 10.854 2.21136C8.72022 2.6358 6.76021 3.68345 5.22183 5.22183C3.68345 6.7602 2.63581 8.72022 2.21137 10.854C1.78693 12.9878 2.00477 15.1995 2.83733 17.2095C3.66989 19.2195 5.07979 20.9375 6.88873 22.1462C8.69767 23.3549 10.8244 24 13 24C15.9164 23.9967 18.7123 22.8367 20.7745 20.7745C22.8367 18.7123 23.9967 15.9164 24 13Z"
          fill="#1A1A1A"
        />
      </svg>
    </button>
  );
}

export default FilterSidebar;
