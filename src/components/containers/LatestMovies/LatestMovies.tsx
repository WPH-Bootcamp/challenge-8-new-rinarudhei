import type {
  FetchNextPageOptions,
  InfiniteData,
  InfiniteQueryObserverResult,
} from "@tanstack/react-query";
import React from "react";
import type { IDataMovies } from "../../../features/movies/type";
import MovieCard from "../MovieCard";
import type { AxiosError } from "axios";

type LatestMoviesProps = {
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
  isFetching: boolean;
  infiniteData: InfiniteData<IDataMovies, unknown>;
  fetchNextPage: (
    options?: FetchNextPageOptions,
  ) => Promise<
    InfiniteQueryObserverResult<
      InfiniteData<IDataMovies, unknown>,
      AxiosError<unknown, unknown>
    >
  >;
};
const LatestMovies: React.FC<LatestMoviesProps> = ({
  hasNextPage,
  isFetchingNextPage,
  isFetching,
  infiniteData,
  fetchNextPage,
}) => {
  return (
    <div className="mx-auto px-4 pb-10 gap-6 mt-80 xl:mt-120  flex flex-col justify-start items-start ">
      <h2 className="text-2xl md:text-3xl lg:text-4xl lg:tracking-tight leading-9 xl:leading-12 font-bold text-start text-[#fdfdfd]   sm:ml-12 lg:ml-25 xl:ml-32">
        New Release
      </h2>
      <div className=" gap-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 auto-cols-[173px] xl:auto-cols-[216px] sm:ml-12 lg:ml-25 xl:ml-32">
        {infiniteData.pages.map((movies, i) => (
          <React.Fragment key={i}>
            {movies.results.map((movie, index) => (
              <MovieCard
                key={movie.id}
                id={movie.id}
                i={index}
                posterPath={movie.poster_path}
                title={movie.title}
                voteAverage={movie.vote_average}
                usePopularRank={false}
              ></MovieCard>
            ))}
          </React.Fragment>
        ))}
      </div>
      {hasNextPage && (
        <>
          <div className="absolute z-45 bottom-6 left-0 md:left-0 w-full h-95.75 md:h-105 lg:h-124 bg-linear-to-t from-black from-30% to-black/0 border-none"></div>
          <button
            className="z-50 flex h-11 xl:h-13 w-50 xl:w-57.5 p-2 gap-2 border border-[#181d27] bg-[#0a0d12]/60 rounded-full justify-center items-center backdrop-blur-2xl absolute bottom-28.25 xl:bottom-56 left-24.25 sm:left-[calc(50%-80px)] xl:left-151.25 cursor-pointer"
            onClick={() => fetchNextPage()}
            disabled={!hasNextPage || isFetching}
          >
            <p className="font-semibold text-center text-sm lg:text-base leading-7 lg:leading-7.5 text-[#fdfdfd]">
              {isFetchingNextPage ? "Loading more..." : "Load More"}
            </p>
          </button>
        </>
      )}
    </div>
  );
};

export default LatestMovies;
