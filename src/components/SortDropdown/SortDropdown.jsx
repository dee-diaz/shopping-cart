import { useState, useEffect, useRef } from 'react';
import styles from './SortDropdown.module.css';

export default function SortDropdown() {
  const OPTIONS = {
    POPULAR: 'Popular',
    NEWEST: 'Newest',
    PRICE_LOW_TO_HIGH: 'Price: Low → High',
    PRICE_HIGH_TO_LOW: 'Price: High → Low',
  };

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(OPTIONS.POPULAR);
  const dropdownRef = useRef(null);

  function handleClick(option) {
    setSelectedOption(option);
    setIsOpen(false);
  }

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
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
            {Object.values(OPTIONS).map((option, index) => (
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
