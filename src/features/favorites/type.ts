export type DataFavoriteMovies = {
  [key: number]: FavMovie;
};

export type FavMovie = {
  id: number;
  posterPath: string;
  trailerKey: string;
  title: string;
  overview: string;
  rating: string;
};
