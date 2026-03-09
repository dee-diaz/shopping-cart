import { useContext } from "react";
import { AlbumsContext } from "../contexts/AlbumsContext";

export function useAlbums() {
  const context = useContext(AlbumsContext);

  if (!context) {
    throw new Error('useAlbums must be used inside AlbumsContextProvider');
  }

  return context;
}