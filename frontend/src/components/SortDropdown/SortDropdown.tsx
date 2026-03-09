import { useState, useEffect, useRef } from 'react';
import styles from './SortDropdown.module.css';
import { SORT_TYPE } from '../../constants/constants';
import { useAlbums } from '../../hooks/useAlbums';
import { SortType } from '../../types/sortType';

export default function SortDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<SortType>(
    SORT_TYPE.POPULAR,
  );
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const { setSortType } = useAlbums();

  function handleClick(option: SortType): void {
    setSortType(option);
    setSelectedOption(option);
    setIsOpen(false);
  }

  useEffect(() => {
    function handleClickOutside(e: MouseEvent | KeyboardEvent) {
      if (
        (e.type === 'keydown' && (e as KeyboardEvent).key === 'Escape') ||
        (dropdownRef.current && !dropdownRef.current.contains(e.target as Node))
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className={styles.dropdown} ref={dropdownRef}>
      <button
        className={styles.triggerBtn}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label="Sort options"
      >
        {selectedOption}
        <svg
          className={styles.icon}
          viewBox="0 0 24 24"
          aria-hidden="true"
          style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
        >
          <path d="M7 10l5 5 5-5z" />
        </svg>
      </button>

      {isOpen && (
        <div className={styles.menu} role="listbox" aria-label="Sort by">
          <div className={styles.label}>Sort by</div>

          <ul className={styles.list}>
            {Object.values(SORT_TYPE).map((option, index) => (
              <button
                key={index}
                className={`${styles.option} ${
                  selectedOption === option ? styles.selected : ''
                }`}
                role="option"
                aria-selected={selectedOption === option}
                onClick={() => handleClick(option)}
              >
                {option}
                {selectedOption === option && (
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                )}
              </button>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
