export interface Album {
  id: number;
  lowest_price: number;
  images: {
    uri: string;
  }[];
  genres: string[];
  styles?: string[];
  year?: number;
  tracklist?: {
    title: string;
    position?: string;
    duration?: string;
  }[];
  artists: {
    name: string;
    thumbnail_url?: string;
  }[];
  title: string;
}