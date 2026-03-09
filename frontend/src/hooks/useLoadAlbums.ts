import { useEffect, useState } from 'react';
import {
  fetchFeatured,
  fetchGenreCatalog,
  fetchAlbum,
} from '../services/catalogService';
import { useAlbums } from './useAlbums';
import { Album } from '../types/album';

export function useLoadAlbums(searchParams: URLSearchParams): void {
  const { setAlbums, setError, setLoading } = useAlbums();

  useEffect(() => {
  let cancelled = false;

  async function loadAlbums() {
    setLoading(true);

    const selectedGenres = searchParams.getAll('genre');

    try {
      if (selectedGenres.length !== 0) {
        const results: Album[][] = await Promise.all(
          selectedGenres.map((genre) => fetchGenreCatalog(genre)),
        );

        if (!cancelled) {
          setAlbums(results.flat());
        }
      } else {
        const data = await fetchFeatured();

        if (!cancelled) {
          setAlbums(data);
        }
      }
    } catch (error) {
      if (!cancelled) {
        setError(error instanceof Error ? error.message : 'Unknown error');
      }
    } finally {
      if (!cancelled) {
        setLoading(false);
      }
    }
  }

  loadAlbums();

  return () => {
    cancelled = true;
  };
}, [searchParams, setAlbums, setError, setLoading]);
}

interface UseLoadAlbumReturn {
  albumData: Album | null;
  error: string | null;
  loading: boolean;
}

export function useLoadAlbum(id: number): UseLoadAlbumReturn {
  const [albumData, setAlbumData] = useState<Album | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadAlbum() {
      setLoading(true);

      try {
        const data = await fetchAlbum(id);
        setAlbumData(data);
      } catch (error) {
        setError(error instanceof Error ? error.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    }

    loadAlbum();
  }, [id]);

  return { albumData, error, loading };
}
