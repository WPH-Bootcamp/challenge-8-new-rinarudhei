import type { AxiosError } from "axios";
import type {
  IDataMovies,
  IMovieDetail,
  IParamsFindMoviesByQuery,
  IParamsGetMovieDetail,
  IParamsGetMovies,
} from "./type";
import {
  keepPreviousData,
  useInfiniteQuery,
  useQuery,
} from "@tanstack/react-query";
import { getMovieDetail, getNewMovies, getPopularMovies } from "./api";

export const useGetInfiniteMovies = (params: IParamsGetMovies) => {
  return useInfiniteQuery<IDataMovies, AxiosError>({
    initialPageParam: 1,
    queryKey: ["infinity-movies", params],
    queryFn: ({ pageParam }) =>
      getNewMovies({ ...params, page: pageParam as number }),
    getNextPageParam: (responseData) => {
      if (responseData.page < responseData.total_pages)
        return responseData.page + 1;
      else return undefined;
    },
  });
};

export const useFindInfiniteMovies = (params: IParamsFindMoviesByQuery) => {
  return useInfiniteQuery<IDataMovies, AxiosError>({
    initialPageParam: 1,
    queryKey: ["infinity-search", params],
    queryFn: ({ pageParam }) =>
      getNewMovies({ ...params, page: pageParam as number }),
    getNextPageParam: (responseData) => {
      if (responseData.page < responseData.total_pages)
        return responseData.page + 1;
      else return undefined;
    },
  });
};

export const useGetMovies = (params: IParamsGetMovies) => {
  return useQuery<IDataMovies, AxiosError>({
    queryKey: ["popular-movies", params],
    queryFn: () => getPopularMovies({ ...params }),
    staleTime: 10 * 60 * 1000,
    placeholderData: keepPreviousData,
  });
};

export const useGetDetail = (params: IParamsGetMovieDetail) => {
  return useQuery<IMovieDetail, AxiosError>({
    queryKey: ["movie-detail", params],
    queryFn: () => getMovieDetail({ ...params }),
    staleTime: 10 * 60 * 1000,
    placeholderData: keepPreviousData,
  });
};
