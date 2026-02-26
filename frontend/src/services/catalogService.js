import { catalog, GENRES } from '../data/catalog';

const headers = new Headers();
headers.append('User-Agent', 'VinylShop/1.0');

const options = {
  method: 'GET',
  headers: headers,
};

const baseUrl = 'https://api.discogs.com/';
const endpoint = 'masters/';
const url = baseUrl + endpoint;

export async function fetchGenreCatalog(genre) {
  const albums = Object.values(catalog[genre]);

  try {
    const promises = albums.map((album) =>
      fetch(url + album.masterId, options),
    );
    const results = await Promise.all(promises);
    console.log(results);
  } catch (error) {
    console.log(error);
  }
}

export async function fetchFeatured() {
  const values = Object.values(catalog).flat();
  const featuredAlbums = values.filter((v) => v.featured === true);

  try {
    const promises = featuredAlbums.map((album) =>
      fetch(url + album.masterId, options),
    );
    const results = await Promise.all(promises);
    console.log(results);
  } catch (error) {
    console.log(error);
  }
}
