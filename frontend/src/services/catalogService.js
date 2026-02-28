import { catalog } from '../data/catalog';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';
const endpoint = '/albums/';
const url = API_URL + endpoint;

async function fetchAlbum(masterId) {
  const res = await fetch(url + masterId);
  if (!res.ok) {
    throw new Error(`HTTP ${res.status}`);
  }
  return res.json();
}

export function fetchGenreCatalog(genre) {
  const albums = Object.values(catalog[genre]);
  return Promise.all(albums.map((album) => fetchAlbum(album.masterId)));
}

export function fetchFeatured() {
  const featuredAlbums = Object.values(catalog)
    .flat()
    .filter((v) => v.featured === true);

  return Promise.all(featuredAlbums.map((album) => fetchAlbum(album.masterId)));
}
