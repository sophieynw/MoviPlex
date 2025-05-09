export interface Movie {
  poster: string;
  title: string;
  genre: string;
  duration: string;
  rating: string;
}

export interface MovieDatabase {
  action: Movie[];
  thriller: Movie[];
}
