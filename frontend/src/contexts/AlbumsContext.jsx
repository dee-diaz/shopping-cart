import { createContext, useState } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const AlbumsContext = createContext(null);

export default function AlbumsContextProvider({ children }) {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <AlbumsContext.Provider
      value={{ albums, setAlbums, loading, setLoading, error, setError }}
    >
      {children}
    </AlbumsContext.Provider>
  );
}
