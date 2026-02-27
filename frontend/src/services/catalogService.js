import { catalog } from '../data/catalog';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';
const endpoint = '/albums/';
const url = API_URL + endpoint;

export async function fetchGenreCatalog(genre) {
  const albums = Object.values(catalog[genre]);

  try {
    const promises = albums.map(async (album) => {
      const res = await fetch(url + album.masterId);
      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
      }
      return res.json();
    });
    const results = await Promise.all(promises);
    return results;
  } catch (error) {
    console.error('Error fetching genre catalog:', error);
    throw error;
  }
}

export async function fetchFeatured() {
  const values = Object.values(catalog).flat();
  const featuredAlbums = values.filter((v) => v.featured === true);

  try {
    const promises = featuredAlbums.map(async (album) => {
      const res = await fetch(url + album.masterId);
      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
      }
      return res.json();
    });
    const results = await Promise.all(promises);
    return results;
  } catch (error) {
    console.error('Error fetching featured albums:', error);
    throw error;
  }
}
