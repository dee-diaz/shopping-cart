import { useEffect, useContext, useState } from 'react';
import {
  fetchFeatured,
  fetchGenreCatalog,
  fetchAlbum,
} from '../services/catalogService';
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

export function useLoadAlbum(id) {
  const [albumData, setAlbumData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadAlbum() {
      setLoading(true);

      try {
        const data = await fetchAlbum(id);
        setAlbumData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    loadAlbum();
  }, [id]);

  return { albumData, error, loading };
}
