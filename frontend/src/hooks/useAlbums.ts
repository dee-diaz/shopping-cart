import { useContext } from "react";
import { AlbumsContext } from "../contexts/AlbumsContext";

export function useAlbums() {
  const context = useContext(AlbumsContext);

  if (!context) {
    throw new Error('useCart must be used inside CartContextProvider');
  }

  return context;
}