import { useSearchParams } from 'react-router';

export function useGenreFilters() {
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedGenres = searchParams.getAll('genre');

  function toggleGenre(value, checked) {
    const params = new URLSearchParams(searchParams);
    const genres = params.getAll('genre');

    if (checked) {
      params.append('genre', value);
    } else {
      params.delete('genre');
      genres
        .filter((g) => g !== value)
        .forEach((g) => params.append('genre', g));
    }

    setSearchParams(params);
  }

  return {
    searchParams,
    selectedGenres,
    toggleGenre,
  };
}
