import React, { useRef } from "react";
import Nav from "../components/containers/NavBar";
import { useGetInfiniteMovies, useGetMovies } from "../features/movies/hooks";
import Hero from "../components/containers/Hero";
import LoadingSpinner from "../components/containers/LoadingSpinner";
import TrendingMovies from "../components/containers/TrendingMovies";
import LatestMovies from "../components/containers/LatestMovies";
import Footer from "../components/containers/Footer";
import ErrorMessage from "../components/containers/ErrorMessage";

const Homepage: React.FC = () => {
  const {
    data: dataMovies,
    isError,
    error,
    isPending,
  } = useGetMovies({
    page: 1,
    language: "en-US",
  });

  const {
    data,
    error: errorFetchLatestMovies,
    isError: isErrorFetchLatestMovies,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
    status,
  } = useGetInfiniteMovies({
    page: 1,
    language: "en-US",
  });

  const scrollRef = useRef<HTMLDivElement>(null);

  if (
    isPending ||
    status === "pending" ||
    (isFetching && !isFetchingNextPage)
  ) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  if (isError || isErrorFetchLatestMovies) {
    return (
      <ErrorMessage
        errorMessage={
          error
            ? error.message
            : errorFetchLatestMovies
              ? errorFetchLatestMovies.message
              : "Error getting movie list"
        }
      ></ErrorMessage>
    );
  }

  return (
    <>
      <Nav></Nav>
      <div className="min-w-98.25 max-w-360 h-max mx-auto relative">
        <Hero
          title={dataMovies.results[0].title}
          overview={dataMovies.results[0].overview}
          backdropPath={dataMovies.results[0].backdrop_path}
          movieId={dataMovies.results[0].id}
          video={dataMovies.results[0].video}
        ></Hero>

        <div className="w-full mt-35.25 sm:mt-45 md:mt-65 lg:mt-95 xl:-mt-11.75 relative">
          <TrendingMovies
            scrollRef={scrollRef}
            movies={dataMovies.results}
          ></TrendingMovies>
          <LatestMovies
            hasNextPage={hasNextPage}
            isFetchingNextPage={isFetchingNextPage}
            isFetching={isFetching}
            infiniteData={data}
            fetchNextPage={fetchNextPage}
          ></LatestMovies>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Homepage;
