import { createContext, useState } from 'react';
import { SORT_TYPE } from '../constants/constants';
import { Album } from '../types/album';

type SortType =
  | 'Popular'
  | 'Newest'
  | 'Price: Low → High'
  | 'Price: High → Low';

interface AlbumsContextType {
  albums: Album[];
  setAlbums: React.Dispatch<React.SetStateAction<Album[]>>;

  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;

  error: string | null;
  setError: React.Dispatch<React.SetStateAction<string | null>>;

  sortType: SortType;
  setSortType: React.Dispatch<React.SetStateAction<SortType>>;
}

interface Props {
  children: React.ReactNode;
}

// eslint-disable-next-line react-refresh/only-export-components
export const AlbumsContext = createContext<AlbumsContextType | null>(null);

export default function AlbumsContextProvider({ children }: Props) {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sortType, setSortType] = useState<SortType>(SORT_TYPE.POPULAR);

  const value: AlbumsContextType = {
    albums,
    setAlbums,
    loading,
    setLoading,
    error,
    setError,
    sortType,
    setSortType,
  };

  return (
    <AlbumsContext.Provider value={value}>{children}</AlbumsContext.Provider>
  );
}
