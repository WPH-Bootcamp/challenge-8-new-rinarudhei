import { api } from "../../lib/api";
import type {
  IParamsFindMoviesByQuery,
  IParamsGetMovieDetail,
  IParamsGetMovies,
} from "./type";

export const getPopularMovies = async ({
  page,
  language,
}: Omit<IParamsGetMovies, "sortBy">) => {
  const response = await api.get("/movie/popular", {
    params: {
      language,
      page,
    },
  });

  return response.data;
};

export const getNewMovies = async ({ page, language }: IParamsGetMovies) => {
  const response = await api.get("/movie/now_playing", {
    params: {
      language,
      page,
      sortBy: "primary_release_date.desc",
    },
  });

  return response.data;
};

export const findMoviesByQuery = async ({
  query,
}: IParamsFindMoviesByQuery) => {
  const response = await api.get("/search/movie", {
    params: {
      query,
    },
  });
  return response.data;
};

export const getMovieDetail = async ({ movieId }: IParamsGetMovieDetail) => {
  const response = await api.get(`/movie/${movieId}`, {
    params: {
      language: "en-US",
    },
  });

  return response.data;
};
