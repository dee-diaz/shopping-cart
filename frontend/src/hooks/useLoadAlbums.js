import { useEffect, useContext } from 'react';
import { fetchFeatured, fetchGenreCatalog } from '../services/catalogService';
import { AlbumsContext } from '../contexts/AlbumsContext';

export function useLoadAlbums(searchParams) {
  const { setAlbums, setError, setLoading } = useContext(AlbumsContext);

  useEffect(() => {
    let loadAlbums;
    setLoading(true);

    const selectedGenres = searchParams.getAll('genre');

    if (selectedGenres.length !== 0) {
      loadAlbums = async () => {
        try {
          const results = await Promise.all(
            selectedGenres.map((genre) => fetchGenreCatalog(genre)),
          );
          setAlbums(results.flat());
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      };
    } else {
      loadAlbums = async () => {
        try {
          const data = await fetchFeatured();
          setAlbums(data);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      };
    }

    loadAlbums();
  }, [searchParams, setAlbums, setError, setLoading]);
}
