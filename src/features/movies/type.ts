export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: Date;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface IDataMovies {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface IParamsGetMovies {
  language?: string;
  page?: number;
  sort_by?:
    | "original_title.asc"
    | "original_title.desc"
    | "primary_release_date.desc"
    | "primary_release_date.asc";
}

export interface IParamsGetMovieDetail {
  movieId: number;
}

export interface IMovieDetail {
  genres: Genre[];
  overview: string;
  vote_average: number;
  title: string;
  release_date: string;
  poster_path: string;
  adult: boolean;
  backdrop_path: string;
  id: number;
  video: boolean;
}

type Genre = {
  id: number;
  name: string;
};

export interface IParamsFindMoviesByQuery {
  query: string;
  page: number;
}
