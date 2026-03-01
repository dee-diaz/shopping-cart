import { createContext, useState } from 'react';
import { SORT_TYPE } from '../constants/constants';

// eslint-disable-next-line react-refresh/only-export-components
export const AlbumsContext = createContext(null);

export default function AlbumsContextProvider({ children }) {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [sortType, setSortType] = useState(SORT_TYPE.POPULAR);

  const value = {
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
